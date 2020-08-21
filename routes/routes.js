const express = require('express');
const routes = express.Router();


routes.get('/yellow', function (req, res) {

res.render('about.pug');

});

module.exports = routes;