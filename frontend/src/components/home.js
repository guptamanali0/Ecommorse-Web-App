import React, { Component } from 'react'; 
import axios from 'axios';
import Carousel from 'react-elastic-carousel'
import "react-multi-carousel/lib/styles.css";

import Whirligig from 'react-whirligig'
import './../styles/index.css'
import image1 from './../images/i1.jpeg'
import image2 from './../images/i2.png'
import image3 from './../images/i3.png'
import image4 from './../images/i4.png'
import image5 from './../images/i5.png'
import image6 from './../images/i6.png'
import image7 from './../images/i7.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends Component{
    state={
        menu:[],
        product:[],
        best:[],
        store:[],
        readme:[]
      }
      componentDidMount() {
         //axios.get("http://localhost:3001/home")
         let one ="http://localhost:3001/home";
        let two="http://localhost:3001/stores";
        let three="http://localhost:3001/bests";
        let four="http://localhost:3001/fbest";
        let five="http://localhost:3001/readme";

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    const requestTFour = axios.get(four);
    const requestTFive = axios.get(five);
    axios.all([requestOne, requestTwo, requestThree,requestTFour,requestTFive])
    .then(
    axios.spread((...responses) => {
        const responseOne = responses[0].data;
        const responseTwo = responses[1].data;
        const responesThree = responses[2].data;
        const responesFour = responses[3].data;
        const responesFive = responses[4].data;
        console.log(responseOne, responseTwo, responesThree,responesFour,responesFive)

        this.setState({
           menu:responseOne,
           store:responseTwo,
           best:responesThree,
           product:responesFour,
           readme:responesFive
          })
      })
    )
         .catch((error)=>
           console.log(error+"Wrong")    
         
         )
         console.log("fetching data")
     
       }

       Slider = () => {
        let whirligig
        const next = () => whirligig.next()
        const prev = () => whirligig.prev()
       }
      
       render(){    
        return (
          <>
           
           
      
           <div className="one"><span id="i">i</span>SHOP</div>
<div className="head1">
           {this.state.menu.map((i)=>(
               <div key={i.id}>
                 <button className="btn">{i.item}</button>
               </div> 
))}
 </div>
 
<hr id="line"></hr>
<img src={image1} id="image1"/>
<div className="both">
<div className="head3">
  <div>Accessories</div>
  <div>Category</div>
  <div>Category</div>
</div>

<div className="head2">
{this.state.store.map((i)=>(
               <div key={i.id}> 
                 <button className="btn">{i.item}</button>
                 {/* <button onClick={this.handleclick()}>{this.state.flag}?<Store />:null</button> */}
               </div> 
               
))}
</div>
</div>
<div>
<h5 id="best">BEST SELLER</h5>
</div> 
<div className="seller">
{this.state.best.map((i)=>(
               <div key={i.id}>
                <button className="btn">{i.item}</button>
               </div>
           ))}
          </div>
          <div className="pb">
           
          {this.state.product.map((i)=>(
            <div id="eight">
              <button id="eleven" className="btn active">Hot</button>
               <div key={i.id}>
                 <img src={i.path} id="nine" />
                <p id="ten">{i.item}</p>

  <div className="six">
                <div id="thirteen">${i.price}</div>
    <del id="fourteen">{i.oldprice}</del>
  </div>
                </div>
               </div>
           ))}


 </div>
 <a href="#" id="more">Load More</a>
  <div>
  <img src={image2} id="image2" />
</div> 
<div>
  <img src={image3} id="image3" />
</div> 

<div>
  <img src={image4} />
</div> 

<Carousel itemsToShow={3}>
{this.state.product.map((i)=>(
  <div className="scroll">
               <div key={i.id}>
                  <img src={i.path} id="gridimage" />
                <p id="tene">{i.item}</p>

                <div className="sixp">
                <div id="thirteen">${i.price}</div>
    <del id="fourteen">{i.oldprice}</del>
  </div>
  </div>
  </div>
           )
           )}
</Carousel>

<div>
  <img src={image5} id="image5" />
</div> 
<div className="twitter">
<img src={image6}/>
<img src={image7}  id="twit2"/>
</div>

<div className="last">
{this.state.readme.map((i)=>(
               <div key={i.id}> 
                 <button className="btn">{i.item}</button>
                 {/* <button onClick={this.handleclick()}>{this.state.flag}?<Store />:null</button> */}
               </div> 
              
))}
 </div>





           </>
        )}
}
export default Home





























{/* <div id="eight">

  <img src={Logo4} id="nine"/>
  <p id="ten">Apple Mackbook pro</p>
  <button className="star">
  <button id="star1" className="btn btn-white toggle btn-sm">< BsFillStarFill/></button>
  <button id="star1" className="btn btn-white toggle btn-sm">< BsFillStarFill/></button>
  <button id="star1" className="btn btn-white toggle btn-sm">< BsFillStarFill/></button>
  <button id="star1" className="btn btn-white toggle btn-sm">< BsFillStarFill/></button>
  <button id="star1" className="btn btn-white toggle btn-sm">< BsFillStarFill/></button>
  </button>
  <div className="six">
    <div id="thirteen">$499</div>
    <del id="fourteen">5599</del>
  </div>
</div> */}