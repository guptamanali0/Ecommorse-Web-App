const mongoose=require('mongoose')
const url="mongodb://127.0.0.1:27017/Ecommercedbs"

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
const image=mongoose.model("Product",Image);
//const Car = mongoose.model("CarName",carSchema);
const  im1=new image(
   {

       item:"New Apple Mac mini ",
       category:"Macbook",
       price:499,
       color:"white",
       path:"https://i.ibb.co/F4fLmYh/img9.png",
       brand:"Apple"
   });

const  im2=new image(
       {
   
           item:"Apple Smartwatch magic",
           category:"Wireless & Air ports",
           price:499,
           color:"Golden",
           path:"https://i.ibb.co/jrTvLHH/img10.png",
           brand:"Apple"
       })

const  im3=new image(
           {
       
               item:"Apple Airpods",
               category:"Wireless & Air ports",
               price:499,
               color:"White",
               path:"https://i.ibb.co/R41zf6P/img11.png",
               brand:"Apple"
           })
const  im4=new image(
               {
                  
               item:"Apple Carger",
               category:"Charging devices",
               price:499,
               color:"Black",
               path:"https://i.ibb.co/bBDNpXh/img12.png",
               brand:"Apple"
})

const  im5=new image(
                   {
               
                       item:"Apple Magic trackpad 2",
                       category:"Mobile",
                       price:499,
                       color:"Cases & Films",
                       path:"https://i.ibb.co/44wGPSx/img13.png",
                       brand:"Apple"
})

const  im6=new image(
                    {
                   
               item:"Iphone lightning Dock",
               category:"Iphone",
               price:499,
               color:"Gold",
               path:"https://i.ibb.co/s6H86Mf/img14.png",
               brand:"Apple"
})
const  im7=new image(
   {
    
       item:"Apple Camera",
       category:"Apple Car",
       price:499,
       color:"Black",
       path:"https://i.ibb.co/TWLc9B7/img15.png",
       brand:"Apple"
   })                  

   const  im8=new image(
       {
   
           item:"Apple Airpods max",
           category:"Wireless & Air ports",
           price:499,
           color:"White",
           path:"https://i.ibb.co/WvhG5LN/img16.png",
           // brand:
       })

       const  im9=new image(
        {
    
            item:"Apple Homepod mini",
            category:"Wireless & Air ports",
            price:499,
            color:"White",
            path:"https://i.ibb.co/vvSMv65/img17.png",
            // brand:
        })

        const  im10=new image(
            {
        
                item:"Apple Homepod mini",
                category:"Air ports & Wireless",
                price:499,
                color:"Black",
                path:"https://i.ibb.co/j9Xp1F4/img18.png",
                // brand:
            })

image.insertMany([im1,im2,im3,im4,im5,im6,im7,im8,im9,im10],function(err,result){
 if(err) throw err;
 else
 console.log(result)
});