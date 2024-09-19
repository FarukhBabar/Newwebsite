import React from 'react'
import '../../../../Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../../Footer'
const Plastichousewearmain = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/plastichousewear/foodcon"><img src="/Images/child catagory/plastic/135.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/plastichousewear/kidsplastic"><img src="/Images/child catagory/plastic/136.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/plastichousewear/melamine"> <img src="/Images/child catagory/plastic/dordant.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/plastichousewear/kidsbathroom'><img src="/Images/child catagory/plastic/137.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/plastichousewear/plasticcabnit'><img src="/Images/child catagory/plastic/140.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/plastichousewear/plastickitechenware'><img src="/Images/child catagory/plastic/139.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/plastichousewear/storageboxes'><img src="/Images/child catagory/plastic/138.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>
      </div>
    </div>
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Plastichousewearmain
