import React from 'react'
import Navbar from './navbar/navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './navbar/style.scss'




class Home extends React.Component {


    render() {
        return (
            <div className="navbar">
                <Router>
                    <Navbar />
                </Router>
            </div>
        )
    }
}

export default Home