import React from 'react'
import { Link } from 'react-router-dom'
import Pageuparrow from '../../Pageuparrow'

const Stationerymain = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/stationery/artcraft"><img src="/Images/stationary/1.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/stationery/books"><img src="/Images/stationary/2.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/stationery/diaries"> <img src="/Images/stationary/3.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/stationery/kids'><img src="/Images/stationary/4.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/stationery/mailing'><img src="/Images/stationary/5.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/stationery/officehome'><img src="/Images/stationary/6.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
  </div>
 
</div>
<Pageuparrow/>
    </div>
  )
}

export default Stationerymain
