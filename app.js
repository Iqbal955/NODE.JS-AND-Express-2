const express = require('express') //requires express
const app = express(); 
const routes = require('./routes/routes.js');

//
app.use(express.static('public'));
app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');


app.use( '/static', express.static('public') );

//view routes from routes.js
app.use('/', routes);


/*

app.use((req, res, next) => {

    console.log('404 error handler');

    res.status(404).render('not-found.pug')


});


app.use((err, req, res, next) => {

if(err) {


    console.log("in the global error handler", err);
}

if (err.status === 404) {

    res.status(404).render('not-found.pug', { err });

}

else {
    err.message = err.message || `Oops!  It looks like something went wrong on the server.`;
    res.status(err.status || 500).render('error', { err });
  }

});

*/

app.listen(3000, () => {
    console.log("Bi Boooob bap connection is there")
});




