import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import _ from 'lodash';

import logo from '../assets/img/logo1.png';

//config
import { Colors } from './../config/Colors';

function MyAppbar(props) {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({});

  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [faq, setFaq] = useState(false);
  const [pricing, setPricing] = useState(false);
  const [contact, setContact] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [logout, setLogout] = useState(false);
  const [profile, setProfile] = useState(false);

  const getCurrentUser = async () => {
    const user = JSON.parse(localStorage.getItem('token'));
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser({});
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <>
      <div className="container-fluid bg-primary py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <a
                  onClick={() => history.push('/faq')}
                  style={{ cursor: 'pointer' }}
                  className="text-white pr-3"
                >
                  FAQs
                </a>
                <span className="text-white">|</span>
                <a
                  onClick={() => history.push('/about')}
                  style={{ cursor: 'pointer' }}
                  className="text-white px-3"
                >
                  About
                </a>
                <span className="text-white">|</span>
                <a
                  onClick={() => history.push('/contact')}
                  style={{ cursor: 'pointer' }}
                  className="text-white pl-3"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a
                  target="_blank"
                  style={{ cursor: 'pointer' }}
                  className="text-white px-3"
                  href="https://m.facebook.com/instalaundrycanada/"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  target="_blank"
                  style={{ cursor: 'pointer' }}
                  className="text-white px-1"
                  href="http://instagram.com/instalaundrycanada"
                >
                  <i className="fab fa-instagram"></i>
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
            <img
              onClick={() => history.push('/home')}
              style={{ width: '13rem', cursor: 'pointer' }}
              src={logo}
            />
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
                <a
                  style={{
                    cursor: 'pointer',
                    color: home ? Colors.primary : null,
                  }}
                  onClick={() => {
                    history.push('/home');
                    setHome(true);
                    setAbout(false);
                    setFaq(false);
                    setPricing(false);
                    setContact(false);
                    setLogin(false);
                    setSignup(false);
                    setLogout(false);
                    setProfile(false);
                  }}
                  className="nav-item nav-link "
                >
                  Home
                </a>
                <a
                  style={{
                    cursor: 'pointer',
                    color: about ? Colors.primary : null,
                  }}
                  onClick={() => {
                    history.push('/about');
                    setHome(false);
                    setAbout(true);
                    setFaq(false);
                    setPricing(false);
                    setContact(false);
                    setLogin(false);
                    setSignup(false);
                    setLogout(false);
                    setProfile(false);
                  }}
                  className="nav-item nav-link"
                >
                  About
                </a>
                <a
                  style={{
                    cursor: 'pointer',
                    color: faq ? Colors.primary : null,
                  }}
                  onClick={() => {
                    history.push('/faq');
                    setHome(false);
                    setAbout(false);
                    setFaq(true);
                    setPricing(false);
                    setContact(false);
                    setLogin(false);
                    setSignup(false);
                    setLogout(false);
                    setProfile(false);
                  }}
                  className="nav-item nav-link"
                >
                  FAQ's
                </a>
                <a
                  style={{
                    cursor: 'pointer',
                    color: pricing ? Colors.primary : null,
                  }}
                  onClick={() => {
                    history.push('/pricing');
                    setHome(false);
                    setAbout(false);
                    setFaq(false);
                    setPricing(true);
                    setContact(false);
                    setLogin(false);
                    setSignup(false);
                    setLogout(false);
                    setProfile(false);
                  }}
                  className="nav-item nav-link"
                >
                  Pricing
                </a>
                <a
                  style={{
                    cursor: 'pointer',
                    color: contact ? Colors.primary : null,
                  }}
                  onClick={() => {
                    history.push('/contact');
                    setHome(false);
                    setAbout(false);
                    setFaq(false);
                    setPricing(false);
                    setContact(true);
                    setLogin(false);
                    setSignup(false);
                    setLogout(false);
                    setProfile(false);
                  }}
                  className="nav-item nav-link"
                >
                  Contact
                </a>
                {_.isEmpty(currentUser) ? (
                  <>
                    <a
                      style={{
                        cursor: 'pointer',
                        color: login ? Colors.primary : null,
                      }}
                      onClick={() => {
                        history.push('/login');
                        setHome(false);
                        setAbout(false);
                        setFaq(false);
                        setPricing(false);
                        setContact(false);
                        setLogin(true);
                        setSignup(false);
                        setLogout(false);
                        setProfile(false);
                      }}
                      className="nav-item nav-link"
                    >
                      Login
                    </a>
                    <a
                      style={{
                        cursor: 'pointer',
                        color: signup ? Colors.primary : null,
                      }}
                      onClick={() => {
                        history.push('/register');
                        setHome(false);
                        setAbout(false);
                        setFaq(false);
                        setPricing(false);
                        setContact(false);
                        setLogin(false);
                        setSignup(true);
                        setLogout(false);
                        setProfile(false);
                      }}
                      className="nav-item nav-link"
                    >
                      Sign Up
                    </a>
                  </>
                ) : (
                  <a
                    style={{
                      cursor: 'pointer',
                      color: logout ? Colors.primary : Colors.secondary,
                    }}
                    onClick={() => {
                      handleLogout();
                      setHome(false);
                      setAbout(false);
                      setFaq(false);
                      setPricing(false);
                      setContact(false);
                      setLogin(false);
                      setSignup(false);
                      setLogout(true);
                      setProfile(false);
                    }}
                    className="nav-item nav-link"
                  >
                    Logout
                  </a>
                )}
                <a
                  style={{
                    cursor: 'pointer',
                    color: profile ? Colors.primary : null,
                  }}
                  onClick={() => {
                    history.push('/profile');
                    setHome(false);
                    setAbout(false);
                    setFaq(false);
                    setPricing(false);
                    setContact(false);
                    setLogin(false);
                    setSignup(false);
                    setLogout(false);
                    setProfile(true);
                  }}
                  className="nav-item nav-link"
                >
                  Profile
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
