const mongoose = require('mongoose');

const model = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        budgetAmount: {
            type: Number,
            required: true
        }
    });

module.exports = mongoose.model('BudgetModel', model, 'budgets');
