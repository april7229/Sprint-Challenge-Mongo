const express = require("express");
const Expense = require("../models/ExpenseModel");
const Budget = require("../models/BudgetModel");
const Category = require("../models/CategoryModel");

const router = express.Router();

router.route('/')
    .get((req, res) => {
        Expense.find().populate('budget', 'budgetAmount -_id').populate('category', 'title -_id')
            .then(target => {
                res.status(200).json({target})
            })
            .catch(err => {
                res.status(500, "That went wrong...", res, err);
            })
    })
    .post((req, res) => {
        const incoming = req.body;
        let myBudget = Budget.findOne({'_id': incoming.budgetId});
        let myCategory = Category.findOne({'_id': incoming.categoryId});

        let val = new Expense({
            "amount": incoming.amount,
            "description": incoming.description,
            "budgetId": myBudget._id,
            "categoryId": myCategory._id
        });

        val.save()
            .then(result => {
                let finalout = JSON.stringify(result, null, 4);
                res.status(201).json(finalout);
            })
            .catch(err => {
                res.status(500).json("Damnit..." + err.message, res, err);
            })
    });

module.exports = router;
