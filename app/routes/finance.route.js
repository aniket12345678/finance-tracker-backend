const finance = require('express')();

const { record_add, record_findAll, record_delete } = require('../controllers/finance.controller');

finance.post('/add', record_add);
finance.post('/fetch/all', record_findAll);
finance.post('/record/delete', record_delete);

module.exports = { finance };