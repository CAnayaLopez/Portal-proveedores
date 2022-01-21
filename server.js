/*
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const path = require('path')

//Mensajes de error
const flash = require('connect-flash')
//sessiones
const session = require('express-session')
const MySQlStore = require('express-mysql-session')
//const { database } = require('./keys');
// passport autentificacion
const passport = require('passport');


//config server 
const app = express()
const server = require('http').Server(app)


//Inicialización
require('./lib/passport')

//Template html
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),

    extname: '.hbs',

    helpers: require('./lib/handlebars')
}))
// Ocupación de handlerbar, indiacar motor de plantillas 
app.set('view engine', '.hbs')

//middlewares peticiones al server
app.use(session({
    secret: 'clickOnline',
    resave: false,
    saveUninitialized: false,
    store: new MySQlStore(database)
}));
app.use(flash());
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(passport.initialize());
app.use(passport.session());

//middle para entender las peticiones del navegador
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// variables globales
app.use((req, res, next)=>{
    app.locals.satisfactorio = req.flash('satisfactorio');
    app.locals.error = req.flash('error');
    // variable de usuario global
    app.locals.usuario = req.user;
    next();
});

//Routers
app.use(require('./router/index'))
app.use(require('./router/autentificacion'))
//app.use('/user', require('./router/usuario'))


//Directorio public para tener css js disponible
app.use(express.static(path.join(__dirname, 'public')))

//Servidor
server.listen(4000, () => {
    console.log('Server starter')
}) */
require('dotenv').config({path: './.env'});
//console.log(process.env.DB_USER);
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
require('dotenv').config();


const app = express();
const routes = require('./routes/index.js');
const user = require('./routes/user');

// db settings

// settings de express
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);

//partials


// middlewares
app.use((req, res, next) => {
	console.log(`${req.url} - ${req.method}`);
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.use(routes);
app.use(user);
app.use('/auth',require('./routes/auth_router'));

// satic files
app.use(express.static(path.join(__dirname, 'public')));

/*calling stored procedure 
app.get("/user-detail/:id",function (request, response){
    var user_id =request.params.id;
    connection.query( "CALL get_user_detail(?)",[user_id], function(error,result,fields){
        if(error){
            throw error;
        }else{
            response.json(result);
        }
    });
});

//
//
app.post('/register', (req: Request, res: Response)=>{
    var pool = mysql.createPool({
    host        :process.env.HOST,
    user		 :process.env.USER,
    password    :process.env.PASSWORD,
    database	 :process.env.DATABASE,
    connectionLimit :10,
    multipleStatements: true
    });
    
    pool.getConnection(function(err: any, conn : any){
        if (err)
        {
            console.log('Entered into error')
            console.log(err)
            res.send({
                succes: false,
                statusCode:500,
                message: 'Getting error during  the connection'
            })
            return;
        }
        console.log('line 144')
        console.log(req.body)
        let.sqlQuery='call registeruser(?,?,?)';
        //if you got a connection
        conn.query(sqlQuery,[req.body.email, req.body.phone, req.body.password], function(err: any, rows : any) {
            if(err){
                conn.release();
                return res.send({
                    succes: false,
                    statusCode: 400
                });
            }
            console.log('line 150')
            console.log(req.body)
            //for simplicity, just send the rows
            res.send({
                message: 'Success',
                statusCode: 200,
                //data rows
            });
            //CLOSE THE CONNECTIONS
            conn.release();
        })
    })
    
})*/
//
//
// bootstraping the app
app.listen(3000, () => console.log('server on port 3000'));
