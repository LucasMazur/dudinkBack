const express = require('express')
const connectDB = require('./DB/connection')
const app = express()

connectDB()
app.use(express.json({ extended: false }))
app.use('/api/userModel', require('./API/User'))

app.listen(3000)


