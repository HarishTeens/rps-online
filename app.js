const app=require('express');
const socket=require('socket.io');

const express=app();

const server=express.listen(4000,()=>{
    console.log("server started at http://localhost:4000");
})

express.use(app.static('public'));

express.get("/",(req,res)=>{
    res.render("index.html");
})

const io=socket(server);