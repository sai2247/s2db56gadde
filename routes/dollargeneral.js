var express = require('express');
const dollargeneral_controller = require('../controllers/dollargeneral');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or
// redirect to login. 
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('dollargenerals', { title: 'Search Results' });
});
*/
/* GET detail costume page */
router.get('/detail', dollargeneral_controller.dollargeneral_view_one_Page);

/* GET create costume page */
router.get('/create',secured, dollargeneral_controller.dollargeneral_create_Page);

/* GET costumes */
router.get('/', dollargeneral_controller.dollargeneral_view_all_Page);

/* GET create update page */
router.get('/update',secured, dollargeneral_controller.dollargeneral_update_Page);

/* GET delete costume page */
router.get('/delete',secured,dollargeneral_controller.dollargeneral_delete_Page);

module.exports = router;