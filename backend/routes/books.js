const {Router}= require('express');
const router = Router();

const Book = require('../models/Book');

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

router.post('/', async (req, res) => {
    const {title, author, isbn}= req.body;
    const newBook = new Book({title,author, isbn});
    await newBook.save();
    res.json({message:'Book saved'});
});

router.delete('/:id', async (req, res) => {
    const book =await Book.findByIdAndDelete(req.params.id);
    console.log(book);
    res.json({message:'Book deleted'});
});
module.exports = router;