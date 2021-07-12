import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component{
    state={
         courselist:[],
         responseOne:[],
         responseTwo:[],
       responesThree:[]
      }
      componentDidMount() {
        const one=("http://localhost:3001/")
        const two=("http://localhost:3001/stores")
        const three=("http://localhost:3001/bests")


        const requestOne = axios.get(one);
     const requestTwo = axios.get(two);
      const requestThree = axios.get(three);

      axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
        this.setState({ 
          responseOne : responses[0].data,
          responseTwo : responses[1].data,
         responesThree :   responses[2].data})
        
        // use/access the results 
      })).catch(errors => {
        console.log(errors)
      })
        
         console.log("fetching data")
     
       }
       render(){
        return (
          <>
           {this.state.responseTwo.map((i)=>(
               <div key={i.id}>
                <h1>{i.item}</h1>
               </div>
           ))}

{this.state.responseOne.map((i)=>(
               <div key={i.id}>
                <h1>{i.item}</h1>
                <img src={i.path}/>
               </div>
           ))}
           </>
        )}
}
export default Home