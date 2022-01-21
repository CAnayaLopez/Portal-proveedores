require('dotenv').config({path: './.env'});
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
require('dotenv').config();

const app = express();

// settings de express
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app/views/'));
app.set('port', process.env.PORT || 3000);

// middlewares
app.use((req, res, next) => {
	console.log(`${req.url} - ${req.method}`);
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.use(require('./app/routes/index'));
app.use('/user',require('./app/routes/user_router'));
app.use('/auth',require('./app/routes/auth_router'));

// satic files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT, () => console.log(`server on port ${process.env.PORT}`));
