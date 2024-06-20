const { DataTypes } = require("sequelize");
const { newConnection } = require("./index.model");

const user_cred_model = newConnection.define('user_cred', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_role: {
        type: DataTypes.INTEGER,
        allowNull: false // 1 - customer,2 - admin
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});

user_cred_model.sync({ alter: true }).then((response) => {
    // console.log(response, ' model created successfully');
}).catch((err) => {
    console.log('Error in user_cred_model:- ', err);
})

module.exports = { user_cred_model };