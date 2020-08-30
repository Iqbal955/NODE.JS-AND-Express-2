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





routes.get('/projects/:id', (req, res, next) => {


      const projectID = req.params.id;
  const project = projects.find( ({ id }) => id === +projectID );

    
    if (project) {
    res.render('project.pug',  {

        

            description: project.description,
            project_name: project.project_name,
            github: project.github_link,
            livelink: project.live_link,
            images: project.image_urls,
            tech: project.technologies

        });

        
    }

    
    else {

        const err = new Error();
        err.status = 404;
        err.message = "This ID does not exist"
        next(err);
    }



})


module.exports = routes;