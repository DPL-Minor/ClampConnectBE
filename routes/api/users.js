var express = require('express');
var router = express.Router();
var models = require('../../db/models');
const passport = require('passport');
const handler = require('../handlers/index.js');

// register route
router.post('/register', [handler.userHandler.registerUser], function(req, res, next) {

});

/*return user users, todo: limit info*/
router.get('/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
  models.DeploymentResult.findone({ where: req.body }).then(function(u){
    return u;
   }).then(function(user){
    res.status(200).json(user);
   });
});






module.exports = router;
