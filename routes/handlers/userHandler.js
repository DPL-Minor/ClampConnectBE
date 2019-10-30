var models = require('../../db/models');

async function registerUser(req, res, next) {
  const { email, password, role } = req.body;
  return await models.User.create({ email, password, role }).then(user =>
    res.json({ user, msg: 'account created successfully' })
  ).catch(function (err) {
  res.send(err);
});
  //next()
};

function foo() {
   console.log("foo");
}

module.exports = {
    registerUser: registerUser,
    foo: foo,
};