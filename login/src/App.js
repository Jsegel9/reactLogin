import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Register from './components/register'
import Register2 from './components/register2'
import Login from './components/login'
import Home from './components/home'
import './App.css';
import LoginContext from './utils/loginContext'

function App() {
  const [username, setUsername] = useState('')

  function handleLoginSubmit(newName) {
    setUsername(newName)
    console.log('ive been clicked')
    console.log(`newname in app: ${newName}`)
  }
  console.log(`what is the username state in app?  ${username}`)

  return (
    <>
      <LoginContext.Provider value={{username, handleLoginSubmit}}>
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
