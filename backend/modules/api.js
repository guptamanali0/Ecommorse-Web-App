const mongoose=require('mongoose')
const url="mongodb://127.0.0.1:27017/Ecommercedbs"

mongoose.connect(url,
    { useNewUrlParser: true , useUnifiedTopology: true },function(err,connection){
    if(err) console.log(err)
    else
    console.log("connection successful")
})

const Menus=mongoose.Schema({
    item:String
})

const menu=mongoose.model("menu",Menus);

const  menu1=new menu(
    {
        item:"Home"
    }
);

const  menu2=new menu(
    {
        item:"Store"
    }
);

const  menu3=new menu(
    {
        item:"Iphone"
    }
);

const  menu4=new menu(
    {
        item:"Ipad"
    }
);

const  menu5=new menu(
    {
        item:"Macbook"
    }
);
    const  menu6=new menu(
        {
            item:"Accessories"
        }
);

menu.insertMany([menu1,menu2,menu3,menu4,menu5,menu6],function(err,result){
  if(err) throw err;
  else
  console.log(result)
});


const Stores=mongoose.Schema({
    item:String
})

const store=mongoose.model("store",Stores);

const  store1=new store(
    {
        item:"Airport"
    }
);

const  store2=new store(
    {
        item:"Cameras"
    }
);

const  store3=new store(
    {
        item:"Bags & Shells"
    }
);

const  store4=new store(
    {
        item:"Bussnies and security"
    }
);

const  store5=new store(
    {
        item:"Cables and Docs"
    }
);

const  store6=new store(
    {
        item:"Cameras & Videos"
    }
);
const  store7=new store(
    {
        item:"Car & Travel"
    }
);
const  store8=new store(
    {
        item:"Cases & Films"
    }
);
const  store9=new store(
    {
        item:"Charging Devices"
    }
);
const  store10=new store(
    {
        item:"Connected Home"
    }
);
const  store11=new store(
    {
        item:"Device Care"
    }
);
const  store12=new store(
    {
        item:"Fitness & Sport"
    }
);

const  store13=new store(
    {
        item:"Headphone"
    }
);
const  store14=new store(
    {
        item:"Health Kit"
    }
);
const  store15=new store(
    {
        item:"Price & Keyboard"
    }
);
const  store16=new store(
    {
        item:"Music Creation"
    }
);
const  store17=new store(
    {
        item:"Networking & Server"
    }
);

const  store19=new store(
    {
        item:"Music Creation"
    }
);

const  store20=new store(
    {
        item:"Networking & Server"
    }
);

store.insertMany([store1,store2,store3,store4,store5,store6,store7,store8,store9,store10,store11,store12,store13,store14,store15,store16,store17],function(err,result){
  if(err) throw err;
  else
  console.log(result)
});






 const Accstwo=mongoose.Schema({
     item:String
 })
const acc=mongoose.model("acc",Accstwo);
const  acc1=new acc(
    {
        item:"Airport&wireless"
    }
);
const  acc2=new acc(
    {
        item:"AppleCare"
    }
);
const  acc3=new acc(
    {
        item:"Cables & Docks"
    }
);
const  acc4=new acc(
    {
        item:"Connected Home"
    }
);
const  acc5=new acc(
    {
        item:"Charging Devices"
    }
);
const  acc6=new acc(
    {
        item:"Headphones"
    }
);
const  acc7=new acc(
    {
        item:"Cases & Films"
    }
);

acc.insertMany([acc1,acc2,acc3,acc4,acc5,acc6,acc7],function(err,result){
  if(err) throw err;
  else
  console.log(result)
});



const Bests=mongoose.Schema({
     item:String
 })
const best=mongoose.model("best",Bests);
const  best1=new best(
    {
        item:"All"
    }
);
const  best2=new best(
    {
        item:"Mac"
    }
);
const  best3=new best(
    {
        item:"Iphone"
    }
);
const  best4=new best(
    {
        item:"Ipad"
    }
);
const  best5=new best(
    {
        item:"Ipod"
    }
);
const  best6=new best(
    {
        item:"Accessories"
    }
);

best.insertMany([best1,best2,best3,best4,best5,best6],function(err,result){
  if(err) throw err;
  else
  console.log(result)
});





 const Products=mongoose.Schema({
     item:String,
       category:String,
        price:Number,
        color:String,
        path:String,
        brand:String,
        best:String
 })
const products=mongoose.model("products",Products);
//const Car = mongoose.model("CarName",carSchema);
const  pro1=new products(
    {

        item:"Apple Macbook Pro",
        category:"Laptop",
        price:499,
        color:"grey",
        path:"https://i.ibb.co/Mf5rd5g/img1.png",
        brand:"Apple",
        best:"true"
    });

