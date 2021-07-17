import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import axios from 'axios';
import {Link,NavLink } from 'react-router-dom';
import './../styles/index.css'
import image12 from './../images/ishop.png'
import image2 from './../images/i2.png'
import image13 from './../images/i13.png'




class Accs extends Component{

  state={
    menu:[],
    product:[],
    product1:[]
  
  }

  myFunctionA = () => {
    this.setState((state) => (this.product=this.product1,{product:state.product.filter((item) => item.color === "Black")}))
    console.log("yes")
}

myFunctionB = () => {
  this.setState((state) => (this.product=this.product1,{product:state.product.filter((item) => item.category === "Wireless & Air ports")}))
  console.log("yes")
}



  componentDidMount() {
     let one ="http://localhost:3001/home";
    let two="http://localhost:3001/products";

const requestOne = axios.get(one);
const requestTwo = axios.get(two);

axios.all([requestOne, requestTwo])
.then(
axios.spread((...responses) => {
    const responseOne = responses[0].data;
    const responseTwo = responses[1].data;
    console.log(responseOne, responseTwo)

    this.setState({
       menu:responseOne,
       product:responseTwo,
       product1:responseTwo
      })
  })
)
     .catch((error)=>
       console.log(error+"Wrong")    
     
     )
     console.log("fetching data")
 
   }
  

    render(){
      return(
        <>
           <div className="one"><img src={image12}/></div>
           <div className="top">
           {this.state.menu.map((i)=>(
               <div key={i.id}>
                 <NavLink  id="link"  to="/sell">{i.item}</NavLink>
               </div> 
))}
 </div>
<div className="toptwo">
 <NavLink activeClassName="active" to="/" id="linkone">Store</NavLink>
 <NavLink activeClassName="active" to="#" id="linkone"> / </NavLink>
<NavLink activeClassName="active" to="/" id="linkone">Accessories</NavLink>
</div>

<img src={image13} className="image13"/>
<button onClick={this.myFunctionA}>Click me to display item 1 & 4</button>
<button onClick={this.myFunctionB}>Click me to display</button>





{this.state.product.map((i)=>(
               <div key={i.id}>
                 <NavLink  id="link"  to="/sell">{i.item}</NavLink>
                 <img id="link"   src={i.path} />
               </div> 
))}



  </>
      )
      }
}


export default Accs;