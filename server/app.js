//variables de entorno con dotenv//
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const { connect } = require('./models/connection');

// rutas
const routes = require('./routes');
const error404 = require('./routes/errorRouter');
// initializations
const app = express();

// variables

const PORT = process.env.PORT || 3001;
const PUBLIC_FILES = path.join(__dirname, 'public');

//const GALERIA_PATH = path.join(__dirname, 'galeria');
// configuraciones
app.set('port', PORT);

//direcciones estáticas
app.use('/public', express.static(PUBLIC_FILES));
app.use(favicon(path.join(PUBLIC_FILES, 'images', 'favicon.ico')));

app.use(compression());
app.use(helmet());
app.use(cors());

app.use(bodyParser.json());
app.use(cookieParser());

app.use(morgan('dev'));

//rutas
app.use(routes);

app.use(error404);

//captura de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    title: err.message,
    message: err.message
  });
});

connect()
  .then(() => {
    app.listen(PORT, () => console.log(`server ready on http://localhost:${PORT}`));
  })
  .catch(e => {
    console.log(`Error al conectar a la base de datos `, e.message);
  });
