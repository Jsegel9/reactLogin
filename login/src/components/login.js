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
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }
   handleSubmit(e){
        e.preventDefault();
    axios.post('/api/login',this.state.loginFields)
    .then((response)=>{
        console.log(response)
        // console.log(this.state.loginFields)
    })
    .catch((error)=>{
        console.log(error)  
    })
    }
    onInputChange(e){
        let loginFields = {...this.state.loginFields}
        const {name, value} = e.target
        
        this.setState({
            loginFields: {[name]: value}
        })
        console.log(loginFields)
    }
    render(){
        return(
            <>
        <h1>Login</h1>
<form onSubmit={this.handleSubmit} >
<div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" onChange={this.onInputChange} required></input>
</div>
<div>
    <label for="password">password</label>
    <input type="password" id="password" name="password" onChange={this.onInputChange} required></input>
</div>
<button type="submit">Login</button>
</form>
<a href="/register">Register</a>
</>
        )
    }

}

export default Login;