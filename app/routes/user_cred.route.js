const user_cred = require('express')();

const { signup, signin } = require('../controllers/user_cred.controller');

user_cred.post('/signup', signup);
user_cred.post('/signin', signin);

module.exports = { user_cred };