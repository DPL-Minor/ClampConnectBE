var models = require('../../db/models');
var jwt_decode = require('jwt-decode');

async function createCompany(req, res, next) {
  const { name } = req.body;
  return await models.Company.create({ name }).then(company =>
    res.json({ company, msg: 'company created successfully' })
  ).catch(function (err) {
  res.send(err);
});
  //next()
};

async function checkRole(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    var decoded = jwt_decode(token);
    console.log('the decoded jwt is: ' + decoded.role);
    return await decoded.role;
}

function foo() {
   //foo
}

module.exports = {
    createCompany: createCompany,
    checkRole: checkRole,
    foo: foo,
};