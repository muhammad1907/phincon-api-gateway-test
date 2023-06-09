
const express = require('express');
const router = express.Router();

const usersHandler = require('./handler/user');
const verifyToken = require('../middlewares/verifyToken');
// 
router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);
router.get('/', verifyToken, usersHandler.getUser);
router.post('/logout', verifyToken, usersHandler.logout);

module.exports = router;
