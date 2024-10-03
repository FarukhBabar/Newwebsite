import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { useCart } from './CartContext'; // Adjust the import path as needed
// import '../Pages/Adminside/admin.css'; // Adjust the import path as needed
// import Footer from '../Footer'; // Adjust the import path as needed
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingleProductPage = () => {
  const { name } = useParams(); // Extract product name from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const formattedName = name
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '');
          
        const response = await axios.get(`https://api.homeessentialshive.co.uk/api/products/most-selling/${formattedName}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [name]);

  if (loading) return <Spinner animation="border" variant="primary" className="d-block mx-auto mt-5" />;

  if (!product) return <p className="text-center mt-5">Product not found</p>;

  const incQty = () => {
    setQty(qty + 1);
  };

  const decQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const goBack = () => {
    navigate("/Supersunday");
  };

   const handleAddToCart = () => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      if (userData.role === 'user') {
        addToCart({ ...product, qty });
        setQty(1);

        // Show success notification
        toast.success(`${product.name} has been added to the cart`, {
          position: "top-right",
          autoClose: 5000, // 20 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        alert("Invalid user role");
      }
    } else {
      alert("You need to login first");
      navigate('/login');
    }
  };

  const handleBuyNow = () => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      if (userData.role === 'user') {
        navigate('/addtocart');
      } else {
        alert("Invalid user role");
      }
    } else {
      alert("You need to login first");
      navigate('/log');
    }
  };

  return (
    <>
       <div className="singlepage-container">
      {/* ToastContainer to show notifications */}
      <ToastContainer />

      <div className="singlepage-card">
        <div onClick={goBack} className="back-btn">Go to Product Page</div>
        <div className="product-content">
          <div className="product-imagesin">
            {product.image && (
              <img
                src={`https://api.homeessentialshive.co.uk/${product.image.replace(/\\/g, '/')}`}
                alt={product.name}
                className='product-imgsin'
              />
            )}
          </div>
          <div className="product-details">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">£{product.price}</p>
            <div className="quantity-selector">
              <h5>Quantity:</h5>
              <button onClick={decQty} className="qty-btn decrement">-</button>
              <span className="qty-value">{qty}</span>
              <button onClick={incQty} className="qty-btn decrement">+</button>
            </div>
            <p className="total-price">Total Amount:<b> £{product.price * qty} </b></p>
            <div className="action-buttons">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add To Cart
              </button>
              <button className="buy-now-btn" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="product-description-container">
        <div className="description-card">
          <h3 className="description-title">Product Description</h3>
          <p
            className="description-text"
            dangerouslySetInnerHTML={{ __html: product.title }}
          ></p>
        </div>
      </div>
    </div>

      {/* <Footer /> */}
    </>
  );
};

export default SingleProductPage;

