import { Colors } from '../config/Colors';
import img1 from '../assets/img/about.jpg';

import CountUp from 'react-countup';

export default function About(props) {
  return (
    <>
      {props.removeHeader ? null :
        <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
          <div className="container py-5">
            <div className="row align-items-center py-4">
              <div className="col-md-6 text-center text-md-left">
                <h1 className="mb-4 mb-md-0 text-white">About Us</h1>
              </div>
              <div className="col-md-6 text-center text-md-right">
                <div className="d-inline-flex align-items-center">
                  <a className="btn text-white">Home</a>
                  <i className="fas fa-angle-right text-white"></i>
                  <a className="btn text-white disabled">About Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      }
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img
                className="img-fluid"
                className="sliderMainHeading"
                src={img1}
                style={{
                  borderRadius: '1.5rem',
                  width: '25rem',
                  marginTop: '7rem',
                }}
              ></img>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 pl-lg-5">
              <h6 className="text-secondary text-uppercase font-weight-medium mb-3">
                Learn About Us
              </h6>
              <h1 className="mb-4">
                We Are Quality Laundry Provider In Your City
              </h1>
              <h5 className="font-weight-medium font-italic mb-4">
                InstaLaundry is a revolutionary, eco-friendly valet service
              </h5>
              <p className="mb-2">
                Lower Mainland, B.C. based company with over 10 years of
                experience with cleaners and providing laundry services. Coming
                together to push the boundaries of traditional laundromat
                cleaners. Offering a service to eliminate the need for families
                and individuals to step out of their home for laundry cleaning.
                Our team consists of dedicated individuals working hard to
                ensure every item of clothing is clean and folded back in your
                hamper and delivered at your doorstep.
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
              <h6 className="text-secondary text-uppercase font-weight-medium mb-3">
                Our Features
              </h6>
              <h1 className="mb-4">Why Choose Us</h1>
              <p>
                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor
              </p>
              <div className="row">
                <div className="col-sm-6 mb-4">
                  <h1 className="text-secondary" data-toggle="counter-up">
                    <CountUp end={10} duration={20}></CountUp>
                  </h1>
                  <h5 className="font-weight-bold">Years Expereince</h5>
                </div>
                <div className="col-sm-6 mb-4">
                  <h1 className="text-secondary" data-toggle="counter-up">
                    <CountUp end={200} duration={10}></CountUp>
                  </h1>
                  <h5 className="font-weight-bold">Expert Worker</h5>
                </div>
                <div className="col-sm-6 mb-4">
                  <h1 className="text-secondary" data-toggle="counter-up">
                    <CountUp end={1370} duration={10}></CountUp>
                  </h1>
                  <h5 className="font-weight-bold">Happy Clients</h5>
                </div>
                <div className="col-sm-6 mb-4">
                  <h1 className="text-secondary" data-toggle="counter-up">
                    <CountUp end={6242} duration={10}></CountUp>
                  </h1>
                  <h5 className="font-weight-bold">Dry Cleaning</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="d-flex flex-column align-items-center justify-content-center bg-secondary h-100 py-1 px-3"
                style={{
                  borderRadius: '2rem',
                }}
              >
                {/* <img
                  className="img-fluid"
                  className="sliderMainHeading"
                  src={img1}
                  style={{
                    borderRadius: '1.5rem',
                    width: '25rem',
                    marginTop: '7rem',
                  }}
                ></img> */}
                <i className="fa fa-5x fa-certificate text-white mb-5"></i>
                <h1
                  className="display-100 text-white mb-3"
                  style={{ textAlign: 'center' }}
                >
                  {/* <CountUp end={10} duration={12}></CountUp>+ */}Company
                  Acheivemnts
                </h1>
                <h1 className="text-white m-0"> </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -- Features End -- */}
    </>
  );
}
