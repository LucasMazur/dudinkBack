const mongoose = require('mongoose')

const client = new mongoose.Schema({
    name: { type: String, required: true},
    dateHour: { type: String, required: true },
    date: { type: String, required: true },
    hour: { type: String, required: true },
    body: { type: String, required: true },
    size: { type: Number, required: true }
});

module.exports = Client = mongoose.model('scheduled', client)