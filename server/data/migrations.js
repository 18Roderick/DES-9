const models = require('../models');
const productos = require('./productos');

async function loadDb() {
  try {
   data =  await models.Productos.insertMany(productos);
   console.log('datos insertados')
  } catch (error) {
    console.log(error);
  }
}

module.exports = loadDb;