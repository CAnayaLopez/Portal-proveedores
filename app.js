require('dotenv').config({path: './.env'});
// const path = require('path');
// const express = require('express');
// const bodyParser = require('body-parser');
// const expressValidator = require('express-validator');
// require('dotenv').config();

const Server = require('./app/models/server');

const server = new Server();

server.listen();
