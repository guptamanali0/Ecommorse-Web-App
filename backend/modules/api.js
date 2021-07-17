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

// const menu=mongoose.model("menu",Menus);

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
//     const  menu6=new menu(
//         {
//             item:"Accessories"
//         }
// );

// menu.insertMany([menu1,menu2,menu3,menu4,menu5,menu6],function(err,result){
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
//         item:"Airport"
//     }
// );

// const  store2=new store(
//     {
//         item:"Cameras"
//     }
// );

// const  store3=new store(
//     {
//         item:"Bags & Shells"
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
//         item:"Cameras & Videos"
//     }
// );
// const  store7=new store(
//     {
//         item:"Car & Travel"
//     }
// );
// const  store8=new store(
//     {
//         item:"Cases & Films"
//     }
// );
// const  store9=new store(
//     {
//         item:"Charging Devices"
//     }
// );
// const  store10=new store(
//     {
//         item:"Connected Home"
//     }
// );
// const  store11=new store(
//     {
//         item:"Device Care"
//     }
// );
// const  store12=new store(
//     {
//         item:"Fitness & Sport"
//     }
// );

// const  store13=new store(
//     {
//         item:"Headphone"
//     }
// );
// const  store14=new store(
//     {
//         item:"Health Kit"
//     }
// );
// const  store15=new store(
//     {
//         item:"Price & Keyboard"
//     }
// );
// const  store16=new store(
//     {
//         item:"Music Creation"
//     }
// );
// const  store17=new store(
//     {
//         item:"Networking & Server"
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

// store.insertMany([store1,store2,store3,store4,store5,store6,store7,store8,store9,store10,store11,store12,store13,store14,store15,store16,store17],function(err,result){
//   if(err) throw err;
//   else
//   console.log(result)
// });






//  const Accstwo=mongoose.Schema({
//      item:String
//  })
// const acc=mongoose.model("acc",Accstwo);
// const  acc1=new acc(
//     {
//         item:"Apple Car"
//     }
// );
// const  acc2=new acc(
//     {
//         item:"Airport & Wirless"
//     }
// );
// const  acc3=new acc(
//     {
//         item:"Cables & Docks"
//     }
// );
// const  acc4=new acc(
//     {
//         item:"Cases & Films"
//     }
// );
// const  acc5=new acc(
//     {
//         item:"Charging Devices"
//     }
// );
// const  acc6=new acc(
//     {
//         item:"Connected Home"
//     }
// );
// const  acc7=new acc(
//     {
//         item:"Headphones"
//     }
// );

// acc.insertMany([acc1,acc2,acc3,acc4,acc5,acc6,acc7],function(err,result){
//   if(err) throw err;
//   else
//   console.log(result)
// });



// const Bests=mongoose.Schema({
//      item:String
//  })
// const best=mongoose.model("best",Bests);
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
//         item:"Ipod"
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















// const read=mongoose.Schema({
//     item:String
// })
// re=mongoose.model("readme",read);

// const im1 =new re(
//         {
//             item:"About Us"
//         });
// const im2 =new re(
//             {
//                 item:"About Us"
//             });
// const im3 =new re(
//                 {
//                     item:"About Us"
//                 });
// const im4 =new re(
//                     {
//                         item:"About Us"
//                     });

