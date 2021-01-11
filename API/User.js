const express = require('express')
const user = require('../DB/User')
const route = express.Router()

route.post('/', async(req, res) => {
    const { firstName, lastName } = req.body
    let user = {};
    console.log(req.body)
    user.firstName = firstName
    user.lastName = lastName
    let userModel = new User(user)
    await userModel.save()
    res.json(userModel)
})

route.get('/get', async (req, res) => {
    console.log(req.body)
})

module.exports = route