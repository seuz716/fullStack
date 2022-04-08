const {Schema, model} = require('mongoose'); 

const itemSchema = new Schema({
    title:{type: String, required: true},
    description:{type: String, required: true},
    price:{type: String, required: true},
    imagePath:{type: String},
    createat: {type:Date , default: Date.now}
});
module.exports = model('item', itemSchema);