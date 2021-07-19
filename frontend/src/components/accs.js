  import React, { Component } from 'react';
  import {BrowserRouter , Route} from 'react-router-dom'
  import axios from 'axios';
  class Accs extends Component{
    state = {
      query:"",
      courselist:[]
    }
    handleinputchange=(name)=>{
      this.setState({query:name},()=>{
        if(this.state.query){
          this.getData();
        }
      })
      }
      getData = () => {
        const params = {
              item:this.state.query.data
        }
        console.log("PARAMS",params);
        axios.get("http://localhost:3001/products",{params
        }) 
        .then((response)=>{
            console.log(this.state.courselist);
            console.log(response.data)
            this.setState({
                courselist: response.data
            })
        })
        .catch((error)=>
            console.log("error",error)
         )
    }
     
  componentDidMount(){
    this.getData();
  };
  render(){
        return(
          <>
          {this.state.courselist.map((i)=>(
                <div key={i.id}> 
                <button>mana</button>
                  <button className="btn" onClick={this.handleinputchange(i.item)}>{i.item  }</button>
                </div> 
  ))} 
      


  <h1>manali</h1>
    </>
        )
        }
  }
  export default Accs  ;