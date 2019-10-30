var express = require('express');
var router = express.Router();
var models = require('../../db/models');
const passport = require('passport');


/*return all clamps*/
router.get('/all', function(req, res, next) {
  models.Clamp.findAll({ where: req.body }).then(function(cl){
    return cl;
   }).then(function(Clamplist){
    //do something with employeeList
    res.status(200).json(Clamplist);
   });
});

// protected route
router.get('/protected', passport.authenticate('jwt', { session: false }), function(req, res) {
res.json({ msg: 'Congrats! You are seeing this because you are authorized'});
});


module.exports = router;
