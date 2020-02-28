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

const initializePassport = require('./passport-config');
initializePassport(passport, email=>
    users.find(user => user.email === email),
    id => users.find(user => user.id===id)
);



const users = []

// app.use(flash())
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false 
// }))
// app.use(passport.initialize())
// app.use(passport.session())
// app.use(methodOverride('_method')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/login', (req,res)=>{
    res.send("success")
    console.log(req.body)
})
app.post('/api/register', async (req,res)=>{
    console.log(req.body)
    try{
        const hashdPwrd = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashdPwrd,
            isAuthenticated: req.body.isAuth
        })
        res.send(200)}
        catch{
            res.send(300)
        }
        console.log(users)
})

app.listen(PORT, function(){
    console.log(`Server now Listening on http://localhost:${PORT}`);
})