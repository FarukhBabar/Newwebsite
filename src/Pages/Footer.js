import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1a1a1d' }}>
        {/* Grid container */}
        <div className="container pt-5 pb-4">
          {/* Section: Links */}
          <section className>
            <div className="row">
              {/* Company Column */}
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold" style={{ color: '#f5f5f5' }}>Company Name</h6>
                <p style={{ color: '#bdbdbd' }}>
                  We provide top-quality products and services to enhance your lifestyle. Join us on our journey of innovation and excellence.
                </p>
              </div>

              {/* Products Column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold" style={{ color: '#f5f5f5' }}>Products</h6>
                <ul className="list-unstyled" style={{ lineHeight: '2.2' }}>
                  <li><a className="text-white" href="#!" style={{ textDecoration: 'none' }}>MDBootstrap</a></li>
                  <li><a className="text-white" href="#!" style={{ textDecoration: 'none' }}>MDWordPress</a></li>
                  <li><a className="text-white" href="#!" style={{ textDecoration: 'none' }}>BrandFlow</a></li>
                  <li><a className="text-white" href="#!" style={{ textDecoration: 'none' }}>Bootstrap Angular</a></li>
                </ul>
              </div>

              {/* Contact Column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold" style={{ color: '#f5f5f5' }}>Contact</h6>
                <p><i className="fas fa-home mr-3" /> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3" /> info@example.com</p>
                <p><i className="fas fa-phone mr-3" /> +1 234 567 88</p>
                <p><i className="fas fa-print mr-3" /> +1 234 567 89</p>
              </div>

              {/* Social Media Column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold" style={{ color: '#f5f5f5' }}>Follow us</h6>
                <div className="d-flex justify-content-center">
                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google" /></a>
                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram" /></a>
                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github" /></a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#bdbdbd' }}>
          © {new Date().getFullYear()} Copyright: 
          <a className="text-white" href="https://yourwebsite.com/" style={{ textDecoration: 'none' }}> yourwebsite.com</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
