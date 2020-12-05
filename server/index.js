const winston = require("winston");
const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const bodyParser = require("body-parser");
const express = require("express");

const port = process.env.PORT ||4000;
const app = express();

//create session 
app.use(session({
    //Used to compute a hash
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    //Store session on DB
    store: new MongoStore({mongooseConnection: mongoose.connect}),
})
);

//Parsing incoming request bodies in a middleware before your handlers, avaialable under the req.body property.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(passport.)