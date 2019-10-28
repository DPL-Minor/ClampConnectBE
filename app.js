var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var models = require('./db/models');
var sequelize = require('./db/sequelize.js');

/*Define routes*/
var indexRouter = require('./routes/index');

/*Define API routes*/
var authRouter = require('./routes/api/auth');
var usersRouter = require('./routes/api/users');
var companiesRouter = require('./routes/api/companies');
var clampsRouter = require('./routes/api/clamps');
var deploymentsRouter = require('./routes/api/deployments');
var deploymentresultsRouter = require('./routes/api/deploymentresults');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

sequelize.initDB();

/*Define routes*/
app.use('/', indexRouter);


/*Define API routes*/
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/companies', companiesRouter);
app.use('/api/clamps', clampsRouter);
app.use('/api/deployments', deploymentsRouter);
app.use('/api/deploymentresults', deploymentresultsRouter);



module.exports = app;
