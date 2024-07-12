const allRoutes = require('express')();

const { finance } = require('./finance.route');
const { user_cred } = require('./user_cred.route');


allRoutes.use('/finance', finance);
allRoutes.use('/user', user_cred);

module.exports = { allRoutes }