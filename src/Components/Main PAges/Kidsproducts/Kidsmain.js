import React from 'react'
// import '../../../../Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../Pages/Footer'
const Kidsmain = () => {
  return (
    <div>
      <div className="container mt-5 mb-5">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/kidsproduct/kidsproducts"><img src="/Images/kids product/1.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/kidsproduct/kidssto"><img src="/Images/kids product/3.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/kidsproduct/character"><img src="/Images/kids product/2.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link> 
      </div>
    </div>
   
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Kidsmain
