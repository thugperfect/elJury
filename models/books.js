const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    book_name:{
        type:String,
        required:true,

    },
    book_image:{
        type:String,

    },
    book_publication:{
        type:String
    },
    book_author:{
        type:String,
    },
    book_topic:{
        type:String,
    },
    book_comments:{
        book_comments1:{
            book_comments1_author:{
                type:String,
            },
            book_comments1_content:{
                type:String,
            }
        },
        book_comments2:{
            book_comments2_author:{
                type:String,
            },
            book_comments2_content:{
                type:String,
            }
        },
        book_comments3:{
            book_comments3_author:{
                type:String,
            },
            book_comments3_content:{
                type:String,
            }
        },
    },
    user_name:{
        type:String
    },
    user_Email:{
        type:String
    }
   
})
module.exports = mongoose.model('Book',BookSchema)