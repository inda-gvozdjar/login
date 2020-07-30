import React from "react";
import "./style.scss";
import { fire } from '../../config/Fire'
import Login from "./login";
import Home from '../home';


class Loginapp extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null
        };
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null })
            }
        });

    }
    render() {

        return (
            <div className="login-body">
                {this.state.user ? (<Home />) : (<Login />)}
            </div>
        );
    }
}



export default Loginapp;