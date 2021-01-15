const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name: { type: String, required: true},
    date: { type: String, required: true },
    body: { type: String, required: true },
    size: { type: Number, required: true }
});

module.exports = Confirm = mongoose.model('confirm', user)