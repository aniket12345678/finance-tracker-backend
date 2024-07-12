const { user_cred_model } = require("../models/user_cred.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const store = req.body;
        let checkUserExist = await user_cred_model.findOne({ where: { email: store.email } });
        if (checkUserExist) {
            return res.status(200).send({
                message: 'User already exist',
                status: 400
            });
        } else {
            const hashPassword = bcrypt.hashSync(store.password, 10);
            store.password = hashPassword;
            const result = await user_cred_model.create(store);
            if (result) {
                return res.status(200).send({
                    message: 'User created successfully',
                    status: 200
                })
            } else {
                return res.status(200).send({
                    message: 'fail',
                    status: 400
                })
            }
        }
    } catch (error) {
        res.status(500).send({
            message: 'signup fail',
            status: 400
        })
    }
};

const signin = async (req, res) => {
    try {
        const store = req.body;
        const fetchData = await user_cred_model.findOne({ where: { email: store.email } });
        if (fetchData) {
            const checkPassword = bcrypt.compareSync(store.password, fetchData.password);
            if (checkPassword) {
                const output = jwt.sign({ fetchData }, process.env.JWT_KEY);
                return res.status(200).send({
                    message: 'Successully logged in',
                    user_data: fetchData.id,
                    authToken: output,
                    status: 200
                });
            } else {
                return res.status(200).send({
                    message: 'Password does not matches',
                    status: 400
                });
            }
        } else {
            return res.status(200).send({
                message: 'User does not exist',
                status: 500
            });
        }
    } catch (error) {
        console.log('error:- ', error);
        res.status(500).send({
            message: 'signin fail',
            status: 400
        })
    }
}

module.exports = { signup, signin }