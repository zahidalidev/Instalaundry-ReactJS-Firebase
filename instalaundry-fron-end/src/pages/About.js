import { Colors } from '../config/Colors';
import img1 from '../assets/img/about.jpg';
import img2 from '../assets/img/about2.jpg';

import CountUp from 'react-countup';

export default function About(props) {
  return (
    <>
      {props.removeHeader ? null : (
        <div className="page-header container-fluid bg-secondary pt-2 pt-lg-4 pb-5 mb-5">
          <div className="container py-1" style={{ marginTop: '3rem' }}>
            <div className="row  align-items-center py-4">
              <div className="col-md-6 text-center text-md-left">
                <h1 className="mb-6 mb-md-0 text-white">About Us</h1>
              </div>
              <div className="col-md-6 text-center text-md-right">
                <div className="d-inline-flex align-items-center">
                  <a className="btn text-white">Home</a>
                  <i className="fas fa-angle-right text-white"></i>
                  <a className="btn text-white disabled">About</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img
                className="img-fluid"
                src={img1}
                style={{
                  borderRadius: '1.5rem',
                  width: '25rem',
                  marginTop: '2rem',
                }}
              ></img>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 pl-lg-5">
              {/* <h6 className="text-secondary text-uppercase font-weight-medium mb-3">
                Learn About Us
              </h6> */}
              <h1 className="mb-4">
                We Are Quality Laundry Provider In Your City
              </h1>
              <h5 className="font-weight-medium font-italic mb-4">
                InstaLaundry is a revolutionary, eco-friendly valet service
              </h5>
              <p className="mb-2">
                A Quality Laundry Service Provider In The Community A locally
                inspired and home grown business in British Columbia. Our vision
                and goal is to push the boundaries of tr aditional laundromat
                services. We want to take out the stress of carrying your
                laundry outdoors and the time it takes to watch over your load
                in a creaky fluorescent store. Making a trip to your local
                laundromat is just not necessary. A t Instalaundry we offer a
                subscription based model to eliminate the need for families and
                individuals to step out of th eir home. Our team consists of
                dedicated individuals working hard to ensure every item of
                clothing is washed and fo lded back in your hamper then
                delivered to your doorstep.
              </p>
              <div className="row">
                <div className="col-sm-6 pt-3">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-check text-primary mr-2"></i>
                    <p className="text-secondary font-weight-medium m-0">
                      Quality Laundry Service
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 pt-3">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-check text-primary mr-2"></i>
                    <p className="text-secondary font-weight-medium m-0">
                      Express Fast Delivery
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 pt-3">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-check text-primary mr-2"></i>
                    <p className="text-secondary font-weight-medium m-0">
                      Highly Professional Staff
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 pt-3">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-check text-primary mr-2"></i>
                    <p className="text-secondary font-weight-medium m-0">
                      100% Satisfaction Gguarantee
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*-- Features Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 m-0 my-lg-5 pt-0 pt-lg-5 pr-lg-5">
              {/* <h6 className="text-secondary text-uppercase font-weight-medium mb-3">
                Our Features
              </h6> */}
              <h1 className="mb-4">Why Instalaundary</h1>
              <p style={{ marginTop: '2.5rem' }}>
                We are not a specialty dry cleaner, we are a simple laundry wash
                and delivery service supporting every day families, couples, and
                individuals. We have a team of professional staff who are always
                ready to support you, whether it is th rough email, online chat
                or our direct phone line. We are starting in select
                neighbourhoods to ensure we provide you with the best service,
                check our location bar to see if we are in your neighbourhood or
                drop us an email to let us kno w you're waiting for us! Simple
                Service, no hidden fees Professional Staff Instant Support
              </p>
              <div className="row">
                <div className="col-sm-6 mb-4">
                  <h1 className="text-secondary" data-toggle="counter-up">
                    <CountUp end={12} duration={20}></CountUp>{' '}
                    <span style={{ fontSize: '1.5rem' }}>Years</span>
                  </h1>

                  <h5 className="font-weight-bold">Experience</h5>
                </div>
                <div className="col-sm-6 mb-4">
                  <h1 className="text-secondary" data-toggle="counter-up">
                    <CountUp end={20} duration={20}></CountUp> +
                  </h1>

                  <h5 className="font-weight-bold">Employees</h5>
                </div>
                <div className="col-sm-6 mb-4">
                  <h1 className="text-secondary" data-toggle="counter-up">
                    <CountUp end={100} duration={10}></CountUp> +
                  </h1>
                  <h5 className="font-weight-bold">Subscribers</h5>
                </div>
                <div className="col-sm-6 mb-4">
                  <h1 className="text-secondary" data-toggle="counter-up">
                    <CountUp end={2800} duration={10}></CountUp>
                  </h1>
                  <h5 className="font-weight-bold">Loads Done</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="d-flex flex-column align-items-center justify-content-center  h-100 py-1 px-3"
                style={{
                  borderRadius: '2rem',
                }}
              >
                <img
                  className="img-fluid"
                  src={img2}
                  style={{
                    borderRadius: '1.5rem',
                    width: '25rem',
                    marginTop: '7rem',
                  }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -- Features End -- */}
    </>
  );
}
