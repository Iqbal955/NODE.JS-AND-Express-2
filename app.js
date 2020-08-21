const express = require('express') //requires express
const app = express(); 
const routes = require('./routes/routes.js');

//
app.use(express.static('public'));
app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');


//view routes from routes.js
app.use('/hello', routes);



app.listen(3000, () => {
    console.log("Bi Boooob bap connection is there")
});




