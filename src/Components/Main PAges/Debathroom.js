
import React from 'react'
// import Footer from '../../../Footer'
import { Link } from 'react-router-dom'
// import "../../../Style.css"
const Debathroom = () => {
  return (
    <div><div>
  <div className="department">
    <p className="departments">DEPARTMENTS BATHROOM</p>
  </div>
  <div className="container">
  <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/bathroom/bathroomscale"><img src="/Images/bathroom/1.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/bathroom/bathroommirror"><img src="/Images/bathroom/4.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link> 
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/bathroom/shower"> <img src="/Images/bathroom/5.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/bathroom/bathmats"><img src="/Images/bathroom/2.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/bathroom/bathroomaccessories"><img src="/Images/bathroom/3.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/bathroom/showerhead"><img src="/Images/bathroom/6.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link> 
        </div>
      </div>
      
    </div>
  </div>
</div>
</div>
  )
}

export default Debathroom