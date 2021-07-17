import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import axios from 'axios';
import Home from './home.js'
import Sell from './sell.js'
import Accs from './accs.js'

class App extends Component{
  state = {
    courselist:[]
  }

  componentDidMount() {
    axios.get("http://localhost:3001/products")
    .then((response)=>{
      console.log(response.data)
      this.setState({
        courselist: response.data
      })
    })
    .catch((error)=>
      console.log(error)
    
    )
    console.log("fetching data")
  }

    render(){
      return(
        <>
        <BrowserRouter>
   <Route path="/" component={() => <Home />} exact />
   <Route path="/sell" component={() => <Sell courselist={this.state.courselist}/>} exact />
   <Route path="/accs" component={() => <Accs />} exact />
   </BrowserRouter>
  </>
      )
      }
}


export default App  