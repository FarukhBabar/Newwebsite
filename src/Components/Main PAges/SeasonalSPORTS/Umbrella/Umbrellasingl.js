
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useCart } from '../../../CartContext';
// import '../../../admin.css';
// import Footer from '../../../../../Footer';

// const Umbrellasingel = () => {
//   const [qty, setQty] = useState(1); // Initialize with 1 for a default value
//   const [product, setProduct] = useState({});
//   const { addToCart } = useCart();
//   let params = useParams();
//   const navigate = useNavigate();

//   const GetSingleData = async () => {
//     try {
//       const response = await fetch(`https://api.homeessentialshive.co.uk/api/v1/data/umbrella2single/${params.id}`);
//       const result = await response.json();
//       setProduct(result);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     GetSingleData();
//   }, []);

//   const incQty = () => {
//     setQty(qty + 1);
//   };

//   const decQty = () => {
//     if (qty > 1) { // Ensure quantity doesn't go below 1
//       setQty(qty - 1);
//     }
//   };

//   const goBack = () => {
//     navigate("/Supersunday");
//   };

//   const handleAddToCart = () => {
//     const user = localStorage.getItem('user');
//     if (user) {
//       const userData = JSON.parse(user);
//       if (userData.role === 'user') {
//         addToCart({ ...product, qty });
//         setQty(1); // Reset quantity to 1 after adding to cart
//         // navigate('/addtocart');
//       } else {
//         alert("Invalid user role");
//       }
//     } else {
//       alert("You need  to login first")
//       navigate('/log');
//     }
//   };

//   const buyNow = () => {
//     const user = localStorage.getItem('user');
//     if (user) {
//       const userData = JSON.parse(user);
//       if (userData.role === 'user') {
//         navigate('/addtocart');
//       } else {
//         alert("Invalid user role");
//       }
//     } else {
//       alert("You need  to login first")
//       navigate('/log');
//     }
//   };

//   return (
//     <>
//     <div className="container">
//       <div className="card mainn">
//         <div onClick={goBack} className="btn bt2 btn-lg mb-2 mt-2">Go to product Page</div>
//         <div className="card-body">
//           <h3 className="card-t">{product.name}</h3>
//           <div className="row">
//             <div className="col-lg-5 col-md-5 col-sm-6">
//               <div className="white-box text-center mt-3">
//                 {product.image && (
//                   <img
//                     src={`https://api.homeessentialshive.co.uk/${product.image.replace(/\\/g, '/')}`}
//                     alt={product.name}
//                     className='singleimg'
//                   />
//                 )}
//               </div>
//             </div>
//             <div className="col-lg-7 col-md-7 col-sm-6">
//               <h4 className="box-title mt-5">Product description</h4>
//  <p dangerouslySetInnerHTML={{ __html: product.title }}></p>
//               <h2 className="mt-5">${product.price}</h2>
//               <div className="ms-1 mt-4 Quabtity">
//                 <div className="mt-1"><h5>Quantity:</h5></div>
//                 <button onClick={decQty} className="btn btn-dark inn btn-md ms-2 h-25">-</button>
//                 <h4 className="ms-2">{qty}</h4>
//                 <button onClick={incQty} className="btn btn-dark inn btn-md ms-2 h-25">+</button>
//               </div>
//               <h3 className="text-danger mt-4">Total Amount: ${product.price * qty}</h3>
//               <button
//                 className="btn btn1 btn-rounded mr-1 buy"
//                 onClick={handleAddToCart}
//                 data-toggle="tooltip"
//                 title="Add to cart"
//                 data-original-title="Add to cart"
//               >
//                 Add To Cart
//               </button>
//               <button className="btn bt2 btn-rounded ms-3 buy" onClick={buyNow}>Buy Now</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//      <Footer/>
//     </>
//   );
// };

// export default Umbrellasingel;

import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Umbrellasingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/umbrella2single');

export default Umbrellasingel;