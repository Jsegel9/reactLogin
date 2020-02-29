// register new user page
import React, {useEffect, useState} from 'react';
import LoginContext from '../utils/loginContext'
import axios from 'axios';
import bcrypt from 'bcryptjs'

class Register extends React.Component{
    const [login, setLogin] = useState({})

    static contextType = LoginContext;

    constructor(props){
        super(props);
        this.state={
            name: '',
            email:'',
            password:'',
            isAuth: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }
    componentDidMount(){
        const user=this.context;
        console.log(user);
        
    }
    componentDidUpdate(prevstate){
        if (prevstate.isAuth ==! this.state.isAuth){
        }
    }
    handleSubmit(e){
        e.preventDefault();
        axios.post('api/register', {name: this.state.name, email: this.state.email, password: this.state.password, isAuth: this.state.isAuth})
        .then((response)=>{
            console.log(response)
            if(response.status === 200){
                console.log("registration successful")
                console.log(LoginContext);
                this.setState({isAuth: true})
                console.log(LoginContext)
                console.log(this.state)
                
            }
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
            <LoginContext.Provider value={this.state}>
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
</LoginContext.Provider>
        </>
        )
    }
}


export default Register;    