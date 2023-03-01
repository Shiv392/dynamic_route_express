const express=require('express');
const app=express();
const port=8000;
const path=require('path');
const usersroute=require('./routes/users');
const postroute=require('./routes/posts');


//using template engine
app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));

app.use('/users',usersroute);
app.use('/posts',postroute)

//application level middleware
app.use((req,res,next)=>{
    console.log(new Date().toLocaleDateString());
    next();
})

app.get('/',[
    (req,res,next)=>{
        // res.send('this is first middlewaare');
        next();
    }
    ,(req,res)=>{
        res.send('this is second middleware')
    }
]
)

app.get('/my-route',(req,res)=>{
    res.send('this is my  route')
})

app.post('/users',(req,res)=>{
    res.send(
    'this is post request'
    )
})

app.listen(port,()=>{
    console.log(`server listning on http://localhost:${port}`);
})
