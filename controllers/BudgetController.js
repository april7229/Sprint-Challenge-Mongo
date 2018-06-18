const express = require("express");
const Budget = require("../models/BudgetModel");

const router = express.Router();

router.route('/')
    .get((req, res) => {
        Budget.find().select('title + budgetAmount +_id').then(budget => {
            let finalout = JSON.stringify(budget, null, 4);
            res.status(200).send(finalout).contentType("text/plain");
        })
            .catch(err => {
                res.status(500, "That went wrong...", res, err);
            })
    })
    .post((req, res) => {
        const incoming = req.body;
        let budget = new Budget(incoming);

        budget.save()
            .then(budget => {
                res.status(201).json(budget);
            })
            .catch(err => {
                res.status(500).json("Damnit..." + err.message, res, err);
            })
    });

module.exports = router;
