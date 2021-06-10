import React from 'react';
import { useHistory } from 'react-router';

import logo from '../assets/img/logo1.png';

function MyAppbar(props) {
  const history = useHistory();

  return (
    <>
      <div className="container-fluid bg-primary py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <a style={{ cursor: "pointer" }} className="text-white pr-3">FAQs</a>
                <span className="text-white">|</span>
                <a style={{ cursor: "pointer" }} className="text-white px-3">Help</a>
                <span className="text-white">|</span>
                <a style={{ cursor: "pointer" }} className="text-white pl-3">Support</a>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a style={{ cursor: "pointer" }} className="text-white px-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a style={{ cursor: "pointer" }} className="text-white px-3">
                  <i className="fab fa-twitter"></i>
                </a>
                <a style={{ cursor: "pointer" }} className="text-white px-3">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a style={{ cursor: "pointer" }} className="text-white px-3">
                  <i className="fab fa-instagram"></i>
                </a>
                <a style={{ cursor: "pointer" }} className="text-white pl-3">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid position-relative nav-bar p-0">
        <div
          className="container-lg position-relative p-0 px-lg-3"
          style={{ zIndex: 9 }}
        >
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 pl-3 pl-lg-5">
            <img onClick={() => history.push('/home')} style={{ width: '13rem', cursor: "pointer" }} src={logo} />
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between px-3"
              id="navbarCollapse"
            >
              <div className="navbar-nav ml-auto py-0">
                <a style={{ cursor: "pointer" }} onClick={() => history.push('/home')} className="nav-item nav-link active">
                  Home
                </a>
                <a style={{ cursor: "pointer" }} onClick={() => history.push('/about')} className="nav-item nav-link">
                  About
                </a>
                <a style={{ cursor: "pointer" }} onClick={() => history.push('/faq')} className="nav-item nav-link">
                  FAQ
                </a>
                <a style={{ cursor: "pointer" }} onClick={() => history.push('/pricing')} className="nav-item nav-link">
                  Pricing
                </a>

                <div className="nav-item dropdown">
                  <a style={{ cursor: "pointer" }}
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu border-0 rounded-0 m-0">
                    <a style={{ cursor: "pointer" }} className="dropdown-item">
                      Blog Grid
                    </a>
                    <a style={{ cursor: "pointer" }} className="dropdown-item">
                      Blog Detail
                    </a>
                  </div>
                </div>
                <a style={{ cursor: "pointer" }} onClick={() => history.push('/contact')} className="nav-item nav-link">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default MyAppbar;
