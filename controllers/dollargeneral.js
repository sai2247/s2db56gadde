var dollargeneral = require('../models/dollargeneral'); 
 
// List of all dollargenerals 
exports.dollargeneral_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: dollargeneral list'); 
}; 
 
// for a specific dollargeneral. 
exports.dollargeneral_detail = async function(req, res) {    
    console.log("detail"  + req.params.id) 
    try { 
        result = await dollargeneral.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle dollargeneral create on POST. 
exports.dollargeneral_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new dollargeneral(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    document.Itemname = req.body.Itemname; 
    document.Quantity = req.body.Quantity; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle dollargeneral delete on DELETE. 
exports.dollargeneral_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await dollargeneral.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};  
 
// Handle dollargeneral update form on PUT. 
exports.dollargeneral_update_put =  async function(req, res) {
        console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
        try { 
            let toUpdate = await dollargeneral.findById( req.params.id) 
            // Do updates of properties 
            if(req.body.dollargeneral_Itemname)  
                   toUpdate.dollargeneral_Itemname = req.body.dollargeneral_Itemname; 
            if(req.body.cost) toUpdate.Quantity = req.body.Quantity; 
            if(req.body.size) toUpdate.Price = req.body.Price; 
            let result = await toUpdate.save(); 
            console.log("Sucess " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`); 
        } 
    }; 
// List of all dollargenerals
exports.dollargeneral_list = async function(req, res) {
    try{
    thedollargeneral = await dollargeneral.find();
    res.send(thedollargeneral);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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

 // Handle a show one view with id specified by query 
 exports.dollargeneral_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await dollargeneral.findById( req.query.id) 
        res.render('dollargeneraldetail',  
{ title: 'dollargeneral Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a dollargeneral. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.dollargeneral_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('dollargeneralcreate', { title: 'dollargeneral Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a dollargeneral. 
// query provides the id 
exports.dollargeneral_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await dollargeneral.findById(req.query.id) 
        res.render('dollargeneralupdate', { title: 'dollargeneral Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.dollargeneral_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await dollargeneral.findById(req.query.id) 
        res.render('dollargeneraldelete', { title: 'dollargeneral Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 