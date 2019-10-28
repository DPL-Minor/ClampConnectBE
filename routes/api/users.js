var express = require('express');
var router = express.Router();
var models = require('../../db/models');

const passport = require('passport');

// register route
router.post('/register', function(req, res, next) {
  const { email, password } = req.body;
  createUser({ email, password }).then(user =>
    res.json({ user, msg: 'account created successfully' })
  );
});

/*return user users, todo: limit info*/
router.get('/:id', function(req, res, next) {
  models.DeploymentResult.findone({ where: req.body }).then(function(u){
    return u;
   }).then(function(user){
    res.status(200).json(user);
   });
});


// create some helper functions to work on the database
const createUser = async ({ email, password }) => { 
  return await models.User.create({ email, password });
};
const getAllUsers = async () => {
  return await models.User.findAll();
};
const getUser = async obj => {
  return await models.User.findOne({
  where: obj,
});
};



module.exports = router;
