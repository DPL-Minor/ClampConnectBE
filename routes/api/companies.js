var express = require('express');
var router = express.Router();
var models = require('../../db/models');
const passport = require('passport');
const handler = require('../handlers/index.js');
const jwt = require('jsonwebtoken');

/*create a company*/
router.post('/create', passport.authenticate('jwt', { session: false }), [handler.companyHandler.createCompany], function(req, res, next) {

});

/*create a company*/
router.post('/test', passport.authenticate('jwt', { session: false }), [handler.authHandler.checkRole], function(req, res, next) {
	    // const token = req.headers.authorization.split(" ")[1];
     //    console.log(token);var jwt_decode = require('jwt-decode');
     //  	var decoded = jwt_decode(token);
     //  	console.log('the decoded jwt is: ' + decoded.exp);
});

/*return all companies*/
router.get('/all', passport.authenticate('jwt', { session: false }), handler.companyHandler.getAll, function(req, res, next) {
  
});

const getUser = async obj => {
  return await models.User.findOne({
  where: obj,
});
};



module.exports = router;
