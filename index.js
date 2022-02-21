const express =require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const flash =require('connect-flash');
const ejs = require('ejs');
const mongoose = require('mongoose');
const dbDriver ="mongodb+srv://Soumyadip:Panja21031998@cluster0.cf1ge.mongodb.net/myblog"

const app = express();
app.set('view engine', 'ejs')
app.set('views','views')


app.use(express.urlencoded({extended:true}));

// Parse JSON data
app.use(express.json())

// set cookie parser,session & flash
app.use(cookieParser('SecretStringForCookies'));
app.use(session({
    secret:'SecretStringForSession',
    cookie: {maxAge:60000},
    resave:true,
    saveUninitialized:true
}));
app.use(flash());

// Route
const UserRouter = require('./Route/UserRoute')
app.use(UserRouter)

// api route
const ApiRoute = require('./Route/ApiRoute');
app.use('/api/', ApiRoute);



// define port
const port =process.env.PORT ||6001
mongoose.connect(dbDriver,{useNewUrlparser:true,useUnifiedTopology:true})
.then(result =>{
    app.listen(port,() =>{
        console.log(`server running at http://localhost:${port}`)
        console.log(`database Connected`)
    })
}).catch(err =>{
    console.log(`connection failed`)
})

