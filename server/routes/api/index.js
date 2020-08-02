const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.json({
        succes:true,
        message: 'Bienvenido al api de SEEDS'
    })
});


module.exports = router;
