import React from "react";
import { fire } from '../../config/Fire'
import './style.scss'
import loginImg from "../../login.svg";
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            fireErrors: "",
            formTitle: "Login",
            loginBtn: true
        };
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({ fireErrors: error.message })
            });
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({ fireErrors: error.message })
            });
    }

    getAction = action => {
        if (action === "reg") {
            this.setState({ formTitle: "Register New User", loginBtn: false, fireErrors: "" })
        } else {
            this.setState({ formTitle: "Login", loginBtn: true, fireErrors: "" })
        }
    }

    render() {

        let errorNottification = this.state.fireErrors ? (<div className="Error">{this.state.fireErrors}</div>) : null


        let submitBtn = this.state.loginBtn ?
            (<input className="loginBtn" type="submit" onClick={this.login} value="Sign in" />) :
            (<input className="loginBtn" type="submit" onClick={this.register} value="Sign up" />)

        let login_register = this.state.loginBtn ?
            (<button className="btn" onClick={() => this.getAction('reg')}>Not have an account? Sign up</button>) :
            (<button className="btn" onClick={() => this.getAction('login')}>Already have account? Sign in</button>)

        let forgot_pass = this.state.loginBtn ? (<button className="forgotPass">Forgot password?</button>) : null

        return (
            <div className="container">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div id="title">{this.state.formTitle}</div>
                <div className="body">
                    {errorNottification}
                    <form>
                        <input type="text"
                            id="username"
                            value={this.state.email}
                            onChange={this.handleChange}
                            name="email"
                            placeholder="E-mail" />
                        <input type="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            name="password"
                            placeholder="Password" />
                    </form>
                    <div id="lower">
                        {submitBtn}
                        <Link to="/forgotpassword">
                            {forgot_pass}
                        </Link>
                    </div>
                    <div className="login-register">
                        {login_register}
                    </div>
                </div>
            </div>
        );
    }
}

export default Login