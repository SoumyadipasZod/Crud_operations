const express = require('express');
const Route =express.Router()
const ApiController =require('../Controller/ApiController')

Route.get('/',ApiController.index)
Route.post('/adduser',ApiController.store)
module.exports =Route

