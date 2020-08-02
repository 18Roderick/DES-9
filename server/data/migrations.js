const models = require('../models');
const productos = require('./productos');

async function loadDb() {
  try {
    await models.Productos.insertMany(productos);
  } catch (error) {
    console.log(error);
  }
}

loadDb();
