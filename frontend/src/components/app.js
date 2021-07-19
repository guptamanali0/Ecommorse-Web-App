import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import axios from 'axios';
import Home from './home.js'
import Sell from './sell.js'
import Accs from './accs.js'
import Checkout from './checkout.js'
import { useParams } from "react-router-dom";
import {useLocation} from "react-router-dom";
import Practicse from './practicse.js';

class App extends Component{
  state = {
    courselist:[]
  }

    

    render(){
      return(
        <>
        <BrowserRouter>
   <Route path="/" component={() => <Home />} exact />
   <Route path="/sell" component={() => <Sell courselist={this.state.courselist}/>} exact />
   <Route path="/practicse/:username" component={Practicse} />
   </BrowserRouter>
  </>
      )
      }
}




export default App  