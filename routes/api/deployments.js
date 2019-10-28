var express = require('express');
var router = express.Router();
var models = require('../../db/models');


/*Recieves a signal from the clamp and updates the DB acordingly*/
router.post('/signal/', function(req, res, next) {
	const { clamp, status} = req.body;
	console.log(clamp);
	models.Deployment.findOrCreate({where: {clamp: clamp}})
  .then(([deployment, created]) => {
    console.log(deployment.get({
      plain: true
    }))
    console.log(created);
    if(created == false){
    	date = new Date();
    models.Deployment.update({ createdAt: date, status: status }, {
  where: {
    clamp: clamp
  }
}).then(() => {console.log("Done updating");});
    }
    })
  res.status(201).json('OK');
});

/*return all deployments*/
router.get('/all', function(req, res, next) {
  models.Deployment.findAll({ where: req.body }).then(function(dl){
    return dl;
   }).then(function(deploymentslist){
    //do something with employeeList
    res.status(200).json(deploymentslist);
   });
});

/*delete a deployment based on id*/
router.delete('/:id', function(req, res, next) {
  res.status(200).json('OK');
});


module.exports = router;
