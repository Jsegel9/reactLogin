import React, { Component } from 'react';
const axios = require('axios')

// function Login(){



// const handleSubmit = function(e){
//     e.preventDefault();
//     axios.post('localhost:3000/api/login')
//     .then(function(response){
//         console.log(response)
//     })
// }
//     return(
//         <>
//         <h1>Login</h1>
// <form onSubmit={handleSubmit} >
// <div>
//     <label for="email">Email</label>
//     <input type="email" id="email" name="email" required></input>
// </div>
// <div>
//     <label for="password">password</label>
//     <input type="password" id="password" name="password" required></input>
// </div>
// <button type="submit">Login</button>
// </form>
// <a href="/register">Register</a>
// </>
//     )
// }

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loginFields:{
                email: '',
                password: ''
            }
        }
    }
    render(){
        return(
            <>
        <h1>Login</h1>
<form onSubmit={handleSubmit} >
<div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required></input>
</div>
<div>
    <label for="password">password</label>
    <input type="password" id="password" name="password" required></input>
</div>
<button type="submit">Login</button>
</form>
<a href="/register">Register</a>
</>
        )
    }
  var onInputChange = function(e){
        let loginFields = {...this.state.loginFields}
        //blah blah blah
    }
var handleSubmit = function(e){
        e.preventDefault();
    axios.post('localhost:3000/api/login')
    .then(function(response){
        console.log(response)
    })
    }
}

export default Login;