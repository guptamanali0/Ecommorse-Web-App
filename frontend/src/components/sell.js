import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import axios from 'axios';
import {Link,NavLink } from 'react-router-dom';
import { HashRouter } from 'hash-router'
import './../styles/index.css'
import image12 from './../images/ishop.png'
import image2 from './../images/i2.png'
import image13 from './../images/i13.png'
import image5 from './../images/i5.png'
import image6 from './../images/i6.png'
import image7 from './../images/i7.jpg'
import ReactPaginate from 'react-paginate';
let postData;

class Sell extends Component{
  state={
    menu:[],
    product:[],
    product1:[],
    offset: 0,
    data: [],
    perPage: 5,
    currentPage: 0,
    pageCount:5,
   postData:[],
   readme:[],
   aboutProps:[]
  };
 
  // myFunctionA = () => {

  //   axios.get("http://localhost:3001/products")
    
  //   .then((response)=>{
  //     var slice = response.filter((item) => item.category === "Apple Car").slice(this.state.offset, this.state.offset + this.state.perPage)

  //     postData = this.slice.map(i => <React.Fragment>
  //      <div id="eight">
  //           <button id="eleven" className="btn active">Hot</button>
  //            <div key={i.id}>
  //              <img src={i.path} id="nine" />
  //             <p id="ten">{i.item}</p>
  //             </div>
  //            </div>
  // </React.Fragment>) 
  //     this.setState({
  //      product: response.data,
  //      product:this.state.product1.filter((item) => item.color === "Cases & Films"),
  //      postData:this.state.product1.filter((item) => item.color === "Cases & Films")
  //       })
  //  })
  //   .catch((error)=>
  //     console.log(error)
  //   )
  //   console.log("fetching data")
  // }

