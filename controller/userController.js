const mongoose = require('mongoose')

const User = require('../models/user')

const userController = {
    register:async (req,res) =>{
        try {
            const {name,phone,email,password} = req.body
            console.log(req.body);
        } catch (error) {
            
        }
    }
}