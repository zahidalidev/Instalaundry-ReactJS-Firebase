import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button';

// config
import { Colors } from './../config/Colors';

import logo from '../assets/img/logo1.png';

export default function Footer() {
  const history = useHistory()
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
              Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem
              lorem sit sed elitr sit no, sed kasd et ipsum dolor duo dolor
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: '38px', height: '38px' }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: '38px', height: '38px' }}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: '38px', height: '38px' }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: '38px', height: '38px' }}
              >
                <i className="fab fa-instagram"></i>
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
              Lorem Ipsum clita stet nonumy clita diam vero, et et ipsum diam
              labore
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
              <i className="fa fa-envelope mr-2"></i>info@example.com
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
              >
                <i className="fa fa-angle-right mr-2"></i>Home
              </a>
              <a
                style={{
                  fontFamily: 'Courier',
                  wordSpacing: -4,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
                className="text-white mb-2"
              >
                <i className="fa fa-angle-right mr-2"></i>About Us
              </a>
              <a
                style={{
                  fontFamily: 'Courier',
                  wordSpacing: -4,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
                className="text-white mb-2"
              >
                <i className="fa fa-angle-right mr-2"></i>Services
              </a>
              <a
                style={{
                  fontFamily: 'Courier',
                  wordSpacing: -4,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
                className="text-white mb-2"
              >
                <i className="fa fa-angle-right mr-2"></i>Pricing
              </a>
              <a
                style={{
                  fontFamily: 'Courier',
                  wordSpacing: -4,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
                className="text-white"
              >
                <i className="fa fa-angle-right mr-2"></i>Contact Us
              </a>
              <a onClick={() => history.push('/admin')} style={{ fontFamily: 'Courier', wordSpacing: -4, fontSize: '0.9rem', cursor: "pointer" }} className="text-white">
                <i className="fa fa-angle-right mr-2"></i>Admin
              </a>
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
                  style={{ borderRadius: '0.5rem' }}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control border-0"
                  placeholder="Your Email"
                  required="required"
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
                >
                  Submitt Now
                </Button>
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
    </div>
  );
}
