const express=require('express');
const route=express.Router();

route.get('/',(req,res)=>{
    // res.send('this is users route from Route folder');
    res.send(`query params ${req.query.theme} and ${req.query.sort} </h1>`)
})



route.get('/:username',(req,res)=>{
res.render('profile',{username:req.params.username});
})

module.exports=route;