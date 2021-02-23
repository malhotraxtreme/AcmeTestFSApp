const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Property = require('./property');

const Category = new Schema(
    {
        id: { type: String, required: true },
        name: { type: [String], required: true },
        properties: { type: [Property], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('category', Category)