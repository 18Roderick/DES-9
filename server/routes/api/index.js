const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./usuarios');
const mercaciaRouter = require('./mercancia')

router.use('/auth', authRouter);
router.use('/usuario', userRouter);
router.use('/mercancia', mercaciaRouter)

module.exports = router;
