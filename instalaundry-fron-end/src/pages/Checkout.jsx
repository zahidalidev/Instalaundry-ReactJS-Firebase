import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router'
import 'date-fns';

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

export default function Checkout(props) {
  const classes = useStyles();
  const history = useHistory()
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [age, setAge] = React.useState('');

  const [infoFeild, setInfoFeild] = useState([
    {
      id: 0,
      label: "Full Name",
      value: "",
    },
    {
      id: 1,
      label: "Phone Number",
      value: "",
    },
    {
      id: 2,
      label: "Email addres",
      value: "",
    },
  ])

  const [infoDropFeild, setInfoDropFeild] = useState([
    {
      id: 0,
      label: "Gender",
      value: "",
      dropItems: [
        {
          label: "Male",
          value: 'male'
        },
        {
          label: "Female",
          value: 'female'
        }
      ]
    },
    {
      id: 1,
      label: "Status",
      value: "",
      dropItems: [
        {
          label: "Single",
          value: 'single'
        },
        {
          label: "Married",
          value: 'married'
        }
      ]
    },
  ])

  const [pickupFeild, setPickupFeild] = useState([
    {
      id: 0,
      label: "Company Name",
      value: "",
    },
    {
      id: 1,
      label: "Street Address",
      value: "",
    },
    {
      id: 2,
      label: "Town City",
      value: "",
    },
    {
      id: 3,
      label: "Postal Code",
      value: "",
    },
  ])


  const [pickupDropFeild, setPickupDropFeild] = useState([
    {
      id: 0,
      label: "Countary",
      value: "",
      dropItems: [
        {
          label: "Canada",
          value: 'canada'
        }
      ]
    },
    {
      id: 1,
      label: "Province",
      value: "",
      dropItems: [
        {
          label: "British Columbia",
          value: 'british columbia'
        },
        {
          label: "Ontario",
          value: 'ontario'
        }
      ]
    },
  ])

  const [apartmentSuit, setApartmentSuit] = useState('')

  const infoFieldChange = (index, value) => {
    let tempFeilds = [...infoFeild];
    tempFeilds[index].value = value;
    setInfoFeild(tempFeilds)
  }

  const pickupFieldChange = (index, value) => {
    let tempFeilds = [...pickupFeild];
    tempFeilds[index].value = value;
    setPickupFeild(tempFeilds)
  }

  const dropInfoChange = (index, value) => {
    let tempFeilds = [...infoDropFeild];
    tempFeilds[index].value = value;
    setInfoDropFeild(tempFeilds)
  }

  const dropPickupChange = (index, value) => {
    let tempFeilds = [...pickupDropFeild];
    tempFeilds[index].value = value;
    setPickupDropFeild(tempFeilds)
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    console.log(props.history.location.state)
  }, [])

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
            {
              infoFeild.map((item, index) =>
                <div key={index} style={{ marginTop: index === 0 ? null : '3rem' }} className="row d-flex justify-content-center align-items-center">
                  <MyTextFeild
                    width="78%"
                    label={item.label}
                    onChange={(value) => infoFieldChange(index, value)}
                  ></MyTextFeild>
                </div>
              )
            }
          </div>

          <div className="col-5  text-white " style={{ height: '30rem' }}>

            {infoDropFeild.map((item, index) =>
              <div style={{ marginTop: index === 0 ? "-0.4rem" : '1.5rem' }} className="row d-flex justify-content-start align-items-start" >
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  style={{ width: '78%' }}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    {item.label}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={item.value}
                    onChange={(e) => dropInfoChange(index, e.target.value)}
                  >
                    {
                      item.dropItems.map((dropItem, i) =>
                        <MenuItem key={i} value={dropItem.value}>{dropItem.label}</MenuItem>
                      )
                    }
                  </Select>
                </FormControl>
              </div>
            )}

            <div
              className="row d-flex justify-content-start align-items-start"
              style={{ marginTop: '1.5rem' }}
            >
              <div className="col-5 d-flex align-items-start justify-content-start">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container>
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
      <div className="container-fluid" style={{ marginTop: "-6rem" }} >
        <div className="row p-4 d-flex justify-content-center align-items-center">
          <div
            className="col-md-8 d-flex justify-content-center align-items-center"
            style={{
              color: Colors.secondary,
              fontSize: '3vw',
              fontWeight: 'bold',
            }}
          >
            Pick Up Information
          </div>
        </div>
        <div className="row  d-flex justify-content-center align-items-center"
          style={{ marginTop: '3rem' }}
        >

          <div className="col-5 text-white " style={{ height: '30rem' }}>
            {pickupFeild.map((item, index) =>
              <div style={{ marginTop: index === 0 ? null : '3rem' }} className="row d-flex justify-content-center align-items-center">
                <MyTextFeild
                  width="78%"
                  label={item.label}
                  onChange={(value) => pickupFieldChange(index, value)}
                ></MyTextFeild>
              </div>
            )}
          </div>

          <div className="col-5  text-white " style={{ height: '30rem' }}>
            {pickupDropFeild.map((item, index) =>
              <div
                key={index}
                className="row d-flex justify-content-start align-items-start"
                style={{ marginTop: index === 0 ? "-0.5rem" : '1.4rem' }}
              >
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  style={{ width: '78%' }}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    {item.label}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={item.value}
                    onChange={(e) => dropPickupChange(index, e.target.value)}
                    label="Status"
                  >
                    {item.dropItems.map((drop, i) =>
                      <MenuItem key={i} value={drop.value}>{drop.label}</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </div>
            )}

            <div
              className="row d-flex justify-content-start align-items-start"
              style={{ marginTop: '2.2rem', marginLeft: '-0.3rem' }}
            >
              <MyTextFeild
                width="78%"
                label="Apartment, Suite, unit etc(Optional)"
                onChange={(value) => setApartmentSuit(value)}
                style={{ fontSize: '5rem' }}
              ></MyTextFeild>
            </div>
          </div>
        </div>
      </div>
      {/* Personal Info End */}
      <div className="container-fluid" style={{ marginTop: "-4rem" }} >
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ marginBottom: '5rem' }}
        >
          <Button
            onClick={() =>
              history.push('/orderdetails', { plan: 'hi data' })
            }
            style={{
              backgroundColor: Colors.secondary,
              color: Colors.white,
              height: '2.6rem',
              width: '9rem',
              borderRadius: '0.5rem',
            }}
            className="btn btn-primary py-md-3 px-md-2 mt-2"
            variant="contained"
          >
            Checkout
          </Button>
        </div>
      </div>

    </>
  );
}
