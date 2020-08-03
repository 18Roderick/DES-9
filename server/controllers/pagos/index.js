const { Usuario, Compras } = require('../../models');

const { payment } = require('../../services');

module.exports.pagar = async (req, res) => {
  try {
    const { CMTN, CCNum, ExpMonth, ExpYear, CVV2, name, LastName, Email, Address, Tel } = req.body;

    if (
      CMTN &&
      CCNum &&
      ExpMonth &&
      ExpYear &&
      CVV2 &&
      name &&
      LastName &&
      Email &&
      Address &&
      Tel
    ) {
      const response = await payment.pagar({CMTN, CCNum, ExpMonth, ExpYear, CVV2, name, LastName, Email, Address, Tel});
      res.json({ data: response });
    }else{
        res.json({message: 'Faltan datos requeridos'})
    }

    
    //res.render('carrito', { title: 'Pago Exitoso', message: 'Transacción exitosa' });
  } catch (error) {
    res.json({ ...error });
    //res.render('carrito', { title: 'Carrito', message: 'Error al realizar pago' });
  }
};
