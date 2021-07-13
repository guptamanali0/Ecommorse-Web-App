import React, { Component } from 'react';
import axios from 'axios';
import './../styles/index.css'
import image1 from './../images/i1.jpeg'
class Home extends Component{
    state={
        menu:[],
        product:[],
        best:[],
        store:[]
      }
      componentDidMount() {
         //axios.get("http://localhost:3001/home")
         let one ="http://localhost:3001/home";
        let two="http://localhost:3001/stores";
        let three="http://localhost:3001/bests";
        let four="http://localhost:3001/fbest";

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    const requestTfour = axios.get(four);
    axios.all([requestOne, requestTwo, requestThree,requestTfour])
    .then(
    axios.spread((...responses) => {
        const responseOne = responses[0].data;
        const responseTwo = responses[1].data;
        const responesThree = responses[2].data;
        const responesfour = responses[3].data;

        console.log(responseOne, responseTwo, responesThree,responesfour)

        this.setState({
           menu:responseOne,
           store:responseTwo,
           best:responesThree,
           product:responesfour
          })
      })
    )
         .catch((error)=>
           console.log(error+"rejgndrogmjd")    
         
         )
         console.log("fetching data")
     
       }
       render(){    
        return (
          <>
           {/* {this.state.menu.map((i)=>(
               <div key={i.id}>
                <h1>{i.item}</h1>
               </div>
           ))}
              {this.state.store.map((i)=>(
               <div key={i.id}>
                <p>{i.item}</p>
               </div>
           ))}
           
            {this.state.best.map((i)=>(
               <div key={i.id}>
                <p>{i.item}</p>
               </div>
           ))}
            {this.state.product.map((i)=>(
               <div key={i.id}>
                <img src={i.path}></img>
               </div>
           ))} */}
               {/* <div className="outer"> */}
           <div className="one"><span id="i">i</span>SHOP</div>
<div className="head1">
{/* <img src={image1} /> */}
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
               <div key={i.id}>
                 <img src={i.path}></img>
                <p>{i.item}</p>
                <p>{i.price}</p>
               </div>
           ))}
           </div>
           {/* </div> */}
           </>
        )}
}
export default Home