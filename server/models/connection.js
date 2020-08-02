const mongoose = require('mongoose');

const { mongoConfig } = require('../config');

let url = mongoConfig.mongoAtlas();

/* if (process.env.NODE_ENV === 'production') {
  url = mongoConfig.mongo_url(); //url de db local o mongo atlas
} else {
  url = 'mongodb://localhost:27017/escuela';
} */

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

console.log( url, process.env.MONGO_ATLAS);

const connect = () => mongoose.connect(url, options);

mongoose.Promise = global.Promise;

module.exports = {
  connect,
  mongoose
};