const  pro2=new products(
        {
    
            item:"Apple Mackbook Pro",
            category:"Laptop",
            price:499,
            color:"blurr-white",
            path:"https://i.ibb.co/s6RP8Yw/img2.png",
            brand:"Apple",
            best:"true"
        })

const  pro3=new products(
            {
        
                item:"Apple Mackbook Air",
                category:"Laptop",
                price:499,
                color:"Golden",
                path:"https://i.ibb.co/kQCkBvk/img3.png",
                brand:"Apple",
                best:"true"
            })
const  pro4=new products(
                {
            
                   
                item:"Apple Iphone 11",
                category:"Mobile",
                price:499,
                color:"Black",
                path:"https://i.ibb.co/fSb66SF/img4.png",
                brand:"Apple",
                best:"true"
})

const  pro5=new products(
                    {
                
                        item:"Apple Mackbook Air",
                        category:"Mobile",
                        price:499,
                        color:"White",
                        path:"https://i.ibb.co/0rQ85W4/img5.png",
                        brand:"Apple",
                        best:"true"
 })

 const  pro6=new products(
                        {
                    
                item:"Apple Ipad",
                category:"Ipad",
                price:499,
                color:"Black",
                path:"https://i.ibb.co/gFKHK1K/img6.png",
                brand:"Apple",
                best:"true"
 })
const  pro7=new products(
    {

     
        item:"Apple Watch 21.1",
        category:"Watch",
        price:499,
        color:"Black",
        path:"https://i.ibb.co/x5KWLxN/img7.png",
        brand:"Apple",
        best:"true"
    })                  

    const  pro8=new products(
        {
    
            item:"Apple Ipad 2A",
            category:"Electronic",
            price:22,
            color:"Blue",
            path:"https://i.ibb.co/rygmVBS/img8.png",
            brand:"Apple",
        best:"true"
        })





        const  pro9=new products(
            {
         
                item:"New Apple Mac mini ",
                category:"Macbook",
                price:499,
                color:"white",
                path:"https://i.ibb.co/F4fLmYh/img9.png",
                brand:"Apple",
                best:"true"
            });
         
         const  pro10=new products(
                {
            
                    item:"Apple Smartwatch magic",
                    category:"Wireless & Air ports",
                    price:499,
                    color:"Golden",
                    path:"https://i.ibb.co/jrTvLHH/img10.png",
                    brand:"Apple",
                    best:"false"
                })
         
         const  pro11=new products(
                    {
                
                        item:"Apple Airpods",
                        category:"Wireless & Air ports",
                        price:499,
                        color:"White",
                        path:"https://i.ibb.co/R41zf6P/img11.png",
                        brand:"Apple",
                        best:"false"
                    })
         const  pro12=new products(
                        {
                           
                        item:"Apple Carger",
                        category:"Charging devices",
                        price:499,
                        color:"Black",
                        path:"https://i.ibb.co/bBDNpXh/img12.png",
                        brand:"Apple",
                        best:"false"
         })
         
         const  pro13=new products(
                            {
                        
                                item:"Apple Magic trackpad 2",
                                category:"Mobile",
                                price:499,
                                color:"Cases & Films",
                                path:"https://i.ibb.co/44wGPSx/img13.png",
                                brand:"Apple",
                                best:"false"
         })
         
         const  pro14=new products(
                             {
                        item:"Iphone lightning Dock",
                        category:"Iphone",
                        price:499,
                        color:"Gold",
                        path:"https://i.ibb.co/s6H86Mf/img14.png",
                        brand:"Apple",
                        best:"false"
         })
         const  pro15=new products(
            {
             
                item:"Apple Camera",
                category:"Apple Car",
                price:499,
                color:"Black",
                path:"https://i.ibb.co/TWLc9B7/img15.png",
                brand:"Apple",
                best:"false"
            })                  
         
            const  pro16=new products(
                {
            
                    item:"Apple Airpods max",
                    category:"Wireless & Air ports",
                    price:499,
                    color:"White",
                    path:"https://i.ibb.co/WvhG5LN/img16.png",
                    brand:"Apple",
                best:"false"
                })
         
                const  pro17=new products(
                 {
             
                     item:"Apple Homepod mini",
                     category:"Wireless & Air ports",
                     price:499,
                     color:"White",
                     path:"https://i.ibb.co/vvSMv65/img17.png",
                     brand:"Apple",
                     best:"false"
                 })
         
                 const  pro18=new products(
                     {
                 
                         item:"Apple Homepod mini",
                         category:"Air ports & Wireless",
                         price:499,
                         color:"Black",
                         path:"https://i.ibb.co/j9Xp1F4/img18.png",
                         brand:"Apple",
                       best:"false"
                     })
products.insertMany([pro1,pro2,pro3,pro4,pro5,pro6,pro7,pro8,pro9,pro10,pro11,pro12,pro13,pro14,pro15,pro16,pro17,pro18],function(err,result){
  if(err) throw err;
  else
  console.log(result)
});