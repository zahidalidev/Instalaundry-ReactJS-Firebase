import Button from '@material-ui/core/Button';
import { Colors } from './../../config/Colors';

import { useHistory } from 'react-router';

export default function PricingPlan() {
  const history = useHistory();

  return (
    <>
      <div className="container-fluid pt-5 pb-3">
        <div className="container">
          <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
            Our Pricing Plan
          </h6>
          <h1 className="display-4 text-center mb-5">The Best Price</h1>
          <div className="row">
            <div className="col-lg-4 mb-4 ">
              <div
                className="bg-light text-center mb-2 pt-4"
                style={{ borderRadius: '1rem', height: '35rem' }}
              >
                <div
                  className="d-inline-flex flex-column align-items-center justify-content-center bg-secondary rounded-circle shadow mt-2 mb-4"
                  style={{
                    width: '255px',
                    height: '250px',
                    border: '15px solid #ffffff',
                  }}
                >
                  <h3 className="text-white">Individual</h3>
                  <h1 className="display-4 text-white mb-0">
                    <small
                      className="align-top"
                      style={{ fontSize: '22px', lineHeight: '45px' }}
                    >
                      $
                    </small>
                    9.99
                    <small
                      className="align-bottom"
                      style={{ fontSize: '16px', lineHeight: '40px' }}
                    >
                      /Week
                    </small>
                  </h1>
                </div>
                <div className="d-flex flex-column align-items-start py-3">
                  <p>
                    <i
                      className="fa fa-hand-o-right"
                      aria-hidden="true"
                      style={{ marginLeft: '1rem' }}
                    ></i>{' '}
                    Upto to 10 lbs
                  </p>
                  <p>
                    <i
                      className="fa fa-hand-o-right"
                      aria-hidden="true"
                      style={{ marginLeft: '1rem' }}
                    ></i>{' '}
                    Approx. 1 regular sized garbage bag
                  </p>
                  <p>
                    <i
                      className="fa fa-hand-o-right"
                      aria-hidden="true"
                      style={{ marginLeft: '1rem' }}
                    ></i>{' '}
                    Cancel anytime
                  </p>
                </div>
                <Button
                  style={{
                    backgroundColor: '#62c7ce',
                    color: Colors.white,
                    height: '2.6rem',
                    width: '9rem',
                    borderRadius: '0.5rem',
                  }}
                  className="btn btn-primary py-md-3 px-md-2 mt-2"
                  variant="contained"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div
                className="bg-light text-center mb-2 pt-4"
                style={{ borderRadius: '1rem', height: '35rem' }}
              >
                <div
                  className="d-inline-flex flex-column align-items-center justify-content-center bg-primary rounded-circle shadow mt-2 mb-4"
                  style={{
                    width: '255px',
                    height: '250px',
                    border: '15px solid #ffffff',
                  }}
                >
                  <h3 className="text-white">Couples</h3>
                  <h1 className="display-4 text-white mb-0">
                    <small
                      className="align-top"
                      style={{ fontSize: '22px', lineHeight: '45px' }}
                    >
                      $
                    </small>
                    <span style={{ fontSize: '3.6vw' }}>18.99</span>
                    <small
                      className="align-bottom"
                      style={{ fontSize: '16px', lineHeight: '40px' }}
                    >
                      /Week
                    </small>
                  </h1>
                </div>
                <div className="d-flex flex-column align-items-start py-3">
                  <p>
                    <i
                      className="fa fa-hand-o-right"
                      aria-hidden="true"
                      style={{ marginLeft: '1rem' }}
                    ></i>{' '}
                    Upto 25 lbs
                  </p>
                  <p>
                    <i
                      className="fa fa-hand-o-right"
                      aria-hidden="true"
                      style={{ marginLeft: '1rem' }}
                    ></i>{' '}
                    Approx. 2 regular sized garbage bags
                  </p>
                  <p>
                    <i
                      className="fa fa-hand-o-right"
                      aria-hidden="true"
                      style={{ marginLeft: '1rem' }}
                    ></i>{' '}
                    Cancel anytime
                  </p>
                </div>
                <Button
                  style={{
                    backgroundColor: '#1f4376',
                    color: Colors.white,
                    height: '2.6rem',
                    width: '9rem',
                    borderRadius: '0.5rem',
                  }}
                  className="btn btn-primary py-md-3 px-md-2 mt-2"
                  variant="contained"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div
                className="bg-light text-center mb-2 pt-4"
                style={{ borderRadius: '1rem', height: '35rem' }}
              >
                <div
                  className="d-inline-flex flex-column align-items-center justify-content-center bg-secondary rounded-circle shadow mt-2 mb-4"
                  style={{
                    width: '255px',
                    height: '250px',
                    border: '15px solid #ffffff',
                  }}
                >
                  <h3 className="text-white">Family</h3>
                  <h1 className="display-4 text-white mb-0">
                    <small
                      className="align-top"
                      style={{ fontSize: '22px', lineHeight: '45px' }}
                    >
                      $
                    </small>
                    <span style={{ fontSize: '3.6vw' }}>26.99</span>
                    <small
                      className="align-bottom"
                      style={{ fontSize: '16px', lineHeight: '40px' }}
                    >
                      /Week
                    </small>
                  </h1>
                </div>
                <div className="d-flex flex-column align-items-start py-3">
                  <p>
                    <i
                      className="fa fa-hand-o-right"
                      aria-hidden="true"
                      style={{ marginLeft: '1rem' }}
                    ></i>{' '}
                    Upto to 40 lbs
                  </p>
                  <p>
                    <i
                      className="fa fa-hand-o-right"
                      aria-hidden="true"
                      style={{ marginLeft: '1rem' }}
                    ></i>{' '}
                    Approx. 3 regular sized garbage bags
                  </p>
                  <p>
                    <i
                      className="fa fa-hand-o-right"
                      aria-hidden="true"
                      style={{ marginLeft: '1rem' }}
                    ></i>{' '}
                    Cancel anytime
                  </p>
                </div>
                <Button
                  onClick={() => history.push("/checkout")}
                  style={{
                    backgroundColor: '#62c7ce',
                    color: Colors.white,
                    height: '2.6rem',
                    width: '9rem',
                    borderRadius: '0.5rem',
                  }}
                  className="btn btn-primary py-md-3 px-md-2 mt-2"
                  variant="contained"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
