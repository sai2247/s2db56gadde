var express = require('express');
const dollargeneral_controlers= require('../controllers/dollargeneral'); 
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
 // res.render('dollargeneral', { title: 'search result' });
//});
router.get('/', dollargeneral_controlers.dollargeneral_view_all_Page );
/* GET detail dollargeneral page */ 
router.get('/detail', dollargeneral_controlers.dollargeneral_view_one_Page); 
/* GET create dollargeneral page */ 
router.get('/create', dollargeneral_controlers.dollargeneral_create_Page);

/* GET create update page */ 
router.get('/update', dollargeneral_controlers.dollargeneral_update_Page); 

/* GET delete dollargeneral page */ 
router.get('/delete', dollargeneral_controlers.dollargeneral_delete_Page); 

module.exports = router;