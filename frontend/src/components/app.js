import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import axios from 'axios';

class App extends Component{
  state = {
    courselist:[]
  }

  componentDidMount() {
    axios.get("http://localhost:3001/")
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
        <h1>Hello</h1>
        <h1>Issue Solved</h1>
  </>
      )
      }
}


export default App  