import React, { Suspense, useEffect, useState } from 'react';

// components
import Slider from '../components/Slider/Slider';
import MyTextFeild from '../components/common/MyTextFeild';
import Button from '@material-ui/core/Button';
import { Colors } from '../config/Colors';
import { getAllPostalCodes } from '../services/UserServices';
import { toast } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// lazy pages
const About = React.lazy(() => import('./About'));

// laxy components
const Services = React.lazy(() => import('../components/Services'));
const Testimonial = React.lazy(() => import('../components/Testimonial'));

export default function Home() {
  const [show, setShow] = useState(false);
  const [code, setCode] = useState([]);
  const [postalCodes, setPostalCodes] = useState([]);

  const handlePostalCodes = async () => {
    try {
      let res = await getAllPostalCodes();
      if (res) {
        setPostalCodes(res);
      } else {
        setPostalCodes([]);
      }
    } catch (error) {
      console.log('getting all users error: ', error);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handlePostalCodes();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCodeCheck = () => {
    let tempCode = code.substr(0, 3);

    let ava = false;
    postalCodes.map((item) => {
      if (item.code.toLowerCase() === tempCode.toLowerCase()) {
        ava = true;
      }
    });

    if (ava) {
      toast.success('Congratulations we are available in you area');
    } else {
      toast.error('Sorry we are not available in you area');
    }
    console.log(postalCodes, tempCode);
  };

  const handleScroll = function (event) {
    // let scrollTop = event.srcElement.body.scrollTop,
    //     itemTranslate = Math.min(0, scrollTop / 3 - 60);

    setShow(true);
  };

  return (
    <div>
      <Slider />
      <Suspense fallback={<div></div>}>
        <div className="container-fluid" style={{ marginTop: '11rem' }}>
          <div className="row d-flex justify-content-center align-items-center">
            <div
              className="col-8 d-flex justify-content-center align-items-center"
              style={{
                color: Colors.secondary,
                fontSize: '2.3vw',
                fontWeight: 'bold',
                marginTop:'-2rem'
              }}
            >
              Check if we are available in your area or not!
            </div>
          </div>
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ marginTop: '2.5rem' }}
          >
            <div className="col-8 d-flex justify-content-center align-items-center">
              <MyTextFeild
                width={'50%'}
                label="Postal Code"
                value={code}
                onChange={(value) => setCode(value)}
              />
            </div>
          </div>
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ marginTop: '2.5rem' }}
          >
            <div className="col-8 d-flex justify-content-center align-items-center">
              <Button
                style={{
                  backgroundColor: Colors.secondary,
                  color: Colors.white,
                }}
                className="btn btn-primary py-md-2 px-md-4 mt-2"
                variant="contained"
                onClick={() => handleCodeCheck()}
              >
                Check
              </Button>
            </div>
          </div>
        </div>
        <Services />

        {show ? <About removeHeader={true} /> : null}

        <Testimonial />
      </Suspense>
    </div>
  );
}
