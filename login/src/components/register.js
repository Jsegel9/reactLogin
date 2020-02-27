// register new user page
import React from 'react';

function Register(){
    return(
        <>
        <h1>Register</h1>
<form action="/register" method="POST">
<div>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required></input>
</div>
<div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required></input>
</div>
<div>
    <label for="password">password</label>
    <input type="password" id="password" name="password" required></input>
</div>
<button type="submit">Register</button>
</form>
<a href="/login">Login</a>
        </>
    );
}


export default Register;    