const mongoose = require("mongoose");
const Book = require("../models/books");
const dataController = async (req, res) => {
  try {
    const {
      book_name,
      book_image,
      book_publication,
      book_author,
      book_topic,
      book_comments1_author,
      book_comments1_content,
      book_comments2_author,
      book_comments2_content,
      book_comments3_author,
      book_comments3_content,
      book_comments4_author,
      book_comments4_content,
      user_name,
      user_email,
    } = req.body;
    console.log(req.body);
    const book = new Book({
      book_name,
      book_image,
      book_publication,
      book_author,
      book_topic,
      book_comments: {
        book_comments1: {
          book_comments1_author,
          book_comments1_content,
        },
        book_comments2: {
          book_comments2_author,
          book_comments2_content,
        },
        book_comments3: {
          book_comments3_author,
          book_comments3_content,
        },
        book_comments4: {
          book_comments4_author,
          book_comments4_content,
        },
      },
      user_name,
      user_email,
    });
    await book.save();

    res.json({ msg: "Book Saved..." });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = dataController;
