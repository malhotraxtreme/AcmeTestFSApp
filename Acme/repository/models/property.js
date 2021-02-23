const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Property = new Schema(
    {
        name: { type: String, required: true },
        type: { type: String, required: true },
        range: { type: Object, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('property', Property)