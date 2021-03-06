const mongoose = require( 'mongoose' );
const ObjectId = mongoose.Schema.Types.ObjectId;


const ExpenseSchema = mongoose.Schema( {
    //     _id: ObjectId( '503c2b66bcf86cs793443564' ),
    //     amount: 35,
    //     description: 'potatoes',
    //     budget: ObjectId( '507f1f77bcf86cd799439011' ), // Monthly Spending
    //     category: ObjectId( '543d2c72gsb23cd657438921' ) // Groceries
    amount: {
        type: Number,
        unique: true,
        require: true,
    },
    description: {
        type: String,
        unique: true,
        require: true,
    },
    budget: {
        type: ObjectId,
        ref: 'Budget',
        required: true
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true
    }
} );

module.exports = mongoose.model( 'ExpenseModel', ExpenseModel);
