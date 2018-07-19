var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Job.findAll()
  	.then(function(jobs) {
	  res.render('index', {
      	title: 'Job Hitlist',
      	jobs: jobs
      });
  });
});

module.exports = router;