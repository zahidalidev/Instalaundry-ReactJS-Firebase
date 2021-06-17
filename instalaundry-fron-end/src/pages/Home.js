import React, { Suspense, useEffect, useState } from 'react';

// components
import Slider from '../components/Slider/Slider';
import MyTextFeild from '../components/common/MyTextFeild';

// lazy pages
const About = React.lazy(() => import('./About'));

// laxy components
const Services = React.lazy(() => import('../components/Services'));
const Testimonial = React.lazy(() => import('../components/Testimonial'));

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = function (event) {
    // let scrollTop = event.srcElement.body.scrollTop,
    //     itemTranslate = Math.min(0, scrollTop / 3 - 60);

    setShow(true);
  };

  return (
    <div>
      <Slider />
      <Suspense fallback={<div></div>}>
        <Services />
        {show ? <About removeHeader={true} /> : null}
        {/* <div className="row d-flex justify-content-start align-items-start">
          <div className="col-6 d-flex justify-content-start align-items-start"> */}
        {/* <div className="row d-flex justify-content-start align-items-start">
          <div className="col-5 d-flex justify-content-start align-items-start">
            Check if we are available in your area!{' '}
            <MyTextFeild
              width={'60%'}
              label="Postal Code"
              onChange={(value) => console.log(value)}
            />
          </div>
        </div> */}

        {/* </div> */}
        {/* </div> */}

        <Testimonial />
      </Suspense>
    </div>
  );
}
