const mongoose=require('mongoose');
const url="mongodb://127.0.0.1:27017/Ecommercedbs";
const express = require('express');
const { request } = require('http');
var mongo = require('mongodb');
//const { assert } = require('console');
let cors = require("cors");
var assert = require('assert');
const app=express();
const PORT =3001;
app.use(cors());

mongoose.connect(url,
    { useNewUrlParser: true , useUnifiedTopology: true },function(err,connection){
    if(err) console.log(err)
    else
    console.log("connection successful")
})
const Products=mongoose.Schema({
    item:String,
      category:String,
       price:Number,
       color:String,
       path:String,
       brand:String
})
const products=mongoose.model("products",Products);


const Bests=mongoose.Schema({
    item:String,
})
const bests=mongoose.model("bests",Bests);

const Readmes=mongoose.Schema({
    item:String,
})
const readme=mongoose.model("readme",Readmes);


const Accstwo=mongoose.Schema({
    item:String
})
const acc=mongoose.model("acc",Accstwo);


const Stores=mongoose.Schema({
    item:String
})
const stores=mongoose.model("stores",Stores);

const Menus=mongoose.Schema({
    item:String
})
const menus=mongoose.model("menus",Menus);

const Services=mongoose.Schema({
    item:String,
   
})
const servi=mongoose.model("service",Services);

app.get("/services",(request,response)=>{
   
    
    servi.find((err,result)=>{
        if(err) console.log(err)
        else{
             console.log(result)
             response.json(result)
        }
    })
})

// app.get("/home",(request,response)=>{
//     console.log(request.query);
//     products.find((request.query),(err,result)=>{
//         if(err) console.log(err)
//         else{
//              console.log(result)
//              response.json(result)          
//         }
//     })
// })



    app.get("/products",(request,response)=>{
        console.log(request.query.data);
        products.find((request.query),(err,result)=>{
            if(err) console.log(err)
            else{
                 console.log(result)
                 response.json(result)          
            }
        })
    })

app.get("/home",(request,response)=>{
  
    menus.find((err,result)=>{
        if(err) console.log(err)
        else{
             console.log(result)
             response.json(result)
        }
    })
  })
 
  app.get("/stores",(request,response)=>{
    
    stores.find((err,result)=>{
        if(err) console.log(err)
        else{
             console.log(result)
             response.json(result)
        }
    })
  })
  
  app.get("/accs",(request,response)=>{
    
    acc.find((err,result)=>{
        if(err) console.log(err)
        else{
             console.log(result)
             response.json(result)
        }
    })
  })
  
app.get("/bests",(request,response)=>{

    bests.find((err,result)=>{
        if(err) console.log(err)
        else{
             console.log(result)
             response.json(result)
        }
    })
  })

  app.get("/fbest",(request,response)=>{
    
    products.find({best:"true"},(err,result)=>{
        if(err) console.log(err)
        else{
             console.log(result)
             response.json(result)
        }
    })
  })

  app.get("/readme",(request,response)=>{

    readme.find((err,result)=>{
        if(err) console.log(err)
        else{
             console.log(result)
             response.json(result)
        }
    })
  })

  

 

  
  
  


  

app.listen(PORT,()=>{
    console.log("server is running")
})