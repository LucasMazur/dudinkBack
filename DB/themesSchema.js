const mongoose = require('mongoose')

const theme = new mongoose.Schema({
    theme: { type: String, required: true}
});

module.exports = Themes = mongoose.model('theme', theme)