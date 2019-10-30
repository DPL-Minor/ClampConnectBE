var models = require('../../db/models');

async function createCompany(req, res, next) {
  const { name, email, phonenumber } = req.body;
  
  return await models.Company.create({ name, email, phonenumber  }).then(company =>
    res.json({ company, msg: 'company created successfully' })
  ).catch(function (err) {
  res.send(err);
});
  //next()
};

async function getAll(req, res, next) {
  console.log("req.body from getALL:" + req.body);
   return await models.Company.findAll({ where: req.body}).then(function(cl){
    return cl;
   }).then(function(companieslist){
    res.status(200).json(companieslist);
   });
}

function foo() {
   //foo
}

module.exports = {
    createCompany: createCompany,
    getAll: getAll,
    foo: foo,
};