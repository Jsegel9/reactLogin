import React, { Component, useContext, useEffect, useState } from 'react';
import axios from 'axios'
import LoginContext from '../utils/loginContext'
import {withRouter, useHistory } from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();
    let {username, isAuthenticated, handleLoginSubmit} = useContext(LoginContext);
    const newSubmit = event => {
        event.preventDefault();
        console.log(event);
        handleLoginSubmit(email, password)
    }
    const onInputChange = (e)=>{
        if (e.target.name === "email"){
            setEmail(e.target.value)
        }else if(e.target.name === "password"){
            setPassword(e.target.value)
        }
    }

    return(
        <>
        <h1>Login</h1>

<div className="loginContain">
    <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" onChange={onInputChange} required></input>
</div>
<div>
    <label for="password">password</label>
    <input type="password" id="password" name="password" onChange={onInputChange} required></input>
</div>
<button onClick={newSubmit}>Login</button>
</div>
<a href="/register2">Register</a>
    </>
    )
}

// class Login extends React.Component{
//     static contextType = LoginContext;
//     constructor(props){
//         super(props);
//         this.state={
//             email:'',
//             password: ''
//         }
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.onInputChange = this.onInputChange.bind(this)

//     }
//     componentDidMount(){
//         const user=this.context;
//         console.log(user)
//     }
//    handleSubmit(e){
//         e.preventDefault();
//     axios.post('/api/login',{email: this.state.email, password: this.state.password})
//     .then((response)=>{
//         console.log(response)
//         // console.log(this.state.loginFields)
//     })
//     .catch((error)=>{
//         console.log(error)  
//     })
//     }
//     onInputChange(e){
//         const {name, value} = e.target
        
//         this.setState({
//             [name]: value
//         })
//     }
//     render(){
//         console.log(this.state)
//         return(
//             <>
//         <h1>Login</h1>
// <form onSubmit={this.handleSubmit} >
// <div>
//     <label for="email">Email</label>
//     <input type="email" id="email" name="email" onChange={this.onInputChange} required></input>
// </div>
// <div>
//     <label for="password">password</label>
//     <input type="password" id="password" name="password" onChange={this.onInputChange} required></input>
// </div>
// <button type="submit">Login</button>
// </form>
// <a href="/register">Register</a>
// </>
//         )
//     }

// }

export default Login;