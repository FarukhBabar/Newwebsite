import React, { useState } from 'react';
import "./assets/Style.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
    const userlogin = localStorage.getItem("user");
  const navigate = useNavigate();

  const toggleSearchBar = () => {
    setSearchOpen(!searchOpen);
  };

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
            <li><Link to="/food" className="dropdown-item mt-2 ps-5">Food</Link></li>
            <li><Link to="/drink" className="dropdown-item ps-5 pt-2">Drink</Link></li>
            </div>
           <div className='text-center'>
            <img src='/Images/sidebanner/bathroom.jpg' className='w-50 h-100 ms-5  mt-4 poundsideimages poundsideimage' />
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
            <li><Link to="/lighter" className="dropdown-item ps-5">Lighter & Matches</Link></li>
            <li><Link to="/electrical" className="dropdown-item ps-5">Electrical</Link></li>
            <li><Link to="/smoking" className="dropdown-item ps-5">Smoking Essential</Link></li>
            </div>
            <div className='text-center'>
            <img src='/Images/sidebanner/smoking product.jpg' className='w-75 h-100 ms-5  mt-4 poundsideimages poundsideimage' />
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
            <li><Link to="/category/poundline/bathroom" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Bathroom/Cosmetic</Link></li>
            <li><Link to="/category/poundline/firstaid" className="dropdown-item  ps-5">First Aid</Link></li>
            <li><Link to="/category/poundline/electric" className="dropdown-item  ps-5">Electrical</Link></li>
            <li><Link to="/category/poundline/disposible" className="dropdown-item  ps-5">Disposable/Din Liners</Link></li>
            <li><Link to="/category/poundline/shoecare" className="dropdown-item  ps-5">Shoe Care</Link></li>
            <li><Link to="/category/poundline" className="dropdown-item  ps-5">View All</Link></li>
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
            <li><Link to="/category/bathroom/bathroomscale" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Bathroon Scales</Link></li>
            <li><Link to="/category/bathroom/bathroommirror" className="dropdown-item  ps-5">Mirror</Link></li>
            <li><Link to="/category/bathroom/shower" className="dropdown-item  ps-5">Shower Curtains</Link></li>
            <li><Link to="/category/bathroom/bathmats" className="dropdown-item  ps-5">Bath Mats</Link></li>
            <li><Link to="/category/bathroom/bathroomaccessories" className="dropdown-item  ps-5">Bathroom Accessories </Link></li>
            
            <li><Link to="/category/bathroom" className="dropdown-item  ps-5">View All</Link></li>
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
            <li><Link to="/category/laundry/airers" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Airers</Link></li>
            <li><Link to="/category/loundry/ironingboards" className="dropdown-item  ps-5">Ironing Boards</Link></li>
            <li><Link to="/category/loundry/laundryaccessories" className="dropdown-item  ps-5">Laundry Accessories</Link></li>
            <li><Link to="/category/loundry/bags" className="dropdown-item  ps-5">Laundry Bags</Link></li>
            <li><Link to="/category/loundry/baskets" className="dropdown-item  ps-5">Laundry Baskets</Link></li>
            
            <li><Link to="/category/loundry" className="dropdown-item  ps-5">View All</Link></li>
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
            <li><Link to="/category/kitechenwear/cutlery" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Cutlery / Cutlery Set</Link></li>
            <li><Link to="/category/kitechenwear/bakeware" className="dropdown-item  ps-5">Bakeweare</Link></li>
            <li><Link to="/category/kitechenwear/chrome" className="dropdown-item  ps-5">Chrome</Link></li>
            <li><Link to="/category/kitechenwear/cookware" className="dropdown-item  ps-5">Cookware</Link></li>
            <li><Link to="/category/kitechenwear/kettles" className="dropdown-item  ps-5">Kettles</Link></li>
            
            <li><Link to="/kitechenware" className="dropdown-item  ps-5">View All</Link></li>
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
            <li><Link to="/category/cleaning/sponge" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Sponge Scourer</Link></li>
            <li><Link to="/category/cleaning/mops" className="dropdown-item  ps-5">Mops/Squeegees</Link></li>
            <li><Link to="/category/cleaning/gloves" className="dropdown-item  ps-5">GLoves</Link></li>
            <li><Link to="/category/cleaning/duster" className="dropdown-item  ps-5">Cloths & Duster</Link></li>
            <li><Link to="/category/cleaning/brushware" className="dropdown-item  ps-5">Brushware</Link></li>
            
            <li><Link to="/cleaning" className="dropdown-item  ps-5">View All</Link></li>
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
            <li><Link to="/category/gardening/bbq" className="dropdown-item mt-2 ps-5 fs-5 fw-2">BBQ</Link></li>
            <li><Link to="/category/gardening/camping" className="dropdown-item  ps-5">Camping</Link></li>
            <li><Link to="/category/gardening/fertilizer" className="dropdown-item  ps-5">Fertilisrs & Chemicals</Link></li>
            <li><Link to="/category/gardening/furnitur" className="dropdown-item  ps-5">Furniture</Link></li>
            <li><Link to="/category/gardening/giftware" className="dropdown-item  ps-5">Giftware & Ornaments</Link></li>
            
            <li><Link to="/gardening" className="dropdown-item  ps-5">View All</Link></li>
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
            <li><Link to="/category/gardening/bbq" className="dropdown-item mt-2 ps-5 fs-5 fw-2">Cotton Wool/Buds</Link></li>
            <li><Link to="/category/gardening/camping" className="dropdown-item  ps-5">Babay Care</Link></li>
            <li><Link to="/category/gardening/fertilizer" className="dropdown-item  ps-5">Gift Sets</Link></li>
            <li><Link to="/category/gardening/furnitur" className="dropdown-item  ps-5">Hair Products</Link></li>
            <li><Link to="/category/gardening/giftware" className="dropdown-item  ps-5">Hand Wash</Link></li>
            
            <li><Link to="/tolitries" className="dropdown-item  ps-5">View All</Link></li>
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
            <div>
            <li><u><a href="#" className="dropdown-item mt-2 ps-5">St George/England</a></u></li>
            <li><u><a href="#" className="dropdown-item  ps-5">Candles</a></u></li>
            <li><u><a href="#" className="dropdown-item  ps-5">Fathers Day</a></u></li>
            <li><u><a href="#" className="dropdown-item  ps-5">Frames & Mirrors</a></u></li>
            <li><u><a href="#" className="dropdown-item  ps-5">Giftware</a></u></li>
            <li><u><Link to="/homedecor" className="dropdown-item  ps-5">View All</Link></u></li>
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
            <div className='d-flex'>
            <div>
            <li><u><a href="#" className="dropdown-item mt-2 ps-5">Barrettine</a></u></li>
            <li><u><a href="#" className="dropdown-item  ps-5">Bartoline</a></u></li>
            <li><u><a href="#" className="dropdown-item ps-5 ">Bird Brand</a></u></li>
            <li><u><a href="#" className="dropdown-item  ps-5">Blackspur/Pro User</a></u></li>
            <li><u><a href="#" className="dropdown-item  ps-5">Bondit</a></u></li>
           <li><u><Link to="/diy" className="dropdown-item  ps-5">View All</Link></u></li>
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
            <div>
            <li><u><a href="#" className="dropdown-item mt-2 ps-5">Air Freshner </a></u></li>
            <li><u><a href="#" className="dropdown-item  ps-5">Bathroom Cleaners</a></u></li>
            <li><u><a href="#" className="dropdown-item  ps-5">Bathroom Bleach</a></u></li>
            <li><u><a href="#" className="dropdown-item  ps-5">Car Care</a></u></li>
            <li><u><a href="#" className="dropdown-item  ps-5">Carpet</a></u></li>
           <li><u><Link to="/houseclaner" className="dropdown-item  ps-5">View All</Link></u></li>
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
            <div>
            <li><u><a href="#" className="dropdown-item mt-2 ps-5">Plastic Container</a></u></li>
            <li><u><a href="#" className="dropdown-item  ps-5">Kids Plastic Product</a></u></li>
            <li><u><a href="#" className="dropdown-item  ps-5">Deodorant/Bodysoray</a></u></li>
            <li><u><a href="#" className="dropdown-item  ps-5">Plastic Bathroom Product</a></u></li>
            <li><u><a href="#" className="dropdown-item  ps-5">Plastic Drawer Cabin</a></u></li>
           <li><u><Link to="/plastichouseware" className="dropdown-item ps-5">View All</Link></u></li>
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
              <li className="nav-item dropdown">
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
              </li>
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
                <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><Link to="/Register" className="dropdown-item text-decoration-none  text-dark">REGISTER</Link></li>
                  
                  <li> 
      
      {userlogin?(

<Link to=""  onClick={Logout} className="dropdown-item  text-decoration-none text-dark">LOGOUT</Link>

):(

<Link to="/login" className="dropdown-item text-decoration-none text-dark">LOGIN</Link>
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
              <i className="bi bi-bag-fill fs-4"></i>
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
