const express = require('express');
const connection = require("./connection");
const contactRoute = require('./routes/contact');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/',contactRoute);

module.exports = app;