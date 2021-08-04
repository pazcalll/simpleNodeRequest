const express = require('express')
const router= express.Router()
const Goods = require('../models/goods')

// Get all
router.get('/', async (req, res) => {
    // res.send('Hello ges')
    try{
        const goods = await Goods.find()
        res.json(goods)
    }catch (err) {
        res.json({ message: err.message })
    }
})

// Get one
router.get('/:id', async (req, res) => {
    // res.send(req.params.id)
})

// Create one
router.post('/', async (req, res) => {
    let goods = new Goods({
        name: req.body.name,
        goodsToChannel: req.body.goodsToChannel
    })
    try{
        let newGoods = await goods.save()
        res.status(200).json(newGoods)
    } catch(err) {
        res.status(400).json({ message: err.message, body: res.body })
    }
})

// Update one
router.patch('/:id',(req, res) => {

})

// Delete one
router.delete('/:id',(req, res) => {

})


module.exports = routerzzz