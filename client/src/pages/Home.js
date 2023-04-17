import React from 'react'
import { Link, } from "react-router-dom";
import 'react-bootstrap'
import "../css/Home.css"
import Footer from "../components/Footer.js"
import logo from "./img/icon.png"



function Home(){
    return(
        
        <>

  <div className="container ">

      <div className="col-10 col-lg-6">
        <img src={logo} className="image" alt="Bootstrap Themes"  />
      </div>
      <div className="col-lg-6 ">
        <h1 className="display-5 "> <strong class=" fw-bold" >StockWatchi </strong> </h1>
        <p className="lead"> Your number ONE resource to access your best stocks picks!</p>
      
        <div className="btn btn-header btn-primary">
   

          <Link to="/register" type="button" className="btn btn-header btn-lg mt-3">
            Register for StockWachi
          </Link>
        </div>
        
        <p className="login">Already have an account <strong>  <Link to="/login"> Login Here</Link> </strong> </p>
    
    </div>

  </div>

<Footer/>
 

        </>
    )
}
export default Home;