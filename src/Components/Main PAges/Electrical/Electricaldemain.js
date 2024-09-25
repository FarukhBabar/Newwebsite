import React from 'react'
// import '../../../../Style.css'
import { Link } from 'react-router-dom'
import Footer from '../../../Pages/Footer'
const Electricaldemain = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/electricalde/electricalaccesso"><img src="/Images/Electrical/Electrical (1).jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/electricalde/ironele"><img src="/Images/Electrical/Electrical (2).jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/electricalde/clock"> <img src="/Images/Electrical/Electrical.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/electricalde/digital'><img src="/Images/Electrical/Electrical-1.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/electricalde/dorbells'><img src="/Images/Electrical/Electrical-7.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/electricalde/cameras'> <img src="/Images/Electrical/Electrical-3.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/electricalde/earephone'><img src="/Images/Electrical/Electrical-4.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/electricalde/hairbody'><img src="/Images/Electrical/Electrical-5.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>
      </div>
    </div>
  </div>
 
  
</div>
<Footer/>
    </div>
  )
}

export default Electricaldemain
