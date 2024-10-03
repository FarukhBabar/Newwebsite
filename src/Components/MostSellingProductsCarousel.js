import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './checkout.css'; // For custom styles

const MostSellingProductsCarousel = ({ products }) => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleProductClick = (product) => {
    const formattedName = product.name
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^a-zA-Z0-9-]/g, '') // Remove non-alphanumeric characters except hyphens
      .toLowerCase(); // Convert to lowercase

    // Navigate to the product page with the formatted name
    navigate(`/product/${formattedName}`);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Most Selling Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div className="carousel-item" key={product._id}>
            <div className="card product-card" onClick={() => handleProductClick(product)}>
              <img
                src={`https://api.homeessentialshive.co.uk/${product.image.replace(/\\/g, '/')}`}
                className="card-img-top product-image"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="product-name">{product.name}</h5>
                <div className="ratings">
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                </div>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MostSellingProductsCarousel;
