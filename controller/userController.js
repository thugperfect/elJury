const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/user')

const userController = {
    register:async (req,res) =>{
        try {
            const { name,phone,email,password } = req.body
            const newPhone = phone
            const phone_no =User.findOne({phone:newPhone})
            if (phone_no) return res.json({msg:'Phone Number already exists'})

            const email_syntax = /[.com]$/
            if (!email_syntax.test(email)) return res.json({msg:'Enter valid Email'})

            const newEmail = email
            const email_id = User.findOne({email:newEmail})

            if (email_id) return res.json({msg:'Email Id already exists'})
            const password_hash = await bcrypt.hash(password,12)
            if (password.length<8) return res.json({msg:'Password must be more than 8 chars...'})
            const user = new User({name,phone,email,password:password_hash})
            await user.save()

            res.json({
                msg:'Register Success',
                user:{
                    ...user._doc
                }
                
            })

        } catch (error) {
           return res.json({msg:error.message})
        }
    }
}

module.exports = userController