// const im5 =new re(
//     {
//         item:"About Us"
//     });              
// const im6 =new re(
//     {
//         item:"About Us"
//     });                    
// const im7 =new re(
//     {
//         item:"Information"
//     });     
// const im8 =new re(
//  {
//     item:"Information"
//  });
// const im9 =new re(
// {
// item:"Information"
//  });               
// const im10 =new re(
//     {
//         item:"Information"
//     });                                        
//     const im11 =new re(
//         {
//             item:"Information"
//         });                                          
//  const im12 =new re(
// {
// item:"Information"
// });                                             
// const im13 =new re(
//     {
//         item:"Privacy Policy"
// });                                                    
// const im14 =new re(
//     {
//         item:"Privacy Policy"
// });                                                       
// const im15 =new re(
//     {
//         item:"Privacy Policy"
// });                                                          
// const im16 =new re(
//     {
//         item:"Privacy Policy"
// }); 
// const im17 =new re(
//     {
//         item:"Privacy Policy"
// }); 
// const im18 =new re(
//     {
//         item:"Privacy Policy"
// });                                                           
// const im19 =new re(
//     {
//         item:"Terms & Conditions"
// }); 
// const im20 =new re(
//     {
//         item:"Terms & Conditions"
// }); 
// const im21 =new re(
//     {
//         item:"Terms & Conditions"
// }); 
// const im22 =new re(
//     {
//         item:"Terms & Conditions"
// }); 
// const im23 =new re(
//     {
//         item:"Terms & Conditions"
// }); 
// const im24 =new re(
//     {
//         item:"Terms & Conditions"
// }); 

// re.insertMany([im1,im2,im3,im4,im5,im6,im7,im8,im9,im10,im11,im12,im13,im14,im15,im16,im17,im18,im19,im20,im21,im22,im23,im24],function(err,result){
//         if(err) throw err;
//         else
//         console.log(result)
//        });




const Image=mongoose.Schema({
    item:String,
      category:String,
       price:Number,
       color:String,
       path:String,
       brand:String,
       best:String
})
const image=mongoose.model("Product",Image);
//const Car = mongoose.model("CarName",carSchema);
    const  im1=new image(
    {

        item:"New Apple Mac mini ",
        category:"Apple car",
        price:499,
        color:"white",
        path:"https://i.ibb.co/F4fLmYh/img9.png",
        brand:"Apple",
        best:"true"
    });

const  im2=new image(
       {
   
           item:"Apple Smartwatch magic",
           category:"Air ports & Wireless",
           price:499,
           color:"Golden",
           path:"https://i.ibb.co/jrTvLHH/img10.png",
           brand:"Apple",
           best:"true"
       })

const  im3=new image(
           {
       
               item:"Apple Airpods",
               category:"Cables & Docks",
               price:499,
               color:"White",
               path:"https://i.ibb.co/R41zf6P/img11.png",
               brand:"Apple",
               best:"true"
           })
const  im4=new image(
               {
                  
               item:"Apple Carger",
               category:"Cases & Films",
               price:499,
               color:"Black",
               path:"https://i.ibb.co/bBDNpXh/img12.png",
               brand:"Apple",
               best:"true"
})

const  im5=new image(
                   {
               
                       item:"Apple Magic trackpad 2",
                       category:"Charging Devices",
                       price:499,
                       color:"Cases & Films",
                       path:"https://i.ibb.co/44wGPSx/img13.png",
                       brand:"Apple",
                       best:"true"
})

