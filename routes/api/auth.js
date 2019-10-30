var express = require('express');
var router = express.Router();
var models = require('../../db/models');

const passport = require('passport');

const jwt = require('jsonwebtoken');
let ExtractJwt = require('passport-jwt').ExtractJwt;
let JwtStrategy = require('passport-jwt').Strategy

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'mysecrets';

// lets create our strategy for web token
let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  let user = getUser({ id: jwt_payload.id });

  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
// use the strategy
passport.use(strategy);

//login route
router.post('/login', async function(req, res, next) {
  const { email, password } = req.body;
  if (email && password) {
    let user = await getUser({ email: email });
    if (!user) {
      res.status(401).json({ message: 'No such user found' });
    }
    if (user.password === password) {
      // use payload to identify user and verify his role
      let payload = { 
        id: user.id,
        role: user.role,
        company: user.company,
        exp: Math.floor(Date.now() / 1000) + (60 * 60) };// token epxiration after 1 day:
      let token = jwt.sign(payload, jwtOptions.secretOrKey);
      var jwt_decode = require('jwt-decode');

      var decoded = jwt_decode(token);
      console.log('the decoded jwt is: ' + decoded.exp);
      res.json({ msg: 'ok', token: token });
    } else {
      res.status(401).json({ msg: 'Password is incorrect' });
    }
  }
});

// create some helper functions to work on the database
const getUser = async obj => {
  return await models.User.findOne({
  where: obj,
});
};

module.exports = router;