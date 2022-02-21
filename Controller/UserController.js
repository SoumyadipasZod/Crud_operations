const express = require('express');
const User =require('../Model/User')


exports.index =(req,res) => {
    res.render('user')
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
        console.log(result,'Add successfully')
        
        res.redirect('/')
    }).catch((err) =>{
        console.log(err,"add failed")
    })

}

exports.userview =(req,res) => {
    User.find((err,data) =>{
        if(!err){
            
            res.render('home',{
                viewdata:data
                
            })
        }
    })
}

exports.edit =(req,res) =>{
    const user_id =req.params.u_id
    User.findById(user_id).then(result =>{
        console.log(result);
        res.render('edit',{
            viewdata:result
        })
    }).catch(err =>{
        console.log(err)
    })
}

exports.update =(req,res,next) => {
    const user_id =req.body.uid
    const name= req.body.name
    const email= req.body.email
    const phone= req.body.phone
    const address= req.body.address
    const city= req.body.city

    User.findByIdAndUpdate(user_id).then((result) =>{
        result.name=name,
        result.email=email,
        result.phone=phone,
        result.address=address,
        result.city=city

        return result.save().then((results) =>{
            res.redirect('/')
            console.log(result,"updated")
        }).catch((err) =>{
            console.log(err,"update filed")
        })
        
    })


}


exports.delete =(req,res) =>{
    const userid=req.params.u_id
    User.findByIdAndUpdate({_id:userid},{status:0},(error,data) =>{
        if(!error){
            
            res.redirect('/');
        }else{
            console.log(error);
            res.redirect('/');
        }
    })
}