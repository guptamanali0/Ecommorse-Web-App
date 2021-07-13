const mongoose=require('mongoose')
const url="mongodb://127.0.0.1:27017/Ecommercedbs"

mongoose.connect(url,
    { useNewUrlParser: true , useUnifiedTopology: true },function(err,connection){
    if(err) console.log(err)
    else
    console.log("connection successful")
})

const Services=mongoose.Schema({
       item:String,
      
})
const servi=mongoose.model("service",Services);
const  servi1=new servi(
   {

       item:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus malolor has been industry standard durnamy"
   });


   const  servi2=new servi(
    {
 
        item:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus malolor has been industry standard durnamy"
    });

    
    const  servi3=new servi(
        {
     
            item:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus malolor has been industry standard durnamy"
        });
     

servi.insertMany([servi1,servi2,servi3],function(err,result){
 if(err) throw err;
 else
 console.log(result)
});