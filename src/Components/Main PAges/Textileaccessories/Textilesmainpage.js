import React from 'react'
// import '../../../../Style.css'
import { Link } from 'react-router-dom'
import Pageuparrow from '../../Pageuparrow'

// import Footer from '../../../../Footer'
const Textilesmainpage = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/textilesaccessories/aprons"><img src="/Images/Textile/1.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/textilesaccessories/bedding"><img src="/Images/Textile/2.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/textilesaccessories/clothing"> <img src="/Images/Textile/3.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/textilesaccessories/curtains'><img src="/Images/Textile/5.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/textilesaccessories/tablecover'><img src="/Images/Textile/4.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/textilesaccessories/teatowel'><img src="/Images/Textile/6.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/textilesaccessories/towelaccessories'><img src="/Images/Textile/7.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
  </div>
 
</div>
<Pageuparrow/>
    </div>
  )
}

export default Textilesmainpage
