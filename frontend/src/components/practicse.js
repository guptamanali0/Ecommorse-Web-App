import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import { HashRouter } from 'hash-router'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './../styles/index.css'

class Practicse extends Component{ 
  constructor(props){ 
    super(props)
    console.log(props)
  this.state={
    product:[]
  }
}

  componentDidMount() {

    axios.get("http://localhost:3001/products")
    .then((response)=>{
       const course=response.data
      const newList = course.filter((item) => item._id === this.props.match.params.username) 
      console.log(response.data)
      this.setState({
        product: newList
      })

    })
    .catch((error)=>
      console.log("error")
    
    )
    console.log("fetching data")
    console.log(this.product)
}

  render(){
    return(

      <>
      {this.state.product.map((i)=>(
       
        
       <div key={i.id}>
      <img src={i.path} id="nine" />
          <p id="ten">{i.item}</p>
          
      </div>
      ))}
</>
    )
}
}
export default Practicse;