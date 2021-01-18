const mongoose = require('mongoose')

const user = new mongoose.Schema({
    url: { type: String, required: true},
    style: { type: String, required: true }
});

module.exports = AddImages = mongoose.model('images', user)