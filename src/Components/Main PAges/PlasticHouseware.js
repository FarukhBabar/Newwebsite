import React from 'react'

import { Link } from 'react-router-dom'
import Pageuparrow from '../Pageuparrow'
const PlasticHouseware = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/plastichousewear/foodcon"><img src="/Images/plastic/135.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/plastichousewear/kidsplastic"><img src="/Images/plastic/136.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/plastichousewear/melamine"> <img src="/Images/plastic/dordant.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/plastichousewear/kidsbathroom'><img src="/Images/plastic/137.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/plastichousewear/plasticcabnit'><img src="/Images/plastic/140.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/plastichousewear/storageboxes'><img src="/Images/plastic/139.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/plastichousewear/plastickitechenware'><img src="/Images/plastic/138.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
  </div>
 
</div>
<Pageuparrow/>
    </div>
  )
}

export default PlasticHouseware
