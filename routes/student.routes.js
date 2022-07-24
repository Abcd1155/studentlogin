var express = require('express');
var router = express.Router();
const controller=require('../controller/student.controller');
/* GET home page. */
router.get('/',controller.getAll);
router.post('/new',controller.createUser);

module.exports = router;
