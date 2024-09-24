import React from 'react'
// import '../../../../Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../Pages/Footer'
const Glasswaremain = () => {
  return (
    <div>
      <div className="container mt-5 mb-5">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/glassweare/cakes"><img src="/Images/Glassware/Glassware.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/glassweare/crokery"><img src="/Images/Glassware/Glassware-1.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/glassweare/crystal"> <img src="/Images/Glassware/Glassware-2.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/glassweare/drinkingglass'><img src="/Images/Glassware/Glassware-3.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/glassweare/glassdecorative'><img src="/Images/Glassware/Glassware-4.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/glassweare/glasstumbler'> <img src="/Images/Glassware/Glassware-5.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/glassweare/glassvass'><img src="/Images/Glassware/Glassware-6.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/glassweare/glassstorage'><img src="/Images/Glassware/Glassware-7.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/glassweare/glasstableware'><img src="/Images/Glassware/Glassware-8.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/glassweare/pyrex'><img src="/Images/Glassware/Glassware-9.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/glassweare/kliner' ><img src="/Images/Glassware/Group 26.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
    {/* <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/flowers'><img src="./Images/Glassware/Glassware1.png" alt className="h-100 w-100 mt-md-0 mt-2" /></Link> 
      </div>
    </div> */}
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Glasswaremain