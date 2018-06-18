const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const model = mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    budgetId: {
        type: ObjectId,
        ref: 'Budget',
        required: true
    },
    categoryId: {
        type: ObjectId,
        ref: 'Category',
        required: true
    }
});

module.exports = mongoose.model('ExpenseModel', model, 'expenses');
