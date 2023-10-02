const dataRouter = require('express').Router()
const dataController = require('../controller/dataController')

dataRouter.post('/data',dataController)

module.exports = dataRouter