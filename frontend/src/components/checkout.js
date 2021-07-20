import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import { HashRouter } from 'hash-router'
import {Link,NavLink } from 'react-router-dom';
import axios from 'axios';
import image12 from './../images/ishop.png'
// import {Link} from 'react-router-dom';
import './../styles/index.css'

class Checkout extends Component{ 
  constructor(props){ 
    super(props)
    console.log(props)
  this.state={
    product:[],
    menu:[],
    count:1,
    product1:1,
    flag:true,
    price:1,
    price1:1,
    sum:0,
    shoppingfee:150
  }
}

myFunctionR = () => {
  console.log(this.flag)
  this.setState((state) => (
      {product:[],
      count:0,
      price:0,
    flag:false
  }
      ))
      if(this.count===0){
      console.log("No Item in Todo")
      }
      console.log(this.state.product)
      console.log(this.state.count)
  console.log("yes")
  console.log(this.state.flag)
}

myFunctionS = () => {
  
  if(this.state.flag==false){
    let localcount=this.state.count;
    console.log("Manali")
  this.setState((state) => (
    
    {count:0,
  price:0

    }))
  }

  else{
    let localcount=this.state.count;
    let original=this.price
    if(this.state.price===0){
      this.state.price=this.state.price1
    }
    console.log("Manali")
    console.log(this.state.price)
  this.setState((state) => (
    
    {count:localcount+1,
      price:this.state.price1*(localcount+1)
    }))
  }

      console.log(this.state.count)
  console.log("yes")

}


myFunctionT = () => {
  let localcount=this.state.count;
  if(this.state.flag==false||localcount<=0){
    
    console.log("Manali")
  this.setState((state) => (
    
    {count:0,
      price:0

    }))
  }

  else{
    let anothercount=this.state.count;
    console.log("Manali")
    console.log(this.state.price)
  this.setState((state) => (
    
    {count:localcount-1,
      price:this.state.price1*(anothercount-1),
    }))
    console.log("work")
  }

      console.log(this.state.count)
  console.log("yes")

}

myFunctionZ = () => {
  let localcount=this.state.count;
    
    console.log("Manali")
    let x=this.state.price
    const z=parseInt(x)
    console.log(typeof(this.state.count))
    if(this.state.flag==false){
      let localcount=this.state.count;
      console.log("Manali")
    this.setState((state) => (
      
      {sum:0
  
      }))
    }
    else if(this.state.count===0){
      this.setState({
        sum:0
      })
    }
    else{
  this.setState((state) => (
    
    {

sum:parseInt(x)+150
    })
    )
  }
}
componentDidMount() {
  let one ="http://localhost:3001/home";
    let two="http://localhost:3001/products";
    let three="http://localhost:3001/readme";

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);

axios.all([requestOne, requestTwo,requestThree])
.then(
axios.spread((...responses) => {
    const responseOne = responses[0].data;
    const responseTwo = responses[1].data;
    const responseThree = responses[2].data;

    const newList = responseTwo.filter((item) => item._id === this.props.match.params.username) 
    console.log(responseOne, responseTwo)
    const priceList=this.props.match.params.price

    this.setState({
       menu:responseOne,
       product:newList,
       price:priceList,
       price1:priceList
      })
  })
)
     .catch((error)=>
       console.log(error+"Wrong")    
     
     )
     console.log("price")
     console.log("fetching data")
 
   }

  render(){
    return(

      <>
     <div className="one"><img src={image12}/></div>
<div className="top">
           {this.state.menu.map((i)=>(
               <div key={i.id}>
                 <Link  id="link"  to="/sell">{i.item}</Link>
               </div> 
))}
 </div>


 <div className="toptwo">
<NavLink activeClassName="active" to="#" id="linkone">Cart </NavLink>
</div>

 {this.state.product.map((i)=>(
       
       <div id="eight">
       <button id="eleven" className="btn active">Hot</button>
       <div key={i.id}>
      <img src={i.path} id="nine" />
      <div>{i.price}</div>
          <p id="ten">{i.item}</p>
          </div>
               <div className="six">
                <div id="thirteen">${i.price}</div>
    <del id="fourteen">200</del>
  </div>

      </div>
      ))}


<button onClick={this.myFunctionR}>Close</button>
<button onClick={this.myFunctionS}>Increase Item</button>
<button onClick={this.myFunctionT}>Decrease Item</button>
<button onClick={this.myFunctionZ}>Sum</button>
<p>{this.state.count}</p>
<h1>{this.state.price}</h1>
<h1>{this.state.sum}</h1>


</>
    )
}
}
export default Checkout;