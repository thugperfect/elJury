const router = require('express').Router()

const userController = require('../controller/userController')

router.post('/login',userController.register)