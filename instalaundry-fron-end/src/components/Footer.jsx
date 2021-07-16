import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AndroidTwoToneIcon from '@material-ui/icons/AndroidTwoTone';
import AppleIcon from '@material-ui/icons/Apple';

// config
import { Colors } from './../config/Colors';

import logo from '../assets/img/logo1.png';
import candalogo from '../assets/img/canadian.png';
// import Form from './common/Form';
// import DefaultFormEmail from './common/DefaultFormEmail';
import axios from 'axios';

export default function Footer() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [name, setName] = useState({});
  const [email, setEmail] = useState({});

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

  const handleSubscribeEmail = async () => {
    var data = {
      service_id: 'service_siowrj7',
      template_id: 'template_0bvfsqc',
      user_id: 'user_ef7lljg2cLfLEVyVsoysv',
      template_params: {
        message: `Customer Email: ${email}
        Customer Name: ${name}`,
        to_email: email,
      },
    };
    try {
      await axios.post(
        'https://api.emailjs.com/api/v1.0/email/send',
        JSON.stringify(data),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      alert('Subscribed');
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <div>
      <div className="container-fluid bg-primary text-white pt-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <a>
              <h1
                style={{ marginTop: '-1rem' }}
                className="text-secondary mb-3"
              >
                <img style={{ width: '16rem' }} src={logo} />
              </h1>
            </a>
            <p
              style={{
                fontFamily: 'Courier',
                wordSpacing: -4,
                fontSize: '0.9rem',
              }}
            >
              Our vision and goal is to push the boundaries of traditional
              laundromat services and provide our customers with the ease of
              staying home
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a
                target="_blank"
                style={{ fontSize: '2.2rem' }}
                className="text-white px-3"
                href="https://m.facebook.com/instalaundrycanada/"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                target="_blank"
                style={{ cursor: 'pointer', fontSize: '2.2rem' }}
                className="text-white px-1"
                href="http://instagram.com/instalaundrycanada"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a style={{ marginLeft: '2.2rem' }}>
                <img style={{ width: '8.5rem' }} src={candalogo} />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white mb-4">Get In Touch</h4>
            <p
              style={{
                fontFamily: 'Courier',
                wordSpacing: -4,
                fontSize: '0.9rem',
              }}
            >
              You can contact us on the following platforms or links!
            </p>
            <p
              style={{
                fontFamily: 'Courier',
                wordSpacing: -4,
                fontSize: '0.9rem',
              }}
            >
              <i class="fa fa-map-marker" aria-hidden="true"></i> 123 Street,
              New York, USA
            </p>
            <p
              style={{
                fontFamily: 'Courier',
                wordSpacing: -4,
                fontSize: '0.9rem',
              }}
            >
              <i class="fa fa-phone" aria-hidden="true"></i> +012 345 67890
            </p>
            <p
              style={{
                fontFamily: 'Courier',
                wordSpacing: -4,
                fontSize: '0.9rem',
              }}
            >
              <i className="fa fa-envelope mr-2"></i>support@instalaundry.ca
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a
                style={{
                  fontFamily: 'Courier',
                  wordSpacing: -4,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
                className="text-white mb-2"
                onClick={() => history.push('/home')}
              >
                <i className="fa fa-angle-right mr-2"></i>
                Home
              </a>
              <a
                style={{
                  fontFamily: 'Courier',
                  wordSpacing: -4,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
                className="text-white mb-2"
                onClick={() => history.push('/about')}
              >
                <i className="fa fa-angle-right mr-2"></i>
                About Us
              </a>

              <a
                style={{
                  fontFamily: 'Courier',
                  wordSpacing: -4,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
                className="text-white mb-2"
                onClick={() => history.push('/pricing')}
              >
                <i className="fa fa-angle-right mr-2"></i>
                Pricing
              </a>
              <a
                style={{
                  fontFamily: 'Courier',
                  wordSpacing: -4,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
                className="text-white"
                onClick={() => history.push('/contact')}
              >
                <i className="fa fa-angle-right mr-2"></i>
                Contact Us
              </a>
              {currentUser.role === 'admin' ? (
                <a
                  onClick={() => history.push('/admin')}
                  style={{
                    marginTop: '0.6rem',
                    fontFamily: 'Courier',
                    wordSpacing: -4,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                  }}
                  className="text-white"
                >
                  <i className="fa fa-angle-right mr-2"></i>Admin
                </a>
              ) : null}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white mb-4">Newsletter</h4>
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Your Name"
                  required="required"
                  onChange={(e) => setName(e.target.value)}
                  style={{ borderRadius: '0.5rem' }}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control border-0"
                  placeholder="Your Email"
                  required="required"
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ borderRadius: '0.5rem' }}
                />
              </div>
              <div>
                <Button
                  style={{
                    backgroundColor: '#1a1a1a',
                    color: Colors.white,
                  }}
                  className="btn btn-primary py-md-2 px-md-4 mt-2"
                  variant="contained"
                  onClick={() => handleSubscribeEmail()}
                >
                  Submitt Now
                </Button>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <p style={{ fontSize: '1rem' }}>
                  Connect with Us On IOS and Android !
                </p>
                <div className="row">
                  <div className="col-2" style={{ marginTop: '0.2rem' }}>
                    <a style={{ cursor: 'pointer' }}>
                      <AndroidTwoToneIcon
                        style={{ fontSize: '2rem' }}
                      ></AndroidTwoToneIcon>
                    </a>
                  </div>
                  <div className="col-2">
                    <a style={{ cursor: 'pointer' }}>
                      <AppleIcon style={{ fontSize: '2.3rem' }}></AppleIcon>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white py-4 px-sm-3 px-md-5">
        <p className="m-0 text-center text-white">
          &copy;
          <a className="text-white font-weight-medium">InstaLaundry 2021</a>.
          All Rights Reserved.
        </p>
      </div>
      {/* <DefaultFormEmail /> */}
    </div>
  );
}
