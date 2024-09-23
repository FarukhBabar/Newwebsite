import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../Pages/Footer'

const Hardwaremain = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/hardware/furniture"><img src="/Images/hardware/1.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/hardware/mats"><img src="/Images/hardware/2.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/hardware/metalbuck"> <img src="/Images/hardware/3.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
      </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Hardwaremain