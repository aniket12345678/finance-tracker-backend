const exApp = require('express')();
const PORT = 5000;
const cors = require('cors');
const bodyParser = require('body-parser');

exApp.use(cors());
exApp.use(bodyParser.json());
exApp.use(bodyParser.urlencoded({ extended: true }));

exApp.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

exApp.get('/', (req, res) => {
    res.json({ message: 'Welcome to expense tracker' });
});


//----------------------------------- User credentials -----------------------------------//
const { user_cred } = require('./app/routes/user_cred.route');
exApp.use('/api/user', user_cred);

//----------------------------------- finance record -----------------------------------//
const { finance } = require('./app/routes/finance.route');
exApp.use('/api/finance', finance);