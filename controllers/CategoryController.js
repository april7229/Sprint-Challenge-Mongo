const express = require("express");
const Category = require("../models/CategoryModel");

const router = express.Router();

router.route('/')
    .get((req, res) => {
        Category.find().select('title +_id')
            .then(cat => {
                let finalout = JSON.stringify(cat, null, 4);
                res.status(200).send(finalout).contentType("text/plain");
            })
            .catch(err => {
                res.status(500, "That went wrong...", res, err);
            })
    })
    .post((req, res) => {
        const incoming = req.body;
        let val = new Category(incoming);

        val.save()
            .then(result => {
                res.status(201).json(result);
            })
            .catch(err => {
                res.status(500).json("Damnit..." + err.message, res, err);
            })
    });

module.exports = router;
