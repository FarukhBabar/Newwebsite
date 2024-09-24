// import React, { useState } from 'react';
// // import { useCart } from '../Components/CartContext';
// import { useNavigate } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// const Addtocart = () => {
//   const { cartItems, clearCart } =useState()
//   const [quantities, setQuantities] = useState({});
//   const navigate = useNavigate();

//   const handleClearCart = () => {
//     clearCart();
//   };

//   const updateQuantity = (itemId, newQuantity) => {
//     setQuantities(prevQuantities => ({
//       ...prevQuantities,
//       [itemId]: newQuantity
//     }));
//   };

//   const totalItems = cartItems.reduce((total, item) => total + (quantities[item.id] || item.qty), 0);

//   const totalAmount = cartItems.reduce((total, item) => total + ((quantities[item.id] || item.qty) * item.price), 0);

//   const incQty = (itemId) => {
//     updateQuantity(itemId, (quantities[itemId] || 1) + 1);
//   };

//   const decQty = (itemId) => {
//     if (quantities[itemId] && quantities[itemId] >= 2) {
//       updateQuantity(itemId, quantities[itemId] - 1);
//     }
//   };

//   const handleCheckout = () => {
//     navigate('/checkout', { state: { cartItems, quantities } });
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Cart Items</h2>
//       <div className="row">
//         {cartItems.map((item) => (
//           <div className="col-md-4 mb-4" key={item.id}>
//             <div className="card p-3 h-100">
//               <img
//                 src={`https://api.homeessentialshive.co.uk/${item.image.replace(/\\/g, '/')}`}
//                 alt={item.name}
//                 className="card-img-top"
//                 style={{ width: '100%', height: '150px', objectFit: 'cover' }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{item.name}</h5>
//                 <p className="card-text"><strong>Price:</strong> ${item.price}</p>
//                 <div className="d-flex align-items-center">
//                   <h5 className="me-3 mb-0">Quantity:</h5>
//                   <button onClick={() => decQty(item.id)} className="btn btn-dark btn-sm me-2">-</button>
//                   <h4 className="mb-0">{quantities[item.id] || item.qty}</h4>
//                   <button onClick={() => incQty(item.id)} className="btn btn-dark btn-sm ms-2">+</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="d-flex justify-content-between align-items-center mt-4">
//         <h3>Total Items: {totalItems}</h3>
//         <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
//       </div>
//       <div className="d-flex justify-content-end mt-3">
//         <button className="btn btn-danger me-2" onClick={handleClearCart}>Clear Cart</button>
//         <button className="btn btn-primary" onClick={handleCheckout}>Check Out</button>
//       </div>
//     </div>
//   );
// };

// export default Addtocart;

import React, { useState } from 'react';
import { useCart } from '../Components/CartContext';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './addtocart.css'; // Custom CSS for extra styling

const Addcart = () => {
  const { cartItems, clearCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  const handleClearCart = () => {
    clearCart();
  };

  const updateQuantity = (itemId, newQuantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: newQuantity
    }));
  };

  const totalItems = cartItems.reduce((total, item) => total + (quantities[item.id] || item.qty), 0);
  const totalAmount = cartItems.reduce((total, item) => total + ((quantities[item.id] || item.qty) * item.price), 0);

  const incQty = (itemId) => {
    updateQuantity(itemId, (quantities[itemId] || 1) + 1);
  };

  const decQty = (itemId) => {
    if (quantities[itemId] && quantities[itemId] >= 2) {
      updateQuantity(itemId, quantities[itemId] - 1);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems, quantities } });
  };

  return (
    <div className="container cart-page mt-5">
      <h2 className="mb-4 text-center">Your Cart</h2>
      <div className="row">
        {cartItems.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card p-3 h-100 cart-card">
              <img
                src={`https://api.homeessentialshive.co.uk/${item.image.replace(/\\/g, '/')}`}
                alt={item.name}
                className="card-img-top rounded"
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-3">{item.name}</h5>
                <p className="card-text price-text"><strong>Price:</strong> ${item.price}</p>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <button onClick={() => decQty(item.id)} className="btn btn-outline-dark btn-sm me-2">-</button>
                  <h5 className="mb-0">{quantities[item.id] || item.qty}</h5>
                  <button onClick={() => incQty(item.id)} className="btn btn-outline-dark btn-sm ms-2">+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary d-flex justify-content-between align-items-center mt-5 py-3">
        <h3>Total Items: {totalItems}</h3>
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <button className="btn btn-outline-danger btn-lg" onClick={handleClearCart}>Clear Cart</button>
        <button className="btn btn-primary btn-lg" onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Addcart;
