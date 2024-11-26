const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const app = express;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(
    session({
        secret: 'secretSanta',
        resave: false,
        saveUninitialized: false,
    })
);

