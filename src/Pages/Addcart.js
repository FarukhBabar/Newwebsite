import React, { useState } from 'react';
import { useCart } from '../Components/CartContext';
import { useNavigate } from 'react-router-dom';
import './addtocart.css'; // Custom CSS for extra styling

const Addcart = () => {
  const { cartItems, clearCart, removeItemFromCart } = useCart();
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

  // Handle deleting a specific item from cart
  const handleDeleteItem = (itemId) => {
    // console.log('Deleting item with ID:', itemId); // Debugging
    removeItemFromCart(itemId);
  };

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems, quantities } });
  };

  return (
    <div className="container cart-page mt-5">
      <h2 className="mb-4 text-center">Your Cart</h2>
      <table className="table cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              {console.log('Item in cart:', item)} {/* Debugging */}
              <td className="product-info">
                <img
                  src={`https://api.homeessentialshive.co.uk/${item.image.replace(/\\/g, '/')}`}
                  alt={item.name}
                  className="product-image"
                />
                <div className="product-details">
                  <h5 className="product-name">{item.name}</h5>
                  {/* <p className="product-size">Size: {item.size}</p> */}
                  <div className="product-actions">
                    <button className="btn-edit"><i className="fas fa-edit"></i></button>
                    <button className="btn-delete"  onClick={() => handleDeleteItem(item.id)}><i className="fas fa-trash"></i></button>
                  </div>
                </div>
              </td>
              <td>£.{item.price}</td>
              <td>
                <div className="quantity-controls">
                  <button onClick={() => decQty(item.id)} className="btn-quantity qtybut">-</button>
                  <span>{quantities[item.id] || item.qty}</span>
                  <button onClick={() => incQty(item.id)} className="btn-quantity qtybut">+</button>
                </div>
              </td>
              <td>£.{((quantities[item.id] || item.qty) * item.price).toFixed(2)}</td>
             
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-summary mt-5">
        <div className="summary-details">
          <h3>Subtotal: £.{totalAmount.toFixed(2)}</h3>
        </div>
        <button className="btn btn-primary btn-lg" onClick={handleCheckout}>Checkout</button>
        <button className="btn btn-danger btn-lg" onClick={handleClearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Addcart;
