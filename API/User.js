const { response } = require('express')
const express = require('express')
const { Mongoose } = require('mongoose')
const user = require('../DB/User')
const route = express.Router()

route.post('/save', async(req, res) => {
    const { name, date, body, size } = req.body
    console.log(req.body.date)
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
            res.send("Data Base err")
        }
    })
    res.json(userModel)
})

route.get('/get', async (req, res) => {    
    await User.find({}, (err, doc) => {
        if (!err) {
            res.json(doc)
        } else {
            res.send("Data Base err")
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
            res.send("Data Base Err")
        }
    })
})

route.post('/update', async (req, res) => {
    const { name, date, body, size, id } = req.body
    let user = {}
    user.id = id
    user.name = name
    user.date = date
    user.body = body
    user.size = size
    await User.findById(user.id, async (err, doc) => {
        if (name === "0") {
            user.name = doc.name
        }
        if (date === "0") {
            user.date = doc.date
        }
        if (body === "0") {
            user.body = doc.body
        }
        if (size === "0") {
            user.size = doc.size
        }
        await User.findByIdAndUpdate(user.id, {"name":user.name, "date":user.date, "body":user.body, "size":user.size}, async (err, doc) => {
            if (!err) {
                console.log("Update Succeful!!")
                res.json(doc)
            } else {
                res.send("Data Base Err")
            }
        })
    })
})

module.exports = route