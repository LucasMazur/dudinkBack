const mongoose = require('mongoose')

const finish = new mongoose.Schema({
    name: { type: String, required: true},
    price: { type: Number, required: true },
    date: { type: String, required: true}
});

module.exports = Finish = mongoose.model('finish', finish)