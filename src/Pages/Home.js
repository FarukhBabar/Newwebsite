import React, { useState, useEffect } from 'react';
import Carousel from '../Components/Carousel';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa'; // Import Font Awesome for the arrow icon
import Reviewsection from '../Components/Reviewsection';
import Footer from './Footer';
import MostSellingProductsCarousel from '../Components/MostSellingProductsCarousel';
import axios from 'axios';
const Home = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  // Function to handle scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
         const response = await axios.get("https://api.homeessentialshive.co.uk/api/products/most-selling");
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching most selling products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Event listener to show/hide scroll button
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const cardData = [
  {
    title: "Office Desks Sale",
    description: "Up to 60% off",
    imageUrl: "https://img-us.aosomcdn.com/440/100_cms/2024/08/26/t3p85c1918e72210e.jpg",
  },
  {
    title: "Kitchen Goods Sale",
    description: "Up to 70% off",
    imageUrl: "https://img-us.aosomcdn.com/440/100_cms/2024/05/06/skN85918f4bc3fa6b.jpg",
  },
  {
    title: "Cat Houses Sale",
    description: "Up to 60% off",
    imageUrl: "https://img-us.aosomcdn.com/440/100_cms/2024/04/11/HbP1d018ecc5e87b1.jpg",
  },
  {
    title: "Dog Housess Sale",
    description: "Up to 60% off",
    imageUrl: "https://img-us.aosomcdn.com/440/100_cms/2024/08/26/jYA4d41918e73c366.jpg",
  },
];

  return (
    <div>
      <Carousel />
      <div className='container mt-5'>
        <div className='row'>
          {['4iX61f1918df44b09', 'W7Bdf61918df50475', 'hsa2451918df8801f', 'pt77a01918df9b1f8', 'faGf1f1918df76712', 'WNj8831918dfa53b0'].map((imgName, index) => (
            <div className='col-lg-2 col-md-2 col-6 text-center mb-4' key={index}>
              <img
                src={`https://img-us.aosomcdn.com/440/100_cms/2024/08/26/${imgName}.png`}
                alt='Greenhouse'
                className='homeimg img-fluid rounded shadow-sm'
                style={{ transition: 'transform 0.3s ease' }}
              />
              <Link to='' className='d-block mt-2 text-dark fw-bold text-decoration-none hover-link'>
                Green House
              </Link>
            </div>
          ))}
        </div>
         <div className='row'>
          {['4iX61f1918df44b09', 'W7Bdf61918df50475', 'hsa2451918df8801f', 'pt77a01918df9b1f8', 'faGf1f1918df76712', 'WNj8831918dfa53b0'].map((imgName, index) => (
            <div className='col-lg-2 col-md-2 col-6 text-center mb-4' key={index}>
              <img
                src={`https://img-us.aosomcdn.com/440/100_cms/2024/08/26/${imgName}.png`}
                alt='Greenhouse'
                className='homeimg img-fluid rounded shadow-sm'
                style={{ transition: 'transform 0.3s ease' }}
              />
              <Link to='' className='d-block mt-2 text-dark fw-bold text-decoration-none hover-link'>
                Green House
              </Link>
            </div>
          ))}
        </div>
        <div className='row '>
            
            <div className='col-lg-4 col-md-4 col-6'>
            <Link to='/category/batteries'><img src='/Images/Main phone and batteries/1.png' className='w-100 shopbyimage '  alt=''/></Link>    
            </div>
             <div className='col-lg-4 col-md-4 col-6'>
      <Link to='/category/phoneaccessories'><img src='/Images/Main phone and batteries/Untitled-1.png'  className='w-100 shopbyimage' alt=''/></Link> 
            </div>
             <div className='col-lg-4 col-md-4 col-6 col-sm-8  mt-sm-5'>
                <img src='https://img-us.aosomcdn.com/thumbnail/485/n0/100_club/2024/08/19/tAqb1c191694d8947.jpg.webp'  className='w-100 shopbyimage' alt=''/>
            </div>
        </div>
        
         <div className='row mt-4 '>
        <div className='col-lg-6 col-md-12 col-12 '>
            <div className='product-card'>
            <img src='https://img-us.aosomcdn.com/440/100_cms/2024/08/26/j2V1cd1918dff310b.jpg' alt=''  className="card-img-top product-image"/></div>
        </div>
        <div className='col-lg-6 col-md-12 col-12'>
            <div className='product-card'>
            <img src='https://img-us.aosomcdn.com/440/100_cms/2024/08/26/N2h3fc1918dffd024.jpg'  className="card-img-top product-image" alt='' /></div>
        </div>
        </div>
          <div className="row">
      {cardData.map((card, index) => (
        <div key={index} className="col-lg-3 col-md-6 col-12 mb-4">
          <div className="card-container">
            <div className="card-image">
              <img src={card.imageUrl} alt={card.title} />
            </div>
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <button className="card-button">See more</button>
            </div>
          </div>
        </div>
      ))}
    </div>
       <MostSellingProductsCarousel products={products} />

    <div className='row'>
        <Reviewsection/>
    </div>
      </div>

      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className='scroll-top-button'
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: 'linear-gradient(135deg, #007bff, #00bfff)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            padding: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            zIndex: '1000',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <FaArrowUp size={20} />
        </button>
      )}
      {/* <img src='/Images/Main phone and batteries/1.png' alt=''/> */}
        {/* <div>
              <hr
              style={{
                width: '1px',
                height: '100%', // Adjust the height as needed
                backgroundColor: 'black', // Adjust the color as needed
                border: 'none',
                transform: 'rotate(180deg)',
                margin: '0 auto', // Centers the line horizontally
              }} /></div>
              <div className=' kitechseclist'>
                <li><u><a href="#" className="dropdown-item mt-2 ">Harris Decorating</a></u></li>
             <li><u><a href="#" className="dropdown-item  ">Hilka</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Humbrol</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">JB Weld</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Kilrock</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Ladders</a></u></li>
             <li><u><a href="#" className="dropdown-item  ">Loctite/Unibond</a></u></li> 
            <li><u><a href="#" className="dropdown-item  ">Lynwood/Express</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Misc</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Oxford Products</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Plasplugs</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Prima Car Products</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Rolson Tools</a></u></li>
            
            </div>
             <div>
              <hr
              style={{
                width: '1px',
                height: '100%', // Adjust the height as needed
                backgroundColor: 'black', // Adjust the color as needed
                border: 'none',
                transform: 'rotate(180deg)',
                margin: '0 auto', // Centers the line horizontally
              }} /></div>
              <div className=' kitechseclist'>
                <li><u><a href="#" className="dropdown-item mt-2 ">Ronseal</a></u></li>
             <li><u><a href="#" className="dropdown-item  ">Rustians Ltd</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Secureit</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Securplumb</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Shortage</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Soudal</a></u></li>
             <li><u><a href="#" className="dropdown-item  ">Starpack</a></u></li> 
            <li><u><a href="#" className="dropdown-item  ">Sterling Locks</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Tableau</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Tri Cyccle</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Ultratape</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Vacuum Bags</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Velcro/Araldite</a></u></li>
            
            </div>
             <div>
              <hr
              style={{
                width: '1px',
                height: '100%', // Adjust the height as needed
                backgroundColor: 'black', // Adjust the color as needed
                border: 'none',
                transform: 'rotate(180deg)',
                margin: '0 auto', // Centers the line horizontally
              }} /></div>
              <div className=' kitechseclist'>
                <li><u><a href="#" className="dropdown-item mt-2 ">Vmf Paints</a></u></li>
             <li><u><a href="#" className="dropdown-item  ">WD40 Co.Ltd</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Werner</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Yale Lock</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Unicom</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Akzonobel</a></u></li>
             <li><u><a href="#" className="dropdown-item  ">Auxs Decor</a></u></li> 
            <li><u><a href="#" className="dropdown-item  ">Amtech Tools</a></u></li>
            <li><u><a href="#" className="dropdown-item  ">Antiquax</a></u></li>       
            </div> */}
            <Footer/>
    </div>
  );
};

export default Home;
