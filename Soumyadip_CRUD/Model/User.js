const mongoose = require('mongoose')
const Schema =mongoose.Schema

const UserSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number, 
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    status:{
        type:Number
    },
    created_at:{
        type:Date,
        default:Date.now
    }
})

const UserModel =new mongoose.model('User',UserSchema)
module.exports = UserModel