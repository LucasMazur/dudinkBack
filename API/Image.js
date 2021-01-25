const { response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const imageSchema = require('../DB/imageSchema')
const route = express.Router()
const axios = require('axios')

route.post('/save', async(req, res) => {
    const { imageName, url, style } = req.body
    let image = {};
    image.imageName = imageName
    image.url = url

    const model = mongoose.model(`${style}`, imageSchema)

    let imageModel = new model(image)

    await imageModel.save((err) => {
        if (!err) {
            res.send("Save image success")
            console.log("Save Succeful!!")            
        }
        else {
            res.send("Data Base err")
        }
    })
})

route.post('/get', async (req, res) => {
    const style = req.body.style
    const model = mongoose.model(`${style}`, imageSchema)

    await model.find({}, (err, doc) => {
        if (!err) {
            res.json(doc)
        } else {
            res.send("Data Base err")
        }
    })
})

route.post('/remove', async (req, res) => {
    
    const style = req.body.style
    const model = mongoose.model(`${style}`, imageSchema)

    await model.findById(req.body.del, async (err, doc) => {
        console.log(doc)
        if (!err) {
            await doc.remove()
            res.json(doc)
        } else {
            res.send("Data Base Err")
        }
    })
})

module.exports = route