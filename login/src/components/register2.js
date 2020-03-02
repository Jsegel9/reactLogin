// register new user page
import React, {useEffect, useState, useContext} from 'react';
import LoginContext from '../utils/loginContext'
import axios from 'axios';
import bcrypt from 'bcryptjs'
import Login from './login';

function Register2(){
    const [email, setEmail] = useState('')
    const [localUsername, setLocalUsername] = useState('')
    const [password, setPassword] = useState('');

    let {username, isAuthenticated, handleRegisterSubmit} = useContext(LoginContext)
    const newSubmit = event => {
        event.preventDefault();
        console.log(event)
        handleRegisterSubmit(localUsername, email, password)

    }
    const onInputChange = (e)=>{
        if (e.target.name === "username") {
            setLocalUsername(e.target.value)
        } else if (e.target.name ==="email"){
            setEmail(e.target.value)
        }else if (e.target.name === "password"){
            setPassword(e.target.value)
        }
        console.log(username)
        console.log(localUsername)
    }
    // static contextType = LoginContext;

    // constructor(props){
    //     super(props);
    //     this.state={
    //         name: '',
    //         email:'',
    //         password:'',
    //         isAuth: false
    //     }
    //     this.handleSubmit = this.handleSubmit.bind(this)
    //     this.onInputChange = this.onInputChange.bind(this)
    // }
    // componentDidMount(){
    //     const user=this.context;
    //     console.log(user);
        
    // }
    // componentDidUpdate(prevstate){
    //     if (prevstate.isAuth ==! this.state.isAuth){
    //     }
    // }
    // handleSubmit(e){
    //     e.preventDefault();
    //     axios.post('api/register', {name: this.state.name, email: this.state.email, password: this.state.password, isAuth: this.state.isAuth})
    //     .then((response)=>{
    //         console.log(response)
    //         if(response.status === 200){
    //             console.log("registration successful")
    //             console.log(LoginContext);
    //             this.setState({isAuth: true})
    //             console.log(LoginContext)
    //             console.log(this.state)
                
    //         }
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // }
    console.log(email)
    console.log(username)
        return(
            <>

        <h1>Register</h1>
<div className="registerContain">
<div>
    <label for="name">Name</label>
    <input type="text" id="name" name="username" onChange={onInputChange} required></input>
</div>

<div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" onChange={onInputChange} required></input>
</div>
<div>
    <label for="password">password</label>
    <input type="password" id="password" name="password" onChange={onInputChange} required></input>
</div>
<button onClick={newSubmit}>Register</button>
</div>
<a href="/login">Login</a>
<br></br>
        </>
        )
    
}


export default Register2;    