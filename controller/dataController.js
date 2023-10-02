const mongoose = require('mongoose')
const Book = require('../models/books')
const dataController =(req,res)=> {
    const {book_name,book_image,book_publication,book_author,book_comments1_author,book_comments1_content,book_comments2_author,book_comments2_content,book_comments3_author,book_comments3_content} = req.body
}