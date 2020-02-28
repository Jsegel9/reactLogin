import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Register from './components/register'
import Login from './components/login'
import Home from './components/home'
import './App.css';
import LoginContext from './utils/loginContext'

class App extends Component{
  constructor(){
    super()
    this.state = {
      loggedIn: false
    }
  }
  render(){
    return (
    <>
    <LoginContext.Provider value={this.state}>
      <Router>
        <div>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path='/register' component={Register}/>
          </Switch>
        </div>
      </Router>
    </LoginContext.Provider>
    </>
    
  )}
  
}

export default App;
