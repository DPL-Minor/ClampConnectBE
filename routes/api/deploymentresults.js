var express = require('express');
var router = express.Router();
var models = require('../../db/models');
const passport = require('passport');

/*return all deploymentresults*/
router.get('/all', passport.authenticate('jwt', { session: false }), function(req, res, next) {
  models.DeploymentResult.findAll({ where: req.body }).then(function(drl){
    return drl;
   }).then(function(deploymentresultslist){
    res.status(200).json(deploymentresultslist);
   });
});


module.exports = router;
