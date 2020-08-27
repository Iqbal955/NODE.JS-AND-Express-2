const express = require('express');
const routes = express.Router();
const data = require('../data.json');
const { projects } = data; //3 need to use projects in pug



routes.get('/', function (req, res) { 
    res.render('index.pug', {projects});
});




routes.get('/about', function (req, res) {
res.render('about.pug');
});





routes.get('/:id', (req, res, next) => {
    
    if (projects[req.params.id]) {
    res.render('project.pug', {projects}, {

            description: projects[req.params.id].description,
            project_name: projects[req.params.id].project_name,
            github: projects[req.params.id].github_link,
            livelink: projects[req.params.id].live_link,
            images: projects[req.params.id].image_urls,
            tech: projects[req.params.id].technologies

        });
    }

    next();
    

})


module.exports = routes;