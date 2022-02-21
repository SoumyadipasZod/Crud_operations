const express = require('express');
const User = require('../Model/User');

exports.index = (req, res) => {
    User.find((err, data) => {
        if (!err) {
            res.status(200).json({
                status: 'success',
                result: data,
                message: "Data Fetched"
            });
        } else {
            res.status(404).json({
                status: "error",
                result: err,
                message: "Something Went Wrong"
            });
        }
    });
}


exports.store =(req,res) => {
    // console.log(req.body)
    const Users =new User({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        city:req.body.city,
        gender:req.body.gender
    })
    Users.save().then((result) =>{
        res.status(201).json({
            status: 'success',
            result: result,
            message: "Data add successfully"
        })
    }).catch((err) =>{
        res.status(404).json({
            status: "error",
            result: err,
            message: "Add record failed"
        });
    })

}