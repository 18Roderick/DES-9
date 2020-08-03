require('dotenv').config();
const axios = require('axios');
const request = require('request');
const sha512 = require('js-sha512').sha512;
const { pagueloFacil } = require('../config');

const payment = {
  data: {
    CCLW:
      '0A148690150F906F4C585B390D8613C394D00D1BB6D6A30A1B8C6BE61F0C5E5D87916E635070C029F2FFBB2CBA2F5621F5A718CEB26B2429AF88966E36499EFA',
    txType: 'SALE',
    CMTN: 5.33,
    CDSC: 'Venta de mercancía',
    CCNum: '',
    ExpMonth: '',
    ExpYear: '',
    CVV2: '',
    name: '',
    LastName: '',
    Email: '',
    Address: '',
    Tel: '',
    Ip: '',
    SecretHash: ''
  },
  config: {
    method: 'post',
    url: 'https://sandbox.paguelofacil.com/rest/ccprocessing/',
    headers: {
      'cache-control': 'no-cache',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {}
  },
  requestAsync: function() {
    return new Promise((resolve, reject) => {
      request({ ...this.config, json: true }, (error, response, body) => {
        if (error) reject(error);
        resolve(body);
      });
    });
  },
  pagar: async function(datos = {}) {
    try {
      this.data.CCLW = pagueloFacil.CCLW;
      const str = datos.CCNum + datos.CVV2 + datos.Email;
      console.log(str);
      const hash =  sha512(str);
      this.data = {
        ...this.data,
        ...datos,
        SecretHash: hash
      };
      this.config.form = this.data;
 
      const response = await this.requestAsync();
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};

module.exports = payment;
