const mongoose = require("mongoose") 
const dollargeneralSchema = mongoose.Schema({ 
    Itemname: String, 
    Quantity: Number, 
    price: String 
}) 
 
module.exports = mongoose.model("dollargeneral", dollargeneralSchema)