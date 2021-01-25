const express = require('express')
const connectDB = require('./DB/connection')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
connectDB()
app.use(express.json({ extended: false }))
app.use('/api/client', require('./API/Client'))
app.use('/api/images', require('./API/Image'))
app.use('/api/themes', require('./API/Themes'))

app.listen(process.env.PORT || 3001)


