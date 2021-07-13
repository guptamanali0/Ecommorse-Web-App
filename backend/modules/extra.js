const mongoose=require('mongoose')
const url="mongodb://127.0.0.1:27017/Ecommercedbs"

mongoose.connect(url,
    { useNewUrlParser: true , useUnifiedTopology: true },function(err,connection){
    if(err) console.log(err)
    else
    console.log("connection successful")
})

const Menus=mongoose.Schema({
       item:String,
      
})
const menu=mongoose.model("menu",Menus);
const  menu6=new menu(
   {

       item:"Accessories",
   });


menu.insertOne([menu6],function(err,result){
 if(err) throw err;
 else
 console.log(result)
});