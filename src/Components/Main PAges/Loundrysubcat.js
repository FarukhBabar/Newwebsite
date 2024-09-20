
import React from 'react'
// import Footer from '../../../../Footer'
import { Link } from 'react-router-dom'
import Pageuparrow from '../Pageuparrow';
// import "../../../../Style.css"
const Loundrysubcat = () => {
  return (
    <div><div>
  <div className="department">
    {/* <p className="departments">DEPARTMENTS/Loundry</p> */}
  </div>
  <div className="container">
  <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/laundry/airers"><img src="/Images/laundry storage and luggage/1.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/loundry/ironingboards"><img src="/Images/laundry storage and luggage/2.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link> 
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/loundry/laundryaccessories"> <img src="/Images/laundry storage and luggage/3.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/loundry/bags"><img src="/Images/laundry storage and luggage/4.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/loundry/baskets"><img src="/Images/laundry storage and luggage/5.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link>   
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/loundry/luggageaccessories"><img src="/Images/laundry storage and luggage/6.jpg" alt className="h-100 w-100 mt-md-0 mt-2 poundsideimage" /></Link> 
        </div>
      </div>
      
    </div>
  </div>
</div>
<Pageuparrow/>
</div>
  )
}

export default Loundrysubcat;