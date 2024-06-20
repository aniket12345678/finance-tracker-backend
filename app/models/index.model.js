const { Sequelize } = require('sequelize');

const newConnection = new Sequelize('finance_tracker', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        freezeTableName: true
    },
    logging:false
});

newConnection.authenticate().then((response) => {
    // console.log('Successful connection');
}).catch((err) => {
    console.log(err, 'there is a problem in database connection');
});

module.exports = { newConnection }