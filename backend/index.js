const express = require('express');

//inicializations
const app  = express;

// Settings
app.set('port',3000);

//start the server
app.listen(app.get('port'),() => {
    console.log('Server on port', app.get('port'));
});