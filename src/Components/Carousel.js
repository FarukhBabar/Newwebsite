import React from 'react';
import './assets/Style.css';

const Carousel = () => {
  return (
    <div className='col-lg-11 col-md-11 mt-4 carousel mx-auto'>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src="https://img-us.aosomcdn.com/440/100_cms/2024/08/29/mXaa171919d1b2ece.jpg" className="d-block w-100 imagecarou " alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="https://img-us.aosomcdn.com/440/100_cms/2024/08/13/dRNa171914ac12e2c.jpg" className="d-block w-100 imagecarou" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://img-us.aosomcdn.com/440/100_cms/2024/08/15/1Daa1719154da1696.jpg" className="d-block w-100 imagecarou" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
