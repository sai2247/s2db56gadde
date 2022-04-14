var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var dollargeneral_controller = require('../controllers/dollargeneral'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// dollargeneral ROUTES /// 
 
// POST request for creating a dollargeneral.  
router.post('/dollargenerals', dollargeneral_controller.dollargeneral_create_post); 
 
// DELETE request to delete dollargeneral. 
router.delete('/dollargenerals/:id', dollargeneral_controller.dollargeneral_delete); 
 
// PUT request to update dollargeneral. 
router.put('/dollargenerals/:id', dollargeneral_controller.dollargeneral_update_put); 
 
// GET request for one dollargeneral. 
router.get('/dollargenerals/:id', dollargeneral_controller.dollargeneral_detail); 
 
// GET request for list of all dollargeneral items. 
router.get('/dollargenerals', dollargeneral_controller.dollargeneral_list); 
 
module.exports = router; 