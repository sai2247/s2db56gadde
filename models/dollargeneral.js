const mongoose = require("mongoose") 
const dollargeneralSchema = mongoose.Schema({ 
    Itemname: String, 
    Quantity: {
        type: Number,
        required: true
    },
    price: {
        type: String,
         min: 2,
         max: 5000
    }
    })
 
module.exports = mongoose.model("dollargeneral", dollargeneralSchema)