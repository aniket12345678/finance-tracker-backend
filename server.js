const exApp = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const { allRoutes } = require('./app/routes/index.route');
require('dotenv').config()

exApp.use(cors());
exApp.use(bodyParser.json());
exApp.use(bodyParser.urlencoded({ extended: true }));

exApp.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});

exApp.get('/', (req, res) => {
    res.json({ message: 'Welcome to expense tracker' });
});

exApp.use('/api', allRoutes);