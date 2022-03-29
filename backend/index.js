const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path')

//inicializations
const app  = express();

// Settings
app.set('port', 3000);

//Middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename(req, file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Routes
app.use('/api/books', require('./routes/books'));

// static files
app.use(express.static(path.join(__dirname,'public')));
//start the server
var server = app.listen(app.get('port'),function(){
    console.log('express server listening on port ' + server.address().port);
 })