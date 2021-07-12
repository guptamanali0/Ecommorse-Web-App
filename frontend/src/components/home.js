import React, { Component } from 'react';
import axios from 'axios';
import './../styles/index.css'
import image1 from './../images/i1.jpeg'
import Store from './store.js'


 

class Home extends Component{
    
  

    state={
         courselist:[],
         responseOne:[],
         responseTwo:[],
        responesThree:[], 
        responesFour:[], 
        flag:false   
      }

      handleclick=()=>{
        this.setState({
            flag:true
        })
          //  alert("Cllickc")
      }

     
      
      componentDidMount() {
        const one=("http://localhost:3001/home")
        const two=("http://localhost:3001/stores")
        const three=("http://localhost:3001/bests")
        const four=("http://localhost:3001/products")


        const requestOne = axios.get(one);
     const requestTwo = axios.get(two);
      const requestThree = axios.get(three);
      const requestFour = axios.get(four);

      axios.all([requestOne, requestTwo, requestThree,requestFour]).then(axios.spread((...responses) => {
        this.setState({ 
          responseOne : responses[0].data,
          responseTwo : responses[1].data,
         responesThree :   responses[2].data})
        
      
      })).catch(errors => {
        console.log(errors)
      })
        
         console.log("fetching data")
     
       }
       render(){
        return (
          <>
          {/* <div className="outer"> */}
           <div className="one"><span id="i">i</span>SHOP</div>
<div className="head1">
{/* <img src={image1} /> */}
           {this.state.responseOne.map((i)=>(
               <div key={i.id}>
                 <div>{i.item}</div>
                 {/* <button onClick={this.handleclick()}>{this.state.flag}?<Store />:null</button> */}
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
{this.state.responseTwo.map((i)=>(
               <div key={i.id}> 
                 <div>{i.item}</div>
                 {/* <button onClick={this.handleclick()}>{this.state.flag}?<Store />:null</button> */}
               </div> 
               
))}
</div>
</div>
  <div id="best">BEST SELLER</div>





           {/* </div> */}
           </>
        )}
}
export default Home