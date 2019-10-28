var express = require('express');
var router = express.Router();
var models = require('../../db/models');


/*return all companies*/
router.get('/all', function(req, res, next) {
  models.Company.findAll({ where: req.body }).then(function(cl){
    return cl;
   }).then(function(companieslist){
    res.status(200).json(companieslist);
   });
});


module.exports = router;
