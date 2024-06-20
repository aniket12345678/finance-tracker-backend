const { finance_model } = require("../models/finance.model");

const record_add = async (req, res) => {
    try {
        const store = req.body;
        let output = await finance_model.create(store);
        console.log('output:- ', output);
        return res.status(200).send({
            message: 'success',
            code: 200
        });
    } catch (error) {
        console.log('error:- ', error);
    }
};

const record_findAll = async (req, res) => {
    try {
        const store = req.body;
        let output = await finance_model.findAll({ where: { user_id: store.user_id } });
        let amountArr = output.map((x) => x.record_type === 0 ? x.amount * (-1) : x.amount);
        let fetchBalance = amountArr.reduce((acc, curr) => acc + curr, 0);
        return res.status(200).send({
            message: 'success',
            data: output,
            total_balance: fetchBalance,
            code: 200
        });
    } catch (error) {
        console.log('error:- ', error);
    }
}

const record_delete = async (req, res) => {
    try {
        const store = req.body;
        await finance_model.destroy({ where: { id: store.id }, force: true });
        return res.status(200).send({
            message: 'Record deleted successfully',
            code: 200
        });
    } catch (error) {
        console.log('error:- ', error);
    }

}

module.exports = { record_add, record_findAll, record_delete };