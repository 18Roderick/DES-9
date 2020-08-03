//variables de entorno con dotenv//
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const flash = require('connect-flash');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const MongoStore = require('connect-mongo')(session);
const flashConfig = require('./middlewares/flashConfig');

const { connect, mongoose } = require('./models/connection');

// rutas
const routes = require('./routes');
const error404 = require('./routes/errorRouter');
// initializations
const app = express();

// variables
const store = new MongoStore({ mongooseConnection: mongoose.connection, autoReconnect: true });
const PORT = process.env.PORT || 3001;
const PUBLIC_FILES = path.join(__dirname, 'public');
const VIEWS = path.join(__dirname, 'views');
const GALERIA_PATH = path.join(__dirname, 'images');
const FAVICON = path.join(PUBLIC_FILES, '/img/favicon/GreenLogo.ico');
// configuraciones
app.set('port', PORT);
app.set('views', VIEWS);
app.set('view engine', 'pug');

app.use(compression());
app.use(helmet());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('*', (req, res, next) => {
  console.log('a ver que pasa', req.session);
  next();
});
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'njknadkjajkdb224',
    store,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: process.env.DEVLOPMENT ? true : false, sameSite: true }
  })
);

app.use(flash());
app.use(morgan('dev'));

//direcciones estáticas
app.use(express.static(PUBLIC_FILES));
app.use('/images', express.static(GALERIA_PATH));

app.use(favicon(FAVICON));

app.use(flashConfig);

//rutas

app.use(routes);

app.use(error404);

//captura de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.render('error', { title: 'Error', status: 500, error: err, user: req.session.user || null });
});

connect()
  .then(() => {
    // require('./data/migrations');
    app.listen(PORT, () => console.log(`server ready on http://localhost:${PORT}`));
  })
  .catch(e => {
    console.log(`Error al conectar a la base de datos `, e.message);
  });
