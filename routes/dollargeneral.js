var express = require('express');
const dollargeneral_controlers= require('../controllers/dollargeneral'); 
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
 // res.render('dollargeneral', { title: 'search result' });
//});
router.get('/', dollargeneral_controlers.dollargeneral_view_all_Page );
module.exports = router;