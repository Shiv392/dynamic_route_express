const express=require('express');
const route=express.Router();

route.get('/',(req,res)=>{
    res.send(`<h1>this is all post route</h1>`)
})

route.get('/most-populer',(req,res)=>{
    res.send(`<h1>this is most populer  route</h1>`)
})

route.get('/redirect',(req,res)=>{
    res.redirect('/most-populer')
})

module.exports=route;