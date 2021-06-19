import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';

//components
import Breadcrumbs from '../components/common/Breadcrumbs';
import { Colors } from './../config/Colors';
import MyTextFeild from '../components/common/MyTextFeild';
import Paynow from '../components/client/Paynow';

const columns = [
  { id: 'services', label: 'Services', minWidth: 550 },
  { id: 'total', label: 'Total', minWidth: 10 },
];

function createData(services, total) {
  return { services, total };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 500,
  },
});

const orderDetailColumns = [
  { field: 'services', headerName: 'Services', width: 170 },
  { field: ' ', headerName: '', width: 150 },
  { field: ' ', headerName: '', width: 120 },
  { field: 'total', headerName: 'Total', width: 140 },
];

export default function Orderdetails() {
  const [value, setValue] = React.useState(' ');
  const [tipButton, showTipButton] = React.useState(false);

  const orderRows = [
    { id: 1, services: 'Open Load x 1', total: '$9.99' },
    { id: 2, services: 'Subtotal', total: '$9.99' },
    { id: 3, services: 'Service Fee', total: '$0.00' },
    { id: 4, services: 'GST (5.00%)', total: '$0.50' },
    { id: 5, services: 'Total', total: '$10.99' },
  ];
  const handleChange = (event) => {
    setValue(event.target.value);
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
                  <tr>
                    <th scope="row">1</th>
                    <td>Open Load x 1</td>
                    <td></td>
                    <td>$9.99</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Subtotal</td>
                    <td></td>
                    <td>$9.99</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Service Fee</td>
                    <td></td>
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>GST</td>
                    <td></td>
                    <td>$0.50</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Total</td>
                    <td></td>
                    <td>$10.50</td>
                  </tr>
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
                  onClick={() => showTipButton(false)}
                />
                <FormControlLabel
                  value="paynow"
                  control={<Radio />}
                  label="Pay Tip Now"
                  onClick={() => showTipButton(true)}
                />

                {tipButton ? (
                  <div className="container-fluid">
                    <div className="row d-flex justify-content-center align-items-center">
                      Thank you so much, 21% of tip is added to the totals!
                    </div>
                    <div className="row d-flex justify-content-start align-items-start">
                      <div className="col-3 justify-content-start align-items-start">
                        <Button
                          style={{
                            backgroundColor: '#1a1a1a',
                            color: Colors.white,
                            height: '2.5rem',
                            width: '5rem',
                            fontSize: '0.8rem',
                          }}
                          className="btn btn-primary py-md-2 px-md-2 mt-2"
                          variant="contained"
                        >
                          12%(1.20)
                        </Button>
                      </div>
                      <div className="col-3 justify-content-start align-items-start">
                        <Button
                          style={{
                            backgroundColor: '#1a1a1a',
                            color: Colors.white,
                            height: '2.5rem',
                            width: '5rem',
                            fontSize: '0.8rem',
                          }}
                          className="btn btn-primary py-md-2 px-md-2 mt-2"
                          variant="contained"
                        >
                          18%(1.80)
                        </Button>
                      </div>
                      <div className="col-3 justify-content-start align-items-start">
                        <Button
                          style={{
                            backgroundColor: '#1a1a1a',
                            color: Colors.white,
                            height: '2.5rem',
                            width: '5rem',
                            fontSize: '0.8rem',
                          }}
                          className="btn btn-primary py-md-2 px-md-2 mt-2"
                          variant="contained"
                        >
                          21%(2.10)
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="No Tip"
                  onClick={() => showTipButton(false)}
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
                marginTop: '-2.5rem',
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
    </div>
  );
}
