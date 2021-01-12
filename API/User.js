const express = require('express')
const { Mongoose } = require('mongoose')
const user = require('../DB/User')
const route = express.Router()

route.post('/save', async(req, res) => {
    const { name, date, body, size } = req.body
    let user = {};
    user.name = name
    user.date = date
    user.body = body
    user.size = size
    console.log(req.body)
    let userModel = new User(user)
    await userModel.save((err) => {
        if (!err) console.log("Save Succeful!!") 
        else {
            console.log("Data Base err")
        }
    })
    res.json(userModel)
})

route.get('/get', async (req, res) => {    
    await User.find({}, (err, doc) => {
        if (!err) {
            res.json(doc)
        } else {
            console.log("Data Base Err")
        }
        
    })
})

route.post('/remove', async (req, res) => {
    console.log(req.body.del)  
    await User.findById(req.body.del, async (err, doc) => {
        console.log(doc)
        if (!err) {
            await doc.remove()
            res.json(doc)
        } else {
            console.log("Data Base Err")
        }
    })
})

module.exports = route