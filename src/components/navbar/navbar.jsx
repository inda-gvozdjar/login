import React, { Component } from 'react';
import './style.scss';
import { fire } from '../../config/Fire';
import { Link } from 'react-router-dom';


class Navbar extends Component {


    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="nav">
                <ul>

                    <Link to="/login">
                        <button className="logout-btn" onClick={this.logout}>Logout</button>
                    </Link>

                </ul>
            </div >

        )
    }
}


export default Navbar;
