
import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import { HashRouter } from 'hash-router'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Checkout(props) {
  return (<h1>Hello {props.match.params.username}!</h1>)
  ;
}
  
  export default Checkout;