import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './admin.css'; // Custom CSS file for styling
import Accordion from 'react-bootstrap/Accordion';

const Admindashboard = () => {
  const userlogin = localStorage.getItem('user');
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem('user'); // Clear user from local storage
    alert('Logout Successfully');
    navigate('/');
  };

  return (
    <div className="admin-dashboard d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white vh-100 overflow-auto p-3">
        <div className="sidebar-header text-center py-3">
          <h4>Admin Dashboard</h4>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/adminpanal/orderslist">
              <i className="bi bi-list-task me-2"></i> Orders List
            </Link>
          </li>

          {/* Accordion for Collection */}
          <Accordion defaultActiveKey="0" className="mb-2">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <i className="bi bi-list-task me-2"></i> Collection
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  {/* Nested Accordion for Loan Collection */}
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Loan Collection</Accordion.Header>
                      <Accordion.Body>
                        <ul className="list-unstyled">
                          <li className="nav-item mb-1">
                            <Link className="nav-link text-dark" to="/adminpanal/loanform">
                              Loan Form
                            </Link>
                          </li>
                          <li className="nav-item mb-1">
                            <Link className="nav-link text-dark" to="/adminpanal/loanlist">
                              Loan List
                            </Link>
                          </li>
                          {/* <li className="nav-item mb-1">
                            <Link className="nav-link text-dark" to="/adminpanal/loantype3">
                              Loan Type 3
                            </Link>
                          </li> */}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <li className="nav-item mb-1">
                   <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Cotton Collection</Accordion.Header>
                      <Accordion.Body>
                        <ul className="list-unstyled">
                          <li className="nav-item mb-1">
                            <Link className="nav-link text-dark" to="/adminpanal/cottonform">
                              Cotton Form
                            </Link>
                          </li>
                          <li className="nav-item mb-1">
                            <Link className="nav-link text-dark" to="/adminpanal/cottonlist">
                             Cotton List
                            </Link>
                          </li>
                          {/* <li className="nav-item mb-1">
                            <Link className="nav-link text-dark" to="/adminpanal/loantype3">
                              Loan Type 3
                            </Link>
                          </li> */}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  </li>
                  <li className="nav-item mb-1">
                    <Link className="nav-link text-dark" to="/adminpanal/fullembroidery">
                      Full Embroidery
                    </Link>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/adminpanal/listcontact">
              <i className="bi bi-envelope me-2"></i> Contact Users
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/">
              <i className="bi bi-house-door me-2"></i> User Panel
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/adminpanal/userdata">
              <i className="bi bi-people me-2"></i> Users
            </Link>
          </li>
          <li className="nav-item">
            {userlogin ? (
              <Link to="/" onClick={Logout} className="nav-link text-white">
                <i className="bi bi-box-arrow-right me-2"></i> Logout
              </Link>
            ) : (
              <Link to="/log" className="nav-link text-white">
                <i className="bi bi-box-arrow-in-right me-2"></i> Login
              </Link>
            )}
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content p-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    1 Piece
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    2 Piece
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    3 Piece
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Content Area */}
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
