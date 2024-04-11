const express = require("express");
const {authController} = require('../controllers')
const {authenticate} = require('../middlewares')

const router = express.Router();

router.get('/api/current', authenticate, authController.fetchCurrentUser);

module.exports = router;