const  im6=new image(
                    {
                   
               item:"Iphone lightning Dock",
               category:"Connected Home",
               price:499,
               color:"Gold",
               path:"https://i.ibb.co/s6H86Mf/img14.png",
               brand:"Apple",
               best:"true"
})
const  im7=new image(
   {
    
       item:"Apple Camera",
       category:"Headphones",
       price:499,
       color:"Black",
       path:"https://i.ibb.co/TWLc9B7/img15.png",
       brand:"Apple",
       best:"true"
   })                  

   const  im8=new image(
       {
   
           item:"Apple Airpods max",
           category:"Apple car",
           price:499,
           color:"White",
           path:"https://i.ibb.co/WvhG5LN/img16.png",
           brand:"Apple",
       best:"true"
       })

       const  im9=new image(
        {
    
            item:"Apple Homepod mini",
            category:"Air port & Wireless",
            price:499,
            color:"White",
            path:"https://i.ibb.co/vvSMv65/img17.png",
            brand:"Apple",
            best:"false"
        })

        const  im10=new image(
            {
        
                item:"Apple Homepod mini",
                category:"Cables & Docks",
                price:499,
                color:"Black",
                path:"https://i.ibb.co/j9Xp1F4/img18.png",
                brand:"Apple",
              best:"false"
            })

            const  im11=new image(


                           {
                           
                               item:"iphone-lightning-dock",
                               category:"Cables & Docks",
                               price:49,
                               color:"pink",
                               path:"https://i.ibb.co/ScRMJ32/iphone-lightning-dock.jpg",
                               brand:"Apple",
                               best:"false",
                               oldprice:19
                          }) 
                          
                          const  im12=new image(
                            {
                            item:"Headphone -567",
                          category:"Headphones",
                          price:399,
                          color:"white",   
                          path:"https://i.ibb.co/4f7bM59/High-End-Over-Ear-Headphones.jpg",                             
                          brand:"Apple",
                          best:"false",  
                          oldprice:436                                  
                          })

                          const  im13=new image(
                            {
                        
                                item:"Apple Airpods",
                                category:"Cables & Docks",
                                price:499,
                                color:"White",
                                path:"https://i.ibb.co/R41zf6P/img11.png",
                                brand:"Apple",
                                best:"false"
                            })
                 const  im14=new image(
                                {
                                   
                                item:"Apple Carger",
                                category:"Cases & Films",
                                price:499,
                                color:"Black",
                                path:"https://i.ibb.co/bBDNpXh/img12.png",
                                brand:"Apple",
                                best:"false"
                 })
                 
                 const  im15=new image(
                                    {
                                
                                        item:"Apple Magic trackpad 2",
                                        category:"Charging Devices",
                                        price:499,
                                        color:"Cases & Films",
                                        path:"https://i.ibb.co/44wGPSx/img13.png",
                                        brand:"Apple",
                                        best:"false"
                 })
                 
                 const  im16=new image(
                                     {
                                    
                                item:"Iphone lightning Dock",
                                category:"Connected Home",
                                price:499,
                                color:"Gold",
                                path:"https://i.ibb.co/s6H86Mf/img14.png",
                                brand:"Apple",
                                best:"false"
                 })
                 const  im17=new image(
                    {
                     
                        item:"Apple Camera",
                        category:"Headphones",
                        price:499,
                        color:"Black",
                        path:"https://i.ibb.co/TWLc9B7/img15.png",
                        brand:"Apple",
                        best:"false"
                    })                  
                 
                    const  im18=new image(
                        {
                    
                            item:"Apple Airpods max",
                            category:"Apple car",
                            price:499,
                            color:"White",
                            path:"https://i.ibb.co/WvhG5LN/img16.png",
                            brand:"Apple",
                        best:"false"
                        })
                 
                        const  im19=new image(
                         {
                     
                             item:"Apple Homepod mini",
                             category:"Air port & Wireless",
                             price:499,
                             color:"White",
                             path:"https://i.ibb.co/vvSMv65/img17.png",
                             brand:"Apple",
                             best:"false"
                         })
                 
                         const  im20=new image(
                             {
                         
                                 item:"Apple Homepod mini",
                                 category:"Cables & Docks",
                                 price:499,
                                 color:"Black",
                                 path:"https://i.ibb.co/j9Xp1F4/img18.png",
                                 brand:"Apple",
                               best:"false"
                             })
                 
                             const  im21=new image(
                 
                 
                                            {
                                            
                                                item:"iphone-lightning-dock",
                                                category:"Cables & Docks",
                                                price:49,
                                                color:"pink",
                                                path:"https://i.ibb.co/ScRMJ32/iphone-lightning-dock.jpg",
                                                brand:"Apple",
                                                best:"false",
                                                oldprice:19
                                           }) 




                          
image.insertMany([im1,im2,im3,im4,im5,im6,im7,im8,im9,im10,im12,im13,im14,im15,im16,im17,im18,im19,im20,im21],function(err,result){
 if(err) throw err;
 else
 console.log(result)
});








       

                               


