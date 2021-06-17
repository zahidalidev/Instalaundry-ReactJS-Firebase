import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';

import { Colors } from './../../config/Colors';
import { getPlans } from '../../services/PricingServices';

export default function PricingPlan() {
  const history = useHistory();
  const [plans, setPlans] = useState([]);

  const getAllPlans = async () => {
    try {
      const res = await getPlans();
      setPlans(res);
    } catch (error) {
      console.log('Pricing Plans: ', error);
      setPlans([])
    }
  };

  useEffect(() => {
    getAllPlans();
  }, []);

  return (
    <>
      <div className="container-fluid pt-5 pb-3">
        <div className="container">
          <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
            Our Pricing Plan
          </h6>
          <h1 className="display-4 text-center mb-5">The Best Price</h1>
          <div className="row">
            {plans.map((item, index) => (
              <div key={index} className="col-lg-4 mb-4 ">
                <div
                  className="bg-light text-center mb-2 pt-4"
                  style={{ borderRadius: '1rem', height: '35rem' }}
                >
                  <div
                    className={`d-inline-flex flex-column align-items-center justify-content-center ${item.id === 2 ? 'bg-primary' : 'bg-secondary'
                      } rounded-circle shadow mt-2 mb-4`}
                    style={{
                      width: '255px',
                      height: '250px',
                      border: '15px solid #ffffff',
                    }}
                  >
                    <h3 className="text-white">{item.name}</h3>
                    <h1 className="display-4 text-white mb-0">
                      <small
                        className="align-top"
                        style={{ fontSize: '22px', lineHeight: '45px' }}
                      >
                        $
                      </small>
                      {item.price}
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
                      Upto to {item.weight}
                    </p>
                    <p>
                      <i
                        className="fa fa-hand-o-right"
                        aria-hidden="true"
                        style={{ marginLeft: '1rem' }}
                      ></i>{' '}
                      {item.size}
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
                    onClick={() =>
                      history.push('/checkout', { plan: 'hi data' })
                    }
                    style={{
                      backgroundColor:
                        item.id === 2 ? Colors.secondary : Colors.primaryBlue,
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
