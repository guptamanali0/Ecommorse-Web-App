import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import axios from 'axios';
import {Link,NavLink } from 'react-router-dom';
import './../styles/index.css'
import ReactPaginate from 'react-paginate';
import image12 from './../images/ishop.png'
import image2 from './../images/i2.png'
import image13 from './../images/i13.png'
import Pagination from '@material-ui/lab/Pagination';

class Accs extends Component{
  state={
    menu:[],
    product:[],
    product1:[],
    offset: 0,
    data: [],
    perPage: 25,
    currentPage: 0,
    pageCount:5
  
  };

  myFunctionA = () => {
    this.setState((state) => (
      {product:state.product1.filter((item) => item.category === "Apple car")}
      ))
    console.log("yes")
}

myFunctionB = () => {
  this.setState((state) => (
      {product:state.product1.filter((item) => item.category === "Wireless & Air ports")}))
  console.log("yes")
}

myFunctionC = () => {
  this.setState((state) => (
      {product:state.product1.filter((item) => item.category === "Cables & Docks")}))
  console.log("yes")
}

myFunctionD = () => {
  this.setState((state) => (
      {product:state.product1.filter((item) => item.category === "Cases & Films")}))
  console.log("yes")
}

myFunctionE = () => {
  this.setState((state) => (
      {product:state.product1.filter((item) => item.category === "Charging Devices")}))
  console.log("yes")
}

myFunctionF = () => {
  this.setState((state) => (
      {product:state.product1.filter((item) => item.category === "Connected Devices")}))
  console.log("yes")
}

myFunctionG = () => {
  this.setState((state) => (
      {product:state.product1.filter((item) => item.category === "Headphones")}))
  console.log("yes")
}

receivedData() {
  let one ="http://localhost:3001/home";
    let two="http://localhost:3001/products";

const requestOne = axios.get(one);
const requestTwo = axios.get(two);

axios.all([requestOne, requestTwo])
.then(
axios.spread((...responses) => {
    const responseOne = responses[0].data;
    const responseTwo = responses[1].data;
    const slice = responseTwo.slice(this.state.offset, this.state.offset + this.state.perPage)
    const postData = slice.map(i => <React.Fragment>
       <div id="eight">
            <button id="eleven" className="btn active">Hot</button>
             <div key={i.id}>
               <img src={i.path} id="nine" />
              <p id="ten">{i.item}</p>
              </div>
             </div>
  </React.Fragment>) 

    console.log(responseOne, responseTwo)

    this.setState({
      pageCount: Math.ceil(responseTwo.length / this.state.perPage),
       menu:responseOne,
       product:responseTwo,
       product1:responseTwo,
       postData
      })
  })
)
     .catch((error)=>
       console.log(error+"Wrong")    
     
     )
     console.log("fetching data")
 
   }
   
   handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          this.receivedData()
      });

  };
  componentDidMount() {
      this.receivedData()
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
<div className="topsort">
  <div id="access">ACCESSORIES</div>
  <div className="self">
<button onClick={this.myFunctionA} id="btn">Apple Car </button>
<button onClick={this.myFunctionA} id="btn">25</button>
</div>
<div className="self">
<button onClick={this.myFunctionB} id="btn">Airport & Wireless</button>
<button onClick={this.myFunctionA} id="btn">25</button>
</div>

<div className="self">
<button onClick={this.myFunctionA} id="btn">Cables & Docks</button>
<button onClick={this.myFunctionA} id="btn">25</button>
</div>

<div className="self">
<button onClick={this.myFunctionB} id="btn">Cases & Films</button>
<button onClick={this.myFunctionA} id="btn">25</button>
</div>

<div className="self">
<button onClick={this.myFunctionA}id="btn">Charging Devices</button>
<button onClick={this.myFunctionA} id="btn">25</button>
</div>

<div className="self">
<button onClick={this.myFunctionB} id="btn">Connected Devices</button>
<button onClick={this.myFunctionA} id="btn">25</button>
</div>

<div className="self">
<button onClick={this.myFunctionA} id="btn">Headphones</button>
<button onClick={this.myFunctionA} id="btn">25</button>
</div>
</div>
<img src={image13} className="image13"/>  
 






<div>
          {this.state.postData}
              <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
          </div>
  </>
      )
      }
}
export default Accs