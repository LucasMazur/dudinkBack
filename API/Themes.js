const { response } = require('express')
const express = require('express')
const { Mongoose } = require('mongoose')
const Themes = require('../DB/themesSchema')
const route = express.Router()

route.post('/save', async(req, res) => {
    const { theme } = req.body

    let themes = {}
    themes.theme = theme

    let themesModel = new Themes (themes)
    await themesModel.save((err) => {
        if (!err) console.log("Save Theme Succeful!!") 
        else {
            res.send("Data Base err")
        }
    })
    res.json(themesModel)
})

route.get('/get', async (req, res) => {    
    await Themes.find({}, (err, doc) => {
        if (!err) {
            res.json(doc)
        } else {
            res.send("Data Base err")
        }
        
    })
})

route.post('/remove', async (req, res) => {

    await Themes.findById(req.body.del, async (err, doc) => {
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