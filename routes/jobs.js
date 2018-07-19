var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/:jobId', function(req, res) {
  models.Job.findById(req.params.jobId)
    .then(function(job) {
      res.render('job', {
        title: 'Job Details',
        job: job
      });
    });
});

router.post('/create', function(req, res) {
  models.Job.create({ 
    title: 			  req.body.title,
    company:      req.body.company,
    city:         req.body.city,
    state: 			  req.body.state,
    description: 	req.body.description,
    url: 			    req.body.url,
    salaryMin: 		req.body.salaryMin,
    salaryMax: 		req.body.salaryMax,
    contactName:  req.body.contactName,
    contactEmail: req.body.contactEmail
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:jobId/destroy', function(req, res) {
  models.Job.destroy({
    where: {
      id: req.params.jobId
    }
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;