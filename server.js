if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
var path = require('path');
const bcrypt = require('bcryptjs')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const axios = require('axios')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = []

app.post('/api/login', (req,res)=>{
    res.send("success")
    console.log(req.body)
})
app.post('/api/register', (req,res)=>{
    res.send("Success Register")
    console.log(req.body)
})

app.listen(PORT, function(){
    console.log(`Server now Listening on http://localhost:${PORT}`);
})