require('dotenv').config();
const jwt = require('jsonwebtoken');
const fs = require('fs');

const TOKEN_ALGORITHM = process.env.TOKEN_ALGORITHM || 'SH256';
const PRIVATE_KEY = fs.readFileSync('./token_private.key', 'utf8'); // keys privados del token
//const PUBLIC_KEY = fs.readFileSync('./token_public.key', 'utf8'); //keys públicos del token

//configuración del token
const tokenConfig = {
  issuer: 'SEEDS',
  expiresIn: '1h',
  algorithm: TOKEN_ALGORITHM,
  audience: 'Client_Identity'
};

//creación del token
async function create(data) {
  try {
    return jwt.sign({ data }, PRIVATE_KEY, tokenConfig);
  } catch (error) {
    throw error;
  }
}

//verificación del token
async function verify(token) {
  try {
    const verified = jwt.decode(token, { complete: true });

    return {
      success: true,
      data: verified.payload.data
    };
  } catch (error) {
    let newError = new Error();
    newError.message = error.message;
    newError.name = 'Token Error';
    newError.success = false;
    throw newError;
  }
}

//decodificación del token
async function decode(token) {
  try {
    const verified = jwt.decode(token, { complete: true });
    return {
      success: true,
      data: verified.payload.data
    };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  decode,
  create,
  verify
};
