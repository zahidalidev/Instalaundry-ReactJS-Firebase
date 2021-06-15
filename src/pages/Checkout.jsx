import React from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

//config
import { Colors } from '../config/Colors';
import MyTextFeild from '../components/common/MyTextFeild';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Checkout() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="page-header container-fluid bg-secondary pt-2 pt-lg-4 pb-2 mb-5">
        <div className="container py-1">
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1
                className="mb-4 mb-md-0 text-white"
                className="sliderMainHeading"
                style={{ fontSize: '2.5rem', marginTop: '6rem' }}
              >
                Checkout
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Info Start */}
      <div className="container-fluid" style={{ marginTop: '6rem' }}>
        <div className="row p-4 d-flex justify-content-center align-items-center">
          <div className="col"> </div>
          <div
            className="col-8 "
            style={{
              color: Colors.secondary,
              fontSize: '3vw',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
            }}
          >
            Contact Information
          </div>
        </div>
        <div
          className="row  d-flex justify-content-center align-items-center"
          style={{ marginTop: '3rem' }}
        >
          <div className="col-5 text-white " style={{ height: '30rem' }}>
            <div className="row d-flex justify-content-center align-items-center">
              <MyTextFeild
                width="78%"
                label="First Name"
                onChange={(value) => console.log(value)}
              ></MyTextFeild>
            </div>
            <div
              className="row d-flex justify-content-center align-items-center "
              style={{ marginTop: '3rem' }}
            >
              <MyTextFeild
                width="78%"
                label="Phone Number"
                onChange={(value) => console.log(value)}
              ></MyTextFeild>
            </div>
            <div
              className="row d-flex justify-content-center align-items-center"
              style={{ marginTop: '3rem' }}
            >
              <FormControl
                variant="outlined"
                className={classes.formControl}
                style={{ width: '78%' }}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div
              className="row d-flex justify-content-center align-items-center"
              style={{ marginTop: '3rem' }}
            >
              <FormControl
                variant="outlined"
                className={classes.formControl}
                style={{ width: '78%' }}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                  label="Status"
                >
                  <MenuItem value={10}>Single</MenuItem>
                  <MenuItem value={20}>Married</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="col-5  text-white " style={{ height: '30rem' }}>
            <div className="row d-flex justify-content-start align-items-start">
              <MyTextFeild
                width="78%"
                label="Last Name"
                onChange={(value) => console.log(value)}
                style={{ fontSize: '5rem' }}
              ></MyTextFeild>
            </div>
            <div
              className="row d-flex justify-content-start align-items-start"
              style={{ marginTop: '3rem' }}
            >
              <MyTextFeild
                width="78%"
                label="Email Address"
                onChange={(value) => console.log(value)}
                style={{ fontSize: '5rem' }}
              ></MyTextFeild>
            </div>
            <div
              className="row d-flex justify-content-start align-items-start"
              style={{ marginTop: '3rem' }}
            >
              <div className="col-5 d-flex  align-items-start justify-content-start">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Date of Birth"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Info End */}

      {/* Personal Info Start */}
      <div className="container-fluid">
        <div className="row p-4 d-flex justify-content-center align-items-center">
          <div className="col"> </div>
          <div
            className="col-8 "
            style={{
              color: Colors.secondary,
              fontSize: '3vw',
              fontWeight: 'bold',
            }}
          >
            Personal Information
          </div>
        </div>
        <div
          className="row  d-flex justify-content-center align-items-center"
          style={{ marginTop: '3rem' }}
        >
          <div className="col-5 text-white " style={{ height: '30rem' }}>
            <div className="row d-flex justify-content-center align-items-center">
              <MyTextFeild
                width="78%"
                label="Comapny Name(Optional)"
                onChange={(value) => console.log(value)}
              ></MyTextFeild>
            </div>
            <div
              className="row d-flex justify-content-center align-items-center "
              style={{ marginTop: '3rem' }}
            >
              <MyTextFeild
                width="78%"
                label="Street Address"
                onChange={(value) => console.log(value)}
              ></MyTextFeild>
            </div>
            <div
              className="row d-flex justify-content-center align-items-center"
              style={{ marginTop: '3rem' }}
            >
              <MyTextFeild
                width="78%"
                label="Town / City"
                onChange={(value) => console.log(value)}
              ></MyTextFeild>
            </div>
            <div
              className="row d-flex justify-content-center align-items-center"
              style={{ marginTop: '3rem' }}
            >
              <MyTextFeild
                width="78%"
                label="Postal Code"
                onChange={(value) => console.log(value)}
              ></MyTextFeild>
            </div>
          </div>
          <div className="col-5  text-white " style={{ height: '30rem' }}>
            <div
              className="row d-flex justify-content-start align-items-start"
              style={{ marginTop: '-0.5rem' }}
            >
              <FormControl
                variant="outlined"
                className={classes.formControl}
                style={{ width: '78%' }}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                  label="Status"
                >
                  <MenuItem value={10}>Canada</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div
              className="row d-flex justify-content-start align-items-start"
              style={{ marginTop: '2.2rem', marginLeft: '-0.3rem' }}
            >
              <MyTextFeild
                width="78%"
                label="Apartment, Suite, unit etc(Optional)"
                onChange={(value) => console.log(value)}
                style={{ fontSize: '5rem' }}
              ></MyTextFeild>
            </div>
            <div
              className="row d-flex justify-content-start align-items-start"
              style={{ marginTop: '2.2rem' }}
            >
              <FormControl
                variant="outlined"
                className={classes.formControl}
                style={{ width: '78%' }}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Province
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                  label="Status"
                >
                  <MenuItem value={10}>British Coumbia</MenuItem>
                  <MenuItem value={20}>Ontario</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      {/* Personal Info End */}
    </>
  );
}
