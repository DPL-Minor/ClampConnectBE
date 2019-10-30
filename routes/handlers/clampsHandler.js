var models = require('../../db/models');

async function createCompany(req, res, next) {
  const { name } = req.body;
  return await models.Company.create({ name }).then(company =>
    res.json({ company, msg: 'company created successfully' })
  ).catch(function (err) {
  res.send(err);
});
  //next()
};

function bar() {
   //bar
}

function foo() {
   //foo
}

module.exports = {
    createCompany: createCompany,
    bar: bar,
    foo: foo,
};