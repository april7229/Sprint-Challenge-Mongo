const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');

const BudgetController = require('./controllers/BudgetController');
const CategoryController = require('./controllers/CategoryController');
const ExpenseController = require('./controllers/ExpenseController');

const server = express();

// add your server code
mongoose.connect('mongodb://127.0.0.1:27017')
    .then(() => console.log('\n... API Connected to Database ...\n'))
    .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use(helmet());
server.use(express.json());

server.use('/api/budgets', BudgetController);
server.use('/api/categories', CategoryController);
server.use('/api/expenses', ExpenseController);

server.get('/', (req, res) => {
    res.send('Lights, camera...')
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server up and running on ${port}`);
});
