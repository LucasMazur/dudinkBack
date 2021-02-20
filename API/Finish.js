const { response } = require('express')
const express = require('express')
const { Mongoose } = require('mongoose')
const Finish = require('../DB/finishSchema')
const route = express.Router()

route.post('/save', async(req, res) => {
    const { name, price, date } = req.body

    let client = {}
    client.name = name
    client.price = price
    client.date = date

    let finishModel = new Finish (client)
    await finishModel.save((err) => {
        if (!err) console.log("Save Finish Succeful!!") 
        else {
            res.send("Data Base err")
        }
    })
    res.json(finishModel)
})

route.get('/get', async (req, res) => {    
    await Finish.find({}, (err, doc) => {
        if (!err) {
            res.json(doc)
        } else {
            res.send("Data Base err")
        }
        
    })
})

module.exports = route