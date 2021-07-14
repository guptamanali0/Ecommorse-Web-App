import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import axios from 'axios';

function handleclick(event) {
  return(
    this
  )
}

class Accs extends Component{
  
  state = {
    courselist:[]
  }

 

  componentDidMount() {

    axios.get("http://localhost:3001/products",{
      params:{
        best: "false",
        item: "Apple Camera"
      }
    })
    .then((response)=>{
      console.log(response.data)
      console.log(this.courselist)
      this.setState({
        courselist: response.data
         })
         console.log(response.data)
         console.log(typeof(response.data));
    })
    .catch((error)=>
      console.log(error)
    
    )
    console.log("fetching data")
  }

    render(){
      return(
        <>
             {this.state.courselist.map((i)=>(
               <div key={i.id}>
                 <div  id="link">{i.item}</div>
                 <div  id="link">{i.best}</div>
                 <img  id="link" src={i.path} />
               </div> 
))}
<button onClick={handleclick}>click here</button>

<h1>manali</h1>
  </>
      )
      }
}


export default Accs  ;