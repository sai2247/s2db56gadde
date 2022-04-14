var dollargeneral = require('../models/dollargeneral'); 
 
// List of all dollargenerals 
exports.dollargeneral_list = async function(req, res) { 
    try{ 
        thedollargeneral = await dollargeneral.find(); 
        res.send(thedollargeneral); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error hi ": ${err}}`); 
    }   
}; 
 
// for a specific dollargeneral. 
exports.dollargeneral_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: dollargeneral detail: ' + req.params.id); 
}; 
 
// Handle dollargeneral create on POST. 
exports.dollargeneral_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: dollargeneral create POST'); 
}; 
 
// Handle dollargeneral delete form on DELETE. 
exports.dollargeneral_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: dollargeneral delete DELETE ' + req.params.id); 
}; 
 
// Handle dollargeneral update form on PUT. 
exports.dollargeneral_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: dollargeneral update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.dollargeneral_view_all_Page = async function(req, res) { 
    try{ 
        thedollargeneral = await dollargeneral.find(); 
        res.render('dollargeneral', { title: 'dollargeneral Search Results', results: thedollargeneral }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 