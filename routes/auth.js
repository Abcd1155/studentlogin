var express = require('express');
var router = express.Router();
const controller=require('../controller/login.controller');
/* GET home page. */

router.post('/login',controller.loginAuth);
module.exports = router;
