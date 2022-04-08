const {Router}= require('express');
const router = Router();
const fs = require ('fs-extra');
const path = require('path');

const item = require('../models/item');

router.get('/', async (req, res) => {
    const items = await item.find();
    res.json(items);
});

router.post('/', async (req, res) => {
    const {title, description, price}= req.body;
    const imagePath = '/uploads/'+ req.file.filename;
    const newitem = new item({title,description, price, imagePath});
    await newitem.save();
    res.json({message:'item saved'});
    console.log(newitem);
});

router.delete('/:id', async (req, res) => {
    const item =await item.findByIdAndDelete(req.params.id);
    fs.unlink(path.resolve('./backend/public'+ item.imagePath))
    res.json({message:'item deleted'});
});
module.exports = router;