const mongoose = require('mongoose')

const uri = 'mongodb+srv://dbHomeControl:alumbra2021@cluster0.g2yvm.mongodb.net/homeControlDB?retryWrites=true&w=majority'

const connectDB = async () => {
    await mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("db connected")
}

module.exports = connectDB