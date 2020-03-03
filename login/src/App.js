import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter, useHistory } from "react-router-dom";
import Register from './components/register'
import Register2 from './components/register2'
// import redirect from './components/register2'
import Login from './components/login'
import Home from './components/home'
import './App.css';
import LoginContext from './utils/loginContext'
// import e from 'express';
import axios from 'axios';

  

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState('');
// let history = useHistory();
  

  function handleRegisterSubmit(newName, email, password, cb) {
    setUsername(newName);
    setEmail(email);
    setPassword(password)
    axios.post('api/register', {name: newName, email: email, password: password})
    .then((response)=>{
      console.log(response)
      if(response.status === 200){
        var target = "login"
        cb(target);
        // Register2.redirect()
      }
    })
    console.log('ive been clicked')
    console.log(`newname in app: ${newName}`)
  }
  console.log(`what is the state in app?  ${username} ${email} ${password}`)

  return (
    <>
      <LoginContext.Provider value={{username, handleRegisterSubmit}}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/register2' component={Register2}/>
            </Switch>
          </div>
        </Router>
      </LoginContext.Provider>
    </>
  )

}

export default App;
