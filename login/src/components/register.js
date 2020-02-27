// register new user page
import React from 'react';
import LoginContext from '../utils/loginContext'
import axios from 'axios';

// function Register(){
//     return(
//         <>
//         <h1>Register</h1>
// <form action="/register" method="POST">
// <div>
//     <label for="name">Name</label>
//     <input type="text" id="name" name="name" required></input>
// </div>
// <div>
//     <label for="email">Email</label>
//     <input type="email" id="email" name="email" required></input>
// </div>
// <div>
//     <label for="password">password</label>
//     <input type="password" id="password" name="password" required></input>
// </div>
// <button type="submit">Register</button>
// </form>
// <a href="/login">Login</a>
//         </>
//     );
// }

class Register extends React.Component{
    static contextType = LoginContext;
    constructor(props){
        super(props);
        this.state={
            name: '',
            email:'',
            password:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }
    componentDidMount(){
        const user=this.context;
    }
    handleSubmit(e){
        e.preventDefault();
        axios.post('api/register', {name: this.state.name, email: this.state.email, password: this.state.password})
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    onInputChange(e){
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    render(){
        return(
            <>
        <h1>Register</h1>
<form onSubmit={this.handleSubmit}>
<div>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" onChange={this.onInputChange} required></input>
</div>
<div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" onChange={this.onInputChange} required></input>
</div>
<div>
    <label for="password">password</label>
    <input type="password" id="password" name="password" onChange={this.onInputChange} required></input>
</div>
<button type="submit">Register</button>
</form>
<a href="/login">Login</a>
        </>
        )
    }
}


export default Register;    