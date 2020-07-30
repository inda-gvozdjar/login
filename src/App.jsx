import React, { Component } from 'react';
import './App.scss';
import Loginapp from './components/login/loginapp';
import UserProvider from "./providers/UserProvider";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ForgotPass from './components/login/forgotPass'
import Home from './components/home'


class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <UserProvider>
              <Route path="/" render={() => (
                <Redirect to="/login" />
              )} />
              <Route path="/login" component={Loginapp} />
              <Route path="/forgotpassword" component={ForgotPass} />
              <Route exact path="/home" component={Home} />
            </UserProvider>
          </Switch>
        </Router>
      </div >
    )
  }
}

export default App;
