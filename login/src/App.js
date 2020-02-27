import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Register from './components/register'
import Login from './components/login'
import Home from './components/home'
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      loggedIn: false,
      username: null
    }
  }
  render(){
    return (
    <>
      <Router>
        <div>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path='/register' component={Register}/>
          </Switch>
        </div>
      </Router>
    </>
    
  )}
  
}

export default App;
