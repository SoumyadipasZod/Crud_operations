const express = require('express')
const Route =express.Router()
const UserController =require('../Controller/UserController')

Route.get('/add-user',UserController.index)
Route.post('/userpost',UserController.store)
Route.get('/',UserController.userview)
Route.get('/edit/:u_id',UserController.edit)
Route.post('/update',UserController.update)
Route.get('/delete/:u_id',UserController.delete)






module.exports =Route;