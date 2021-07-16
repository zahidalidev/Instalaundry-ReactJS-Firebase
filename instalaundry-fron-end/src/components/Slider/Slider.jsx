import React, { useEffect, useState, Suspense } from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

import './Slider.css';
import { Colors } from '../../config/Colors';
import img1 from '../../assets/img/carousel-1.jpg';

// lazy component
const MyInfo = React.lazy(() => import('../MyInfo'));

function Slider(props) {
  const history = useHistory();

  return (
    <>
      <div className="container-fluid p-0">
        <div
          id="header-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img id="im" className="w-100 imgClass" src={img1} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900rem' }}>
                  <h4
                    className=" text-white text-uppercase mb-md-6"
                    style={{ fontSize: '2.6rem' }}
                  >
                    Full Load of Laundry starting <br /> at $9.99/Week
                  </h4>
                  <h1
                    className=" display-3 text-white mb-md-4"
                    style={{ fontSize: '2rem' }}
                  >
                    12 Hours service guarantee
                  </h1>
                  {/* <a className="btn btn-primary py-md-3 px-md-5 mt-2">GET STARTED</a> */}
                  <Button
                    onClick={() => history.push('/pricing')}
                    style={{
                      backgroundColor: Colors.secondary,
                      color: Colors.white,
                    }}
                    className="btn btn-primary py-md-3 px-md-4 mt-2"
                    variant="contained"
                  >
                    GET STARTED
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div></div>}>
        <MyInfo />
      </Suspense>
    </>
  );
}

export default Slider;
