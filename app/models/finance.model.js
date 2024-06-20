const { DataTypes } = require("sequelize");
const { newConnection } = require("./index.model");

const finance_model = newConnection.define('finance', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    record_type: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    record_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
});

finance_model.sync({ alter: true }).then((response) => {
    // console.log('finance_model created successfully', response);
}).catch((err) => {
    console.log('Error in finance_model:- ', err);
})

module.exports = { finance_model };