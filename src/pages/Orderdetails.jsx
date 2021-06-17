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

//components
import Breadcrumbs from '../components/common/Breadcrumbs';
import { Colors } from './../config/Colors';
import MyTextFeild from '../components/common/MyTextFeild';

const columns = [
  { id: 'services', label: 'Services', minWidth: 550 },
  { id: 'total', label: 'Total', minWidth: 10 },
];

function createData(services, total) {
  return { services, total };
}

const rows = [
  createData('Open Load x 1', '$9.99'),
  createData('Subtotal', '$9.99'),
  createData('Service Fee', '$0.00'),
  createData('GST (5.00%)', '$0.50'),
  createData('Total', '$10.99'),
  ,
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 500,
  },
});

export default function Orderdetails() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [value, setValue] = React.useState(' ');

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
            className="col-md-8  d-flex justify-content-center align-items-center"
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
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <TableContainer
              className={classes.container}
              style={{ border: '1px solid #194376', borderRadius: '0.5rem' }}
            >
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          color: Colors.secondary,
                          fontSize: '1.4rem',
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                style={{
                                  fontSize: '1rem',
                                }}
                              >
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{ marginTop: '7rem', height: '25rem' }}
      >
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-5  d-flex justify-content-center align-items-center">
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                style={{
                  color: Colors.secondary,
                  fontSize: '1.5rem',
                  fontStyle: 'italic',
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
                />
                <FormControlLabel
                  value="paynow"
                  control={<Radio />}
                  label="Pay Tip Now"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="No Tip"
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
                marginTop: '2rem',
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
