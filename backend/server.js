const mongoose=require('mongoose');
const url="mongodb://127.0.0.1:27017/Ecommercedbs";
const express = require('express');
const { request } = require('http');
var mongo = require('mongodb');
var assert = require('assert');
const app=express();
let cors = require("cors");
app.use(cors());
const PORT =3001;
mongoose.connect(url,
    { useNewUrlParser: true , useUnifiedTopology: true },function(err,connection){
    if(err) console.log(err)
    else
    console.log("connection successful")
})

const Image=mongoose.Schema({
    item:String,
      category:String,
       price:Number,
       color:String,
       path:String,
       brand:String
})
const image=mongoose.model("products",Image);

app.get("/",(request,response)=>{
   image.find((err,result)=>{
        if(err) console.log(err)
        else{
             console.log(result)
             response.send(result)
        }
    })
})


const Image2=mongoose.Schema({
    item:String,
})
const image2=mongoose.model("accs",Image2);
app.get("/home",(request,response)=>{
  
  image2.find((err,result)=>{
      if(err) console.log(err)
      else{
           console.log(result)
           response.send(result)
      }
  })
})

const Image3=mongoose.Schema({
    item:String,
})
const image3=mongoose.model("stores",Image3);
app.get("/stores",(request,response)=>{
  
  image3.find((err,result)=>{
      if(err) console.log(err)
      else{
           console.log(result)
           response.send(result)
      }
  })
})



  
 

const Image6=mongoose.Schema({
    item:String,
})

const image6=mongoose.model("bests",Image6);
app.get("/bests",(request,response)=>{
  
  
  image6.find((err,result)=>{
      if(err) console.log(err)
      else{
           console.log(result)
           response.send(result)
      }
  })
})


const Image7=mongoose.Schema({
    item:String,
})


const image7=mongoose.model("menus",Image7);
app.get("/menus",(request,response)=>{
  
  image2.find((err,result)=>{
      if(err) console.log(err)
      else{
           console.log(result)
           response.send(result)
      }
  })
})

    
  
  

  
  
app.listen(PORT,()=>{
    console.log("server is running")
})