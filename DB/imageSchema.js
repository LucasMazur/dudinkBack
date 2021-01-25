const mongoose = require('mongoose')

const image = new mongoose.Schema({
    imageName: { type: String, required: true},
    url: { type: String, required: true }
});

module.exports = image