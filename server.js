if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
var path = require('path');
const bcrypt = require('bcryptjs')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

app.listen(PORT, function(){
    console.log(`Server now Listening on http://localhost:${PORT}`);
})