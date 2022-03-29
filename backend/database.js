const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/javascriptdb',{
    useNewUrlParser: true
})
    .then(db => console.log(DB is conected))
    .catch(err => console.error(err));