var express = require('express');
var router = express.Router();
var universities = require('../services/universities.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.q) {
    universities.findByCountry(req.query.q,function(err,data){
      if(err) next(err);
      res.render('index',{
        title: req.query.q + ' universities',
        universities: data
      })
    });
  }
  else
  {
    res.render('index', { title: 'Find my university.' });
  }
});

module.exports = router;
