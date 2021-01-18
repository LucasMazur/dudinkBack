const { response } = require('express')
const express = require('express')
const { Mongoose } = require('mongoose')
const addimages = require('../DB/AddImages')
const route = express.Router()
const axios = require('axios')

route.post('/save', async(req, res) => {
    const { url, style } = req.body
    let image = {};
    image.url = url
    image.style = style
    let imageModel = new AddImages(image)
    await imageModel.save((err) => {
        if (!err) {
            res.send("Save success")
            console.log("Save Succeful!!")            
        }
        else {
            res.send("Data Base err")
        }
    })
})

route.get('/get', async (req, res) => {    
    await AddImages.find({}, (err, doc) => {
        if (!err) {
            res.json(doc)
        } else {
            res.send("Data Base err")
        }
    })
})

route.post('/remove', async (req, res) => {
    console.log(req.body.del)  
    await AddImages.findById(req.body.del, async (err, doc) => {
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