const mongoose=require('mongoose')
const url="mongodb://127.0.0.1:27017/Ecommercedbs"

mongoose.connect(url,
    { useNewUrlParser: true , useUnifiedTopology: true },function(err,connection){
    if(err) console.log(err)
    else
    console.log("connection successful")
})

// const Menus=mongoose.Schema({
//     item:String
// })

// const menu=mongoose.model("Menu",Menus);

// const  menu1=new menu(
//     {
//         item:"Home"
//     }
// );

// const  menu2=new menu(
//     {
//         item:"Store"
//     }
// );

// const  menu3=new menu(
//     {
//         item:"Iphone"
//     }
// );

// const  menu4=new menu(
//     {
//         item:"Ipad"
//     }
// );

// const  menu5=new menu(
//     {
//         item:"Macbook"
//     }
// );

// menu.insertMany([menu1,menu2,menu3,menu4,menu5],function(err,result){
//   if(err) throw err;
//   else
//   console.log(result)
// });


// const Stores=mongoose.Schema({
//     item:String
// })

// const store=mongoose.model("store",Stores);

// const  store1=new store(
//     {
//         item:"Airport & Wireless "
//     }
// );

// const  store2=new store(
//     {
//         item:"Applecare"
//     }
// );

// const  store3=new store(
//     {
//         item:"Bags Shells & Sleeves"
//     }
// );

// const  store4=new store(
//     {
//         item:"Bussnies and security"
//     }
// );

// const  store5=new store(
//     {
//         item:"Cables and Docs"
//     }
// );

// const  store6=new store(
//     {
//         item:"Cables and Docs"
//     }
// );
// const  store7=new store(
//     {
//         item:"Cables and Docs"
//     }
// );
// const  store8=new store(
//     {
//         item:"Cameras & Videos"
//     }
// );
// const  store9=new store(
//     {
//         item:"Car & Travel"
//     }
// );
// const  store10=new store(
//     {
//         item:"Cases & Films"
//     }
// );
// const  store11=new store(
//     {
//         item:"Charging Devices"
//     }
// );
// const  store12=new store(
//     {
//         item:"Connected Home"
//     }
// );

// const  store13=new store(
//     {
//         item:"Device Care"
//     }
// );
// const  store14=new store(
//     {
//         item:"Display&Graphics"
//     }
// );
// const  store15=new store(
//     {
//         item:"Fitness & sport"
//     }
// );
// const  store16=new store(
//     {
//         item:"HeadPhone"
//     }
// );
// const  store17=new store(
//     {
//         item:"HealthKit"
//     }
// );
// const  store18=new store(
//     {
//         item:"Mice & Keyboards"
//     }
// );

// const  store19=new store(
//     {
//         item:"Music Creation"
//     }
// );

// const  store20=new store(
//     {
//         item:"Networking & Server"
//     }
// );

// store.insertMany([store1,store2,store3,store4,store5,store6,store7,store8,store9,store10,store11,store12,store13,store14,store15,store16,store17,store18,store19,store20],function(err,result){
//   if(err) throw err;
//   else
//   console.log(result)
// });






//  const Accessories_page2=mongoose.Schema({
//      item:String
//  })
// const acc=mongoose.model("Acc",Accessories_page2);
// const  acc1=new acc(
//     {
//         item:"Airport&wireless"
//     }
// );
// const  acc2=new acc(
//     {
//         item:"AppleCare"
//     }
// );
// const  acc3=new acc(
//     {
//         item:"Cables & Docks"
//     }
// );
// const  acc4=new acc(
//     {
//         item:"Connected home"
//     }
// );
// const  acc5=new acc(
//     {
//         item:"Charging Devices"
//     }
// );
// const  acc6=new acc(
//     {
//         item:"Headphones"
//     }
// );
// const  acc7=new acc(
//     {
//         item:"Cases & Films"
//     }
// );

// acc.insertMany([acc1,acc2,acc3,acc4,acc5,acc6,acc7],function(err,result){
//   if(err) throw err;
//   else
//   console.log(result)
// });



// const Bestseller=mongoose.Schema({
//      item:String
//  })
// const best=mongoose.model("Best",Bestseller);
// const  best1=new best(
//     {
//         item:"All"
//     }
// );
// const  best2=new best(
//     {
//         item:"Mac"
//     }
// );
// const  best3=new best(
//     {
//         item:"Iphone"
//     }
// );
// const  best4=new best(
//     {
//         item:"Ipad"
//     }
// );
// const  best5=new best(
//     {
//         item:"Ipad"
//     }
// );
// const  best6=new best(
//     {
//         item:"Accessories"
//     }
// );

// best.insertMany([best1,best2,best3,best4,best5,best6],function(err,result){
//   if(err) throw err;
//   else
//   console.log(result)
// });





 const Image=mongoose.Schema({
     item:String,
       category:String,
        price:Number,
        color:String,
        path:String,
        brand:String
 })
const image=mongoose.model("Product",Image);
const  im1=new image(
    {

        item:"Apple Macbook Pro",
        category:"Laptop",
        price:499,
        color:"grey",
        path:"./images/i1.jpeg",
        brand:"Apple"
    });

const  im2=new image(
        {
    
            item:"Apple Mackbook Pro",
            category:"Laptop",
            price:499,
            color:"blurr-white",
            path:"./images/i2.jpeg",
            brand:"Apple"
        })

const  im3=new image(
            {
        
                item:"Apple Mackbook Air",
                category:"Laptop",
                price:499,
                color:"Golden",
                path:"./images/i3.jpeg",
                brand:"Apple"
            })
const  im4=new image(
                {
            
                   
                item:"Apple Iphone 11",
                category:"Mobile",
                price:499,
                color:"Black",
                path:"./images/i4.jpeg",
                brand:"Apple"
})

const  im5=new image(
                    {
                
                        item:"Apple Mackbook Air",
                        category:"Mobile",
                        price:499,
                        color:"White",
                        path:"./images/i5.jpeg",
                        brand:"Apple"
 })

 const  im6=new image(
                        {
                    
                item:"Apple Ipad",
                category:"Ipad",
                price:499,
                color:"Black",
                path:"./images/i6.jpeg",
                brand:"Apple"
 })

const  im7=new image(
    {

     
        item:"Apple Watch 21.1",
        category:"Watch",
        price:499,
        color:"Black",
        path:"./images/i7.jpeg",
        brand:"Apple"
    })                  

    const  im8=new image(
        {
    
            item:"Apple Ipad 2A",
            category:"Electronic",
            price:22,
            color:"Blue",
            path:"./images/i8.jpeg",
            // brand:
        })




image.insertMany([im1,im2,im3,im4,im5,im6,im7,im8],function(err,result){
  if(err) throw err;
  else
  console.log(result)
});


