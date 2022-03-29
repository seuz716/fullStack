const {Schema, model} = require('mongoose'); 

const BooSchema = new Schema({
    title:{type: String, required: true},
    author:{type: String, required: true},
    isbn:{type: String, required: true},
    imagePath:{type: String, required: true},
    createat: {type:Date , default: Date.now}
});
module.exports = model('Book', BooSchema);