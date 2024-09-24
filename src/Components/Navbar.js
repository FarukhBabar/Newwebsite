import React, { useState, useEffect } from 'react';
import "./assets/Style.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const { cartItems } = useCart();
    const userlogin = localStorage.getItem("user");
  const navigate = useNavigate();

  const toggleSearchBar = () => {
    setSearchOpen(!searchOpen);
  };

useEffect(() => {
   
  setCartCount(cartItems.length);
}, [cartItems]);
  const handleSearch = async () => {
    try {
      const response = await axios.get('https://api.homeessentialshive.co.uk/api/products', {
        params: { q: searchTerm }
      });
      setProducts(response.data);

      // Navigate to the All Products page with search results
      navigate('/all-products', { state: { products: response.data } });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
document.querySelectorAll('.mega-menu-trigger').forEach(item => {
  item.addEventListener('mouseover', () => {
    document.querySelector('.mega-menu').style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    document.querySelector('.mega-menu').style.display = 'none';
  });
});
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
    const Logout=()=>{
    localStorage.clear("user")
    alert("Logout Sucessfully")
    navigate("/log")
  }
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid navbar-container">
          <div className="navbar-logo">
            <a href="#"><img src='/Images/Black Mirebs Collection.png' alt='logo' className='logomain' /></a>
          </div> 
          <div>
  <button
    className="btn"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasWithBackdrop"
    aria-controls="offcanvasWithBackdrop"
  >
    <div className="hamburger">
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  </button>

  <div
    className="offcanvas offcanvas-start"
    tabIndex={-1}
    id="offcanvasWithBackdrop"
    aria-labelledby="offcanvasWithBackdropLabel"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title mx-auto" id="offcanvasWithBackdropLabel">
        Hi, Welcome
      </h5>
      <hr/>
      <button
        type="button"
        className="btn-close text-reset "
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <ul className="canvas">
        
        <li className="dropdown-item  h5">
          <a
            href="#"
            className="dropdown-toggle "
            data-bs-toggle="collapse"
            data-bs-target="#outdoorSubmenu"
            aria-expanded="false"
            >Food & Drink</a>
          <ul className="collapse submenu-right canvas "  id="outdoorSubmenu">
             <div><h4 className='text-center text-danger mt-3'>FoodandDrink Catagories</h4><hr></hr></div >
             <div className='d-flex ps-5 list-unstyled listsett'>
              <div>
            <li><u><Link to="/food" className="dropdown-item mt-2 ps-5">Food</Link></u></li>
            <li><u><Link to="/drink" className="dropdown-item ps-5 pt-2">Drink</Link></u></li>
            </div>
           <div className='text-center foodimge'>
            <img src='/Images/sidebanner/bathroom.jpg' className='w-50 h-100 ms-5 foodimge  mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
          </ul>
        </li>
         
        <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#gardenSubmenu"
            aria-expanded="false"
            >Smoking Products</a>
          <ol className="collapse submenu-right canvas" id="gardenSubmenu">
             <div><h4 className='text-center text-danger mt-3'>Smoking Catagories</h4><hr></hr></div>
              <div className='d-flex ps-5 list-unstyled listsett'>
                <div>
            <li><u><Link to="/lighter" className="dropdown-item ps-5">Lighter & Matches</Link></u></li>
            <li><u><Link to="/electrical" className="dropdown-item ps-5">Electrical</Link></u></li>
            <li><u><Link to="/smoking" className="dropdown-item ps-5">Smoking Essential</Link></u></li>
            </div>
            <div className='text-center'>
            <img src='/Images/sidebanner/smoking product.jpg' className='w-75 h-100 ms-5  mt-4 smokingimage poundsideimages poundsideimage' />
            </div>
            </div>
          </ol>
        </li>
        <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#poundlineSubmenu"
            aria-expanded="false"
            >Poundline</a>
          <ol className="collapse submenu-right canvas" id="poundlineSubmenu">
            <div><h4 className='text-center text-danger mt-3'>Poundline Catagories</h4>
            <hr/></div>
            <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/poundline/bathroom" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Bathroom/Cosmetic</Link></u></li>
            <li><u><Link to="/category/poundline/firstaid" className="dropdown-item  ps-5">First Aid</Link></u></li>
            <li><u><Link to="/category/poundline/electric" className="dropdown-item  ps-5">Electrical</Link></u></li>
            <li><u><Link to="/category/poundline/disposible" className="dropdown-item  ps-5">Disposable/Din Liners</Link></u></li>
            <li><u><Link to="/category/poundline/shoecare" className="dropdown-item  ps-5">Shoe Care</Link></u></li>
            <li><u><Link to="/category/poundline" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/pound lines.jpg' className='w-75 h-75 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
          </ol>
        </li>
         <li className="dropdown-item h5 w-100">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#luxurySubmenu"
            aria-expanded="false"
            >Bathroom </a>
          <ol className="collapse submenu-right canvas" id="luxurySubmenu">
            <div><h4 className='text-center text-danger mt-3'>Bathroom Catagories</h4>
            <hr/></div>
             <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/bathroom/bathroomscale" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Bathroon Scales</Link></u></li>
            <li><u><Link to="/category/bathroom/bathroommirror" className="dropdown-item  ps-5">Mirror</Link></u></li>
            <li><u><Link to="/category/bathroom/shower" className="dropdown-item  ps-5">Shower Curtains</Link></u></li>
            <li><u><Link to="/category/bathroom/bathmats" className="dropdown-item  ps-5">Bath Mats</Link></u></li>
            <li><u><Link to="/category/bathroom/bathroomaccessories" className="dropdown-item  ps-5">Bathroom Accessories </Link></u></li>
            
            <li><u><Link to="/category/bathroom" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/bathroom.jpg' className='w-75 h-75 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
          </ol>
        </li>
         <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#luxurySubmenu"
            aria-expanded="false"
            >Laundry Storage </a>
          <ol className="collapse submenu-right canvas" id="luxurySubmenu">
            <div><h4 className='text-center text-danger mt-3'>Laundry Storage Catagories</h4>
            <hr/></div>
             <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/laundry/airers" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Airers</Link></u></li>
            <li><u><Link to="/category/loundry/ironingboards" className="dropdown-item  ps-5">Ironing Boards</Link></u></li>
            <li><u><Link to="/category/loundry/laundryaccessories" className="dropdown-item  ps-5">Laundry Accessories</Link></u></li>
            <li><u><Link to="/category/loundry/bags" className="dropdown-item  ps-5">Laundry Bags</Link></u></li>
            <li><u><Link to="/category/loundry/baskets" className="dropdown-item  ps-5">Laundry Baskets</Link></u></li>
            
            <li><u><Link to="/category/loundry" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/laundary.jpg' className='w-75 h-80 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
           
          </ol>
        </li>
         <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#luxurySubmenu"
            aria-expanded="false"
            >Kitechenware </a>
          <ol className="collapse submenu-right canvas" id="luxurySubmenu">
            <div><h4 className='text-center text-danger mt-3'>Kitechenware Catagories</h4>
            <hr/></div>
             <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/kitechenwear/cutlery" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Cutlery / Cutlery Set</Link></u></li>
            <li><u><Link to="/category/kitechenwear/bakeware" className="dropdown-item  ps-5">Bakeweare</Link></u></li>
            <li><u><Link to="/category/kitechenwear/chrome" className="dropdown-item  ps-5">Chrome</Link></u></li>
            <li><u><Link to="/category/kitechenwear/cookware" className="dropdown-item  ps-5">Cookware</Link></u></li>
            <li><u><Link to="/category/kitechenwear/kettles" className="dropdown-item  ps-5">Kettles</Link></u></li>
            
            <li><u><Link to="/kitechenware" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/kitchenware.jpg' className='w-75 h-80 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
           
          </ol>
        </li>
          <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#luxurySubmenu"
            aria-expanded="false"
            >Cleaning Materials </a>
          <ol className="collapse submenu-right canvas" id="luxurySubmenu">
            <div><h4 className='text-center text-danger mt-3'>Cleaning Materials Catagories</h4>
            <hr/></div>
            <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/cleaning/sponge" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Sponge Scourer</Link></u></li>
            <li><u><Link to="/category/cleaning/mops" className="dropdown-item  ps-5">Mops/Squeegees</Link></u></li>
            <li><u><Link to="/category/cleaning/gloves" className="dropdown-item  ps-5">GLoves</Link></u></li>
            <li><u><Link to="/category/cleaning/duster" className="dropdown-item  ps-5">Cloths & Duster</Link></u></li>
            <li><u><Link to="/category/cleaning/brushware" className="dropdown-item  ps-5">Brushware</Link></u></li>
            
            <li><u><Link to="/cleaning" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/cleaning.jpg' className='w-75 h-80 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
            
          </ol>
        </li>
          <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#luxurySubmenu"
            aria-expanded="false"
            >Gardening </a>
          <ol className="collapse submenu-right canvas" id="luxurySubmenu">
            <div><h4 className='text-center text-danger mt-3'>Gardening Catagories</h4>
            <hr/></div>
             <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/gardening/bbq" className="dropdown-item mt-2 ps-5 fs-5 fw-2">BBQ</Link></u></li>
            <li><u><Link to="/category/gardening/camping" className="dropdown-item  ps-5">Camping</Link></u></li>
            <li><u><Link to="/category/gardening/fertilizer" className="dropdown-item  ps-5">Fertilisrs & Chemicals</Link></u></li>
            <li><u><Link to="/category/gardening/furnitur" className="dropdown-item  ps-5">Furniture</Link></u></li>
            <li><u><Link to="/category/gardening/giftware" className="dropdown-item  ps-5">Giftware & Ornaments</Link></u></li>
            
            <li><u><Link to="/gardening" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/gardening.jpg' className='w-75 h-80 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
            
          </ol>
        </li>
          <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#luxurySubmenu"
            aria-expanded="false"
            >Toiletries </a>
          <ol className="collapse submenu-right canvas" id="luxurySubmenu">
            <div><h4 className='text-center text-danger mt-3'>Toiletries Catagories</h4>
            <hr/></div>
            <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/gardening/bbq" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Cotton Wool/Buds</Link></u></li>
            <li><u><Link to="/category/gardening/camping" className="dropdown-item  ps-5">Babay Care</Link></u></li>
            <li><u><Link to="/category/gardening/fertilizer" className="dropdown-item  ps-5">Gift Sets</Link></u></li>
            <li><u><Link to="/category/gardening/furnitur" className="dropdown-item  ps-5">Hair Products</Link></u></li>
            <li><u><Link to="/category/gardening/giftware" className="dropdown-item  ps-5">Hand Wash</Link></u></li>
            
            <li><u><Link to="/tolitries" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/toileteries.jpg' className='w-75 h-80 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
            
          </ol>
        </li>
         <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#luxurySubmenu"
            aria-expanded="false"
            >Home & Decor </a>
          <ol className="collapse submenu-right canvas" id="luxurySubmenu">
            <div><h4 className='text-center text-danger mt-3'>Home & Decor Catagories</h4>
            <hr/></div>
              <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/gardening/bbq" className="dropdown-item mt-2 ps-5 fs-5 fw-2">St George/England</Link></u></li>
            <li><u><Link to="/category/gardening/camping" className="dropdown-item  ps-5">Candles</Link></u></li>
            <li><u><Link to="/category/gardening/fertilizer" className="dropdown-item  ps-5">Fathers Day</Link></u></li>
            <li><u><Link to="/category/gardening/furnitur" className="dropdown-item  ps-5">Frames & Mirrors</Link></u></li>
            <li><u><Link to="/category/gardening/giftware" className="dropdown-item  ps-5">Giftware</Link></u></li>
            
            <li><u><Link to="/homedecor" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/home & decor.jpg' className='w-75 h-80 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
            </ol>
        </li>
        <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#luxurySubmenu"
            aria-expanded="false"
            >Diy  </a>
          <ol className="collapse submenu-right canvas" id="luxurySubmenu">
            <div><h4 className='text-center text-danger mt-3'>Diy Catagories</h4>
            <hr/></div>
             <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/diye/barrettine" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Barrettine</Link></u></li>
            <li><u><Link to="/category/diye/bartolin" className="dropdown-item  ps-5">Bartoline</Link></u></li>
            <li><u><Link to="/category/diye/birdbrand" className="dropdown-item  ps-5">Bird Brand</Link></u></li>
            <li><u><Link to="/category/diye/black" className="dropdown-item  ps-5">Blackspur/Pro User</Link></u></li>
            <li><u><Link to="/category/diye/bonit" className="dropdown-item  ps-5">Bondit</Link></u></li>
            
            <li><u><Link to="/diy" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/diy.jpg' className='w-75 h-80 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
          </ol>
        </li>
         <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#luxurySubmenu"
            aria-expanded="false"
            >HouseHold Cleaners</a>
          <ol className="collapse submenu-right canvas" id="luxurySubmenu">
            <div><h4 className='text-center text-danger mt-3'>HouseHold Cleaners Catagories</h4>
            <hr/></div>
              <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/housecleaner/freshner" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Air Freshner</Link></u></li>
            <li><u><Link to="/category/housecleaner/bleech" className="dropdown-item  ps-5">Bathroom Bleach</Link></u></li>
            <li><u><Link to="/category/housecleaner/car" className="dropdown-item  ps-5">Car Care</Link></u></li>
            <li><u><Link to="/category/gardening/camping" className="dropdown-item  ps-5">Bathroom Cleaners</Link></u></li>
            <li><u><Link to="/category/gardening/giftware" className="dropdown-item  ps-5">Carpet</Link></u></li>
            
            <li><u><Link to="/houseclaner" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/household cleaner.jpg' className='w-75 h-80 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
           
          </ol>
        </li>
        <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#luxurySubmenu"
            aria-expanded="false"
            >Plastic Houseware</a>
          <ol className="collapse submenu-right canvas" id="luxurySubmenu">
            <div><h4 className='text-center text-danger mt-3'>Plastic Houseware Catagories</h4>
            <hr/></div>
              <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/plastichousewear/foodcon" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Plastic Container</Link></u></li>
            <li><u><Link to="/category/plastichousewear/kidsplastic" className="dropdown-item  ps-5">Kids Plastic Product</Link></u></li>
            <li><u><Link to="/category/plastichousewear/melamine" className="dropdown-item  ps-5">Deodorant/Bodysoray</Link></u></li>
            <li><u><Link to="/category/plastichousewear/kidsbathroom" className="dropdown-item  ps-5">Plastic Bathroom Product</Link></u></li>
            <li><u><Link to="/category/plastichousewear/plasticcabnit" className="dropdown-item  ps-5">Plastic Drawer Cabin</Link></u></li>
            
            <li><u><Link to="/plastichouseware" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/plastic houseware.jpg' className='w-75 h-80 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
           
          </ol>
        </li>
         <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#poundlineSubmenu"
            aria-expanded="false"
            >Artifical Flowers</a>
          <ol className="collapse submenu-right canvas" id="poundlineSubmenu">
            <div><h4 className='text-center text-danger mt-3'>Artifical Flowers Catagories</h4>
            <hr/></div>
            <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/flowers/artifical" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Artifical Trees</Link></u></li>
            <li><u><Link to="/category/flowers/bouquet" className="dropdown-item  ps-5">Bouquets</Link></u></li>
            <li><u><Link to="/category/flowers/garland" className="dropdown-item  ps-5">Garlands</Link></u></li>
            <li><u><Link to="/category/flowers/singlestem" className="dropdown-item  ps-5">Single Stems Liners</Link></u></li>
            <li><u><Link to="/category/flowers" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/flower.jpg' className='w-75 h-75 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
          </ol>
        </li>
          <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#poundlineSubmenu"
            aria-expanded="false"
            >Stationery Items</a>
          <ol className="collapse submenu-right canvas" id="poundlineSubmenu">
            <div><h4 className='text-center text-danger mt-3'>Stationery Catagories</h4>
            <hr/></div>
            <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/stationery/artcraft" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Art & Craft </Link></u></li>
            <li><u><Link to="/category/stationery/books" className="dropdown-item  ps-5">Books</Link></u></li>
            <li><u><Link to="/category/stationery/diaries" className="dropdown-item  ps-5">Diaries</Link></u></li>
            <li><u><Link to="/category/stationery/kids" className="dropdown-item  ps-5">Kids Statinoary </Link></u></li>
            <li><u><Link to="/category/stationery" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/stationary.jpg' className='w-75 h-75 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
          </ol>
        </li>
          <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#poundlineSubmenu"
            aria-expanded="false"
            >Textile Accessories</a>
          <ol className="collapse submenu-right canvas" id="poundlineSubmenu">
            <div><h4 className='text-center text-danger mt-3'>Textile Accessories Catagories</h4>
            <hr/></div>
            <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/textilesaccessories/aprons" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Aprons </Link></u></li>
            <li><u><Link to="/category/textilesaccessories/bedding" className="dropdown-item  ps-5">Bedding</Link></u></li>
            <li><u><Link to="/category/textilesaccessories/clothing" className="dropdown-item  ps-5">Clothing & Accessories</Link></u></li>
            <li><u><Link to="/category/textilesaccessories/curtains" className="dropdown-item  ps-5">Curtains & Drayght </Link></u></li>
            <li><u><Link to="/category/textilesaccessories" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/tetxtile and accessories.jpg' className='w-75 h-75 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
          </ol>
        </li>
        <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#poundlineSubmenu"
            aria-expanded="false"
            >Pet Products</a>
          <ol className="collapse submenu-right canvas" id="poundlineSubmenu">
            <div><h4 className='text-center text-danger mt-3'>Pet Product Catagories</h4>
            <hr/></div>
            <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/petproducts/cat" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Cat Products </Link></u></li>
            <li><u><Link to="/category/petproducts/birds" className="dropdown-item  ps-5">Bird Products</Link></u></li>
            <li><u><Link to="/category/petproducts/dog" className="dropdown-item  ps-5">Dog Products</Link></u></li>
            <li><u><Link to="/category/petproducts/fishproduct" className="dropdown-item  ps-5">Fish Product </Link></u></li>
            <li><u><Link to="/category/petproducts" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/pets product.jpg' className='w-75 h-75 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
          </ol>
        </li>
        <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#poundlineSubmenu"
            aria-expanded="false"
            >China Products</a>
          <ol className="collapse submenu-right canvas" id="poundlineSubmenu">
            <div><h4 className='text-center text-danger mt-3'>China Product Catagories</h4>
            <hr/></div>
            <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/china/crockery" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Crockery </Link></u></li>
            <li><u><Link to="/category/china/cookware" className="dropdown-item  ps-5">Cookwar</Link></u></li>
            <li><u><Link to="/category/china/dinner" className="dropdown-item  ps-5">Dinner Sets</Link></u></li>
            <li><u><Link to="/category/china/drinkingglass" className="dropdown-item  ps-5">Drinking Glass </Link></u></li>
            <li><u><Link to="/category/china" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/china products.jpg' className='w-75 h-75 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
          </ol>
        </li>
        <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#poundlineSubmenu"
            aria-expanded="false"
            >Hardware Products</a>
          <ol className="collapse submenu-right canvas" id="poundlineSubmenu">
            <div><h4 className='text-center text-danger mt-3'>Hardware Product Catagories</h4>
            <hr/></div>
            <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/china/crockery" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Furnitur </Link></u></li>
            <li><u><Link to="/category/china/cookware" className="dropdown-item  ps-5">Mats & Rugs</Link></u></li>
           
            <li><u><Link to="/category/china/drinkingglass" className="dropdown-item  ps-5">Metal Bucket Glass </Link></u></li>
            <li><u><Link to="/category/hardware" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/hardware mats.jpg' className='w-75 h-75 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
          </ol>
        </li>
        <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#poundlineSubmenu"
            aria-expanded="false"
            >Seasonal Sports </a>
          <ol className="collapse submenu-right canvas" id="poundlineSubmenu">
            <div><h4 className='text-center text-danger mt-3'>Seasonal Sports Catagories</h4>
            <hr/></div>
            <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/seasonalsports/cooler" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Cooler Bags </Link></u></li>
            <li><u><Link to="/category/seasonalsports/flask" className="dropdown-item  ps-5">Flasks</Link></u></li>
           
            <li><u><Link to="/category/seasonalsports/hotwater" className="dropdown-item  ps-5">Hotwater Bottles </Link></u></li>
            <li><u><Link to="/category/seasonalsports/picnic" className="dropdown-item  ps-5">Picnic </Link></u></li>
            <li><u><Link to="/category/seasonalsports" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/sports.jpg' className='w-75 h-75 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
          </ol>
        </li>
        <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#poundlineSubmenu"
            aria-expanded="false"
            >Pest Control </a>
          <ol className="collapse submenu-right canvas" id="poundlineSubmenu">
            <div><h4 className='text-center text-danger mt-3'>Pest Control Catagories</h4>
            <hr/></div>
            <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/pestcontrol/rentokil" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Rentokil Initial </Link></u></li>
            <li><u><Link to="/category/pestcontrol/stv" className="dropdown-item  ps-5">STV International</Link></u></li>
           
            <li><u><Link to="/category/pestcontrol" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/pest control.jpg' className='w-75 h-75 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
          </ol>
        </li>
        <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#poundlineSubmenu"
            aria-expanded="false"
            >Kids Products </a>
          <ol className="collapse submenu-right canvas" id="poundlineSubmenu">
            <div><h4 className='text-center text-danger mt-3'>Kids Products Catagories</h4>
            <hr/></div>
            <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/kidsproduct/kidsproducts" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Kids Product </Link></u></li>
            <li><u><Link to="/category/kidsproduct/kidssto" className="dropdown-item  ps-5">Kids Storage</Link></u></li>
           
            <li><u><Link to="/category/kidsproduct" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/kids product.jpg' className='w-75 h-75 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
          </ol>
        </li>
        <li className="dropdown-item h5">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#poundlineSubmenu"
            aria-expanded="false"
            >Glassweare Products </a>
          <ol className="collapse submenu-right canvas" id="poundlineSubmenu">
            <div><h4 className='text-center text-danger mt-3'>Glassweare Products Catagories</h4>
            <hr/></div>
            <div className='d-flex ps-5 list-unstyled listsett'>
            <div className=''>
            <li><u><Link to="/category/glassweare/cakes" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Cakes Stand</Link></u></li>
            <li><u><Link to="/category/glassweare/crokery" className="dropdown-item  ps-5">Crokery </Link></u></li>
            <li><u><Link to="/category/glassweare/crystal" className="dropdown-item  ps-5">Crystal </Link></u></li>
            <li><u><Link to="/category/glassweare/glassdecorative" className="dropdown-item  ps-5">Glass Decorative </Link></u></li>
           
            <li><u><Link to="/category/glassweare" className="dropdown-item  ps-5">View All</Link></u></li>
            </div>
            <div>
            <img src='/Images/sidebanner/glassware.jpg' className='w-75 h-75 ms-5 mt-4 poundsideimages poundsideimage' />
            </div>
            </div>
          </ol>
        </li>
      </ul>
    </div>
  </div>
</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav listof me-auto mb-2 mb-lg-0">
              <li>
                <Link className="nav-link active text-dark" to="/">Home</Link>
              </li>
              <li>
                <a className="nav-link active text-dark" href="#">Shop</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="collectionsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Collections
                </a>
                <ul className="dropdown-menu" aria-labelledby="collectionsDropdown">
                  <li>
                    <h4 className='dropdown-header'>Pret</h4>
                    <hr />
                    <a className="dropdown-item" href="#">Printed</a>
                    <a className="dropdown-item" href="#">Embroidered</a>
                    <a className="dropdown-item" href="#">Solids</a>
                    <a className="dropdown-item" href="#">Anyday</a>
                    <a className="dropdown-item" href="#">1 Piece</a>
                    <a className="dropdown-item" href="#">2 Piece</a>
                    <a className="dropdown-item" href="#">3 Piece</a>
                    <a className="dropdown-item" href="#">Slips</a>
                    <a className="dropdown-item" href="#">Bottoms</a>
                  </li>
                  <li>
                    <h4 className='dropdown-header'>Cosmetics</h4>
                    <hr />
                    <a className="dropdown-item" href="#">Eid 2 Any Day</a>
                    <a className="dropdown-item" href="#">Printed</a>
                    <a className="dropdown-item" href="#">Embroidered</a>
                    <a className="dropdown-item" href="#">Anyday</a>
                    <a className="dropdown-item" href="#">2 Piece</a>
                    <a className="dropdown-item" href="#">3 Piece</a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link aboutus" href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div className="navbar-icons">
            <div className='me-3'>
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person fs-4"></i>
                </button>
                <ul className="dropdown-menu  me-5" aria-labelledby="profileDropdown">
                  <li className=''><a className="dropdown-item text-center" href="#">Profile</a></li>
                  <li><Link to="/Register" className="dropdown-item text-decoration-none  text-dark text-center">REGISTER</Link></li>
                  
                  <li> 
      
      {userlogin?(

<Link to=""  onClick={Logout} className="dropdown-item  text-decoration-none text-dark text-center">LOGOUT</Link>

):(

<Link to="/login" className="dropdown-item text-decoration-none text-dark text-center">LOGIN</Link>
)
}
    </li>
                </ul>
              </div>
            </div>
            <div className='me-3' onClick={toggleSearchBar} style={{ cursor: 'pointer' }}>
              <i className="bi bi-search fs-4"></i>
            </div>
            <div className='me-3'>
             <Link to='/addtocart'><i className="bi bi-bag-fill fs-4"></i>({cartCount})</Link> 
            </div>
          </div>
        </div>
      </nav>

      {/* Background Overlay */}
      <div className={`background-overlay ${searchOpen ? 'open' : ''}`} onClick={toggleSearchBar}></div>

      {/* Sliding Search Bar */}
      <div className={`search-bar ${searchOpen ? 'open' : ''}`}>
        <div className="search-bar-content">
          <input 
            type="text" 
            placeholder="Search..." 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="form-control" 
            onKeyPress={handleKeyPress}
          />
          <button className="btn btn-primary" onClick={toggleSearchBar}>Close</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
