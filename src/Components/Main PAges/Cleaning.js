import React from 'react'
// import '../../../../Style.css'
import { Link } from 'react-router-dom'
import Pageuparrow from '../Pageuparrow'

// import Footer from '../../../../Footer'
const  Cleaning = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/cleaning/sponge"><img src="/Images/cleaning/133.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/cleaning/mops"><img src="/Images/cleaning/134.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/cleaning/gloves"> <img src="/Images/cleaning/132.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/cleaning/duster'><img src="/Images/cleaning/21.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/cleaning/brushware'><img src="/Images/cleaning/131.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
      </div>
    </div>
  </div>
</div>
<Pageuparrow/>
    </div>
  )
}

export default  Cleaning
