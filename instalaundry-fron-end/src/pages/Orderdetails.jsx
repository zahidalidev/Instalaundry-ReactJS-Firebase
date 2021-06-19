import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

// Stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

//components
import Breadcrumbs from '../components/common/Breadcrumbs';
import { Colors } from './../config/Colors';
import MyTextFeild from '../components/common/MyTextFeild';
import Paynow from '../components/client/Paynow';

// config
import configObj from '../config/config.json';

const stripePromise = loadStripe(configObj.stripPublicId);

export default function Orderdetails(props) {
  const [value, setValue] = useState('');
  const [tipButton, showTipButton] = useState(false);
  const [tipValue, showTipValue] = useState('');

  const [oldTotalPrice, setOldTotalPrice] = useState(0);
  const [subscribedDetail, setSubscribedDetail] = useState();

  const [orderDetail, setOrderDetails] = useState([
    { id: 1, title: 'Open Load x 1', price: 0 },
    { id: 2, title: 'Subtotal', price: 0 },
    { id: 3, title: 'Tip', price: 0 },
    { id: 4, title: 'GST (5.00%)', price: 0 },
    { id: 5, title: 'Total', price: 0 },
  ]);

  const [tips, setTips] = useState([
    { id: 1, title: '12%', price: 0 },
    { id: 2, title: '18%', price: 0 },
    { id: 3, title: '21%', price: 0 },
  ]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (props.history.location.state.checkOutObj !== undefined) {
      setSubscribedDetail(props.history.location.state.checkOutObj);
      const { price, planTitle } = props.history.location.state.checkOutObj;

      let newOrderDetail = [...orderDetail];
      newOrderDetail[0].title = planTitle;
      newOrderDetail[0].price = price;
      newOrderDetail[1].price = price;
      newOrderDetail[3].price = (price * 0.05).toFixed(2);
      newOrderDetail[4].price = (price + price * 0.05).toFixed(2);
      setOldTotalPrice((price + price * 0.05).toFixed(2));
      setOrderDetails(newOrderDetail);

      let newTips = [...tips];
      newTips[0].price = (price * 0.12).toFixed(2);
      newTips[1].price = (price * 0.18).toFixed(2);
      newTips[2].price = (price * 0.21).toFixed(2);
      setTips(newTips);
    }

    setOrderDetails(oldOrderDetail);
  }, [props.history.location.state]);

  const handleTip = (index) => {
    let tipPrice = tips[index].price;
    showTipValue(tipPrice);
    let newOrderDetail = [...orderDetail];
    newOrderDetail[2].price = tipPrice;
    let newTotal = parseFloat(oldTotalPrice) + parseFloat(tipPrice);
    newOrderDetail[4].price = newTotal.toFixed(2);
    setOrderDetails(newOrderDetail);
  };

  const handleNoTip = () => {
    showTipButton(false);
    let newOrderDetail = [...orderDetail];
    newOrderDetail[2].price = 0;
    newOrderDetail[4].price = oldTotalPrice;
    setOrderDetails(newOrderDetail);
  };

  return (
    <div>
      <Breadcrumbs
        title="Order Details"
        currentPage="Order details"
        previousPages={['Home', 'Checkout']}
      />
      <div className="container-fluid">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ marginTop: '5rem' }}
        >
          <div
            className="col-md-12  d-flex justify-content-center align-items-center"
            style={{
              color: Colors.secondary,
              fontSize: '3vw',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
            }}
          >
            Order Details
          </div>
        </div>
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ marginTop: '5rem' }}
        >
          <div className="d-flex flex-column justify-content-start col-md-6 ">
            <div
              style={{ marginTop: '2rem', height: '30rem', width: '100%' }}
              className="justify-content-start"
            >
              {/* <DataGrid
                rows={orderRows}
                columns={orderDetailColumns}
                pageSize={6}
                checkboxSelection={false}
              /> */}
              <table className="table" style={{ border: '1px solid #194376' }}>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Services</th>
                    <th scope="col"></th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetail.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{item.id}</th>
                      <td>{item.title}</td>
                      <td></td>
                      <td>${item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{ marginTop: '1rem', height: '25rem' }}
      >
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-5  d-flex justify-content-center align-items-center">
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                style={{
                  color: Colors.secondary,
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                }}
              >
                Tip your laundry valet :
              </FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
                style={{ marginTop: '1rem' }}
              >
                <FormControlLabel
                  value="paylater"
                  control={<Radio />}
                  label="Pay Tip Later (After Delivery)"
                  onClick={() => handleNoTip()}
                />
                <FormControlLabel
                  value="paynow"
                  control={<Radio />}
                  label="Pay Tip Now"
                  onClick={() => showTipButton(true)}
                />

                {tipButton ? (
                  <div className="container-fluid">
                    <div
                      className="row d-flex justify-content-center align-items-center"
                      style={{
                        color: Colors.secondary,
                        fontSize: '1rem',
                        fontWeight: 'bold',
                      }}
                    >
                      Thank you so much, {tipValue} of tip is added to the
                      totals!
                    </div>
                    <div
                      className="row d-flex justify-content-start align-items-start"
                      style={{ marginTop: '1rem' }}
                    >
                      {tips.map((item, index) => (
                        <div className="col-3 justify-content-start align-items-start">
                          <Button
                            style={{
                              backgroundColor: '#1a1a1a',
                              color: Colors.white,
                              height: '2.5rem',
                              width: '5rem',
                              fontSize: '0.8rem',
                            }}
                            onClick={() => handleTip(index)}
                            className="btn btn-primary py-md-2 px-md-2 mt-2"
                            variant="contained"
                          >
                            {`${item.title}(${item.price})`}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="No Tip"
                  onClick={() => handleNoTip()}
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="col-6  justify-content-start align-items-start">
            <div
              className="row d-flex justify-content-center align-items-center"
              style={{
                color: Colors.secondary,
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginTop: '1rem',
              }}
            >
              Have Coupon / Referral Code?
            </div>
            <div
              className="row d-flex justify-content-center align-items-center"
              style={{
                color: Colors.black,
                fontSize: '1rem',
                marginTop: '1.5rem',
              }}
            >
              (If you have a coupon or referral code, please apply it below)
            </div>
            <div
              className="row d-flex justify-content-center align-items-center"
              style={{ marginTop: '2rem' }}
            >
              <MyTextFeild
                width={'55%'}
                label="Coupon"
                onChange={(value) => console.log(value)}
              />
            </div>
            <div
              className="row d-flex justify-content-center align-items-center"
              style={{ marginTop: '1.3rem' }}
            >
              <Button
                style={{
                  backgroundColor: Colors.primary,
                  color: Colors.white,
                }}
                className="btn btn-primary py-md-2 px-md-4 mt-2"
                variant="contained"
              >
                Apply Coupon
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Elements stripe={stripePromise}>
        <Paynow
          planDetails={subscribedDetail}
          tipPrice={orderDetail[2].price}
        />
      </Elements>
    </div>
  );
}
