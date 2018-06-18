const mongoose = require('mongoose');

const model = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        }
    });

module.exports = mongoose.model('CategoryModel', model, 'categories');
