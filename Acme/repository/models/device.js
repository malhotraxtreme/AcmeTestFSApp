const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Category = require('./category');

const Device = new Schema(
    {
        id: { type: String, required: true },
        name: { type: String, required: true },
        category: { type: Category, required: true },
        status: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('device', Device)