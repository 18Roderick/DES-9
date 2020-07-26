require('dotenv').config();
const config = {
  email: process.env.EMAIL || '',
  password: process.env.EMAIL_PASSWORD || '',
  service: process.env.EMAIL_SERVICE || ''
};

module.exports = config;
