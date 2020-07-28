const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./usuarios');

router.use('/auth', authRouter);
router.use('/usuario', userRouter);
module.exports = router;
