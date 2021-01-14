const express = require('express')
const connectDB = require('./DB/connection')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
connectDB()
app.use(express.json({ extended: false }))
app.use('/api/userModel', require('./API/User'))

app.listen(process.env.PORT || 3001)


