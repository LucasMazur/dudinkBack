const { response } = require('express')
const express = require('express')
const { Mongoose } = require('mongoose')
const Client = require('../DB/clientSchema')
const route = express.Router()

route.post('/save', async(req, res) => {
    const { name, dateHour, date, hour, body, size } = req.body
    let client = {};
    client.name = name
    client.dateHour = dateHour
    client.date = date
    client.hour = hour
    client.body = body
    client.size = size
    console.log(req.body)
    let clientModel = new Client(client)
    await clientModel.save((err) => {
        if (!err) console.log("Save client Succeful!!") 
        else {
            res.send("Data Base err")
        }
    })
    res.json(clientModel)
})

route.get('/get', async (req, res) => {    
    await Client.find({}, (err, doc) => {
        if (!err) {
            res.json(doc)
        } else {
            res.send("Data Base err")
        }
        
    })
})

route.post('/remove', async (req, res) => {
    console.log(req.body.del)  
    await Client.findById(req.body.del, async (err, doc) => {
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
    const { name, dateHour, date, hour, body, size, id } = req.body
    let client = {}
    client.id = id
    client.name = name
    client.dateHour = dateHour
    client.date = date
    client.hour = hour
    client.body = body
    client.size = size
    await Client.findById(client.id, async (err, doc) => {
        if (name === "0") {
            client.name = doc.name
        }
        if (dateHour === "0") {
            client.dateHour = doc.dateHour
        }
        if (date === "0") {
            client.dateHour = doc.dateHour
        }
        if (hour === "0") {
            client.dateHour = doc.dateHour
        }
        if (body === "0") {
            client.body = doc.body
        }
        if (size === "0") {
            client.size = doc.size
        }
        await Client.findByIdAndUpdate(client.id, {"name":client.name, "dateHour":client.dateHour, "date":client.date, "hour":client.hour, "body":client.body, "size":client.size}, async (err, doc) => {
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