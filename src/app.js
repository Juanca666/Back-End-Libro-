const express = require('express');
const config = require('./config');

const app = express()

//Config
app.set('port', config.port)

