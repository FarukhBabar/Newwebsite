
// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const clearCart = () => {
//     setCartItems([]); // Set cartItems to an empty array to clear the cart
//   };
//   const removeItemFromCart = (itemId) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
//   };
//   return (
//     <CartContext.Provider value={{ cartItems, addToCart,removeItemFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart, ensuring each item has a unique id
  const addToCart = (item) => {
    const itemWithId = { ...item, id: item.id || Math.random().toString(36).substr(2, 9) }; // Generate id if not present
    console.log('Item being added to cart:', itemWithId); // Debugging
    setCartItems([...cartItems, itemWithId]);
  };

  // Clear all items from cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Remove specific item from cart
  const removeItemFromCart = (itemId) => {
    // console.log('Removing item with ID:', itemId); // Debugging
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