  myFunctionA = () => {
    this.setState((state) => (
        {product:state.product1.filter((item) => item.category === "Apple Car")}))
        console.log(this.state.product)
    console.log("yes")
  }
  
myFunctionB = () => {
  this.setState((state) => (
      {product:state.product1.filter((item) => item.category === "Airport & Wireless")}))
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

// myFunctionI = (sortValue) => {
//   this.setState((prevState) => (
//     { products: this.state.product1.sortBy(prevState.products, ['sortValue']) },
//   console.log("yes")))
// }


// sortFunction(sortValue, event) {
//   alert(sortValue);
//   this.setState({sortValue: sortValue});
//   this.myFunctionI(sortValue);
// }


receivedData() {
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
    var slice = responseTwo.slice(this.state.offset, this.state.offset + this.state.perPage)

    console.log(responseOne, responseTwo)

    this.setState({
      pageCount: Math.ceil(responseTwo.length / this.state.perPage),
       menu:responseOne,
       product1:responseTwo,
       product:responseTwo,
       readme:responseThree,
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
                 {/* <button onClick={this.myFunctionD} id="btn">Cases & Films</button> */}
               </div> 
))}
 </div>
 <div className="toptwo">
<NavLink activeClassName="active" to="/" id="linkone">Store</NavLink>
<NavLink activeClassName="active" to="#" id="linkone"> / </NavLink>
<NavLink activeClassName="active" to="/" id="linkone">Accessories</NavLink>
</div>


<div className="topsort">
<div id="access">ACCESSORIES</div>
<div className="self">
  <NavLink activeStyle={{color:"red"}} to="#"><button onClick={this.myFunctionA} id="btn"><span id="anchor">Apple Car</span></button></NavLink>
<button onClick={this.myFunctionA} id="btn">25</button>
</div>
<div className="self">
<button onClick={this.myFunctionB} id="btn">Airport & Wireless</button>
<button onClick={this.myFunctionB} id="btn">25</button>
</div>

<div className="self">
<button onClick={this.myFunctionC} id="btn">Cables & Docks</button>
<button onClick={this.myFunctionC} id="btn">25</button>
</div>

<div className="self">
<button onClick={this.myFunctionD} id="btn">Cases & Films</button>
<button onClick={this.myFunctionD} id="btn">25</button>
</div>

<div className="self">
<button onClick={this.myFunctionE}id="btn">Charging Devices</button>
<button onClick={this.myFunctionE} id="btn">25</button>
</div>

<div className="self">
<button onClick={this.myFunctionF} id="btn">Connected Devices</button>
<button onClick={this.myFunctionF} id="btn">25</button>
</div>

<div className="self">
<button onClick={this.myFunctionG} id="btn">Headphones</button>
<button onClick={this.myFunctionG} id="btn">25</button>
</div>
</div>
<img src={image13} className="image13"/>  


<div className="topsort2">
<div id="access">PRICES</div>
<div className="self"></div>
</div>

<div className="topsort3">
<div className="self">



</div>
</div>

<div className="topsort7">
{/* <div className="self"> */}
<div id="access">COLOR</div>
<div className="self1">
  <button onClick={this.myFunctionA} id="btna"></button>
  <button onClick={this.myFunctionB} id="btnb"></button>
  <button onClick={this.myFunctionC} id="btnc"></button>
  <button onClick={this.myFunctionD} id="btnd"></button>
  <button onClick={this.myFunctionE} id="btne"></button>
  <button onClick={this.myFunctionF} id="btne"></button>
{/* </div> */}


</div>
</div>

<div className="topsort5">

<div id="access">BRANDS</div>
{/* <div className="self"> */}
<div className="inside">
  <div className="self">
  <button onClick={this.myFunctionA} id="btn">Apple</button>
  <button onClick={this.myFunctionA} id="btn">3</button>
</div>

<div className="self">
  <button onClick={this.myFunctionB} id="btn">LG</button>
  <button onClick={this.myFunctionB} id="btn">3</button>
</div>

<div className="self">
  <button onClick={this.myFunctionC} id="btn">Dell</button>
  <button onClick={this.myFunctionC} id="btn">3</button>
</div>

<div className="self">
  <button onClick={this.myFunctionD} id="btn">Samsung</button>
  <button onClick={this.myFunctionD} id="btn">3</button>
</div>
</div>
{/* <div className="self">
<button onClick={this.myFunctionB} id="btn">Airport & Wireless</button>
<button onClick={this.myFunctionB} id="btn">25</button>
</div>

<div className="self">
<button onClick={this.myFunctionB} id="btn">Airport & Wireless</button>
<button onClick={this.myFunctionB} id="btn">25</button>
</div>

<div className="self">
<button onClick={this.myFunctionB} id="btn">Airport & Wireless</button>
<button onClick={this.myFunctionB} id="btn">25</button>
</div> */}
</div>
{/* </div> */}


<div className="topsort6">
<div className="self">
<div id="access">MORE</div>

{/* <div className="self">
<button onClick={this.myFunctionB} id="btn">Airport & Wireless</button>
<button onClick={this.myFunctionB} id="btn">25</button>
</div> */}
</div>
</div>



<div className="whole">
  {this.state.product.map((i)=>(
    <div id="eight">
       <button id="eleven" className="btn active">Hot</button>
<div key={i.id}>
    
       <Link to={
         {
          //  pathname:"/practicse/manaligupta"
           pathname:'/practicse/'+i._id,
          //  search:'?'+i.id,
            //  hash:'#hash',

         }

}
><img src={i.path} id="nine" /></Link>
      <p id="ten">{i.item}</p>

      

             
               {/* <p id="ten">{i.category}</p> */}
               </div>
               <div className="six">
                <div id="thirteen">${i.price}</div>
    <del id="fourteen">200</del>
  </div>

</div> 
))} 



</div>
{/* <h1 className="shift">Manali</h1> */}
<div className="topsort4">
<div className="shifti">
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

            </div>
            <div>
   <img src={image5} id="imagea" />
</div> 
<Link to="/sell">
<div className="twittera">
<img src={image6}/>
<img src={image7}  id="twit2"/>
</div>
</Link>

            <div className="lasti">
     <div>Information</div>
     <div>Service</div>
     <div>Extras</div>
     <div>My Account</div>
     <div>Useful Links</div>
     <div>Our Offers</div>
</div> 

             <div className="lastonee">
{this.state.readme.map((i)=>(
               <div key={i.id}> 
               <button className="btn">{i.item}</button>
            {/* <button onClick={this.handleclick()}>{this.state.flag}?<Store />:null</button>  */}
               </div> 
              
))}
 </div> 


 {/* }>check</Link> */}

          
  </>
      )
      }
}
export default Sell
