import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import 'date-fns';
import _ from 'lodash';

//config
import { Colors } from '../config/Colors';
import MyTextFeild from '../components/common/MyTextFeild';
import { toast } from 'react-toastify';

//Services
import { updateUser, addPickUpInfo } from '../services/UserServices';

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
  const history = useHistory();
  const [selectedPlan, setSelectedPlan] = useState({});
  const [lbsCount, setLbsCount] = useState(10);
  const [radio, setRadio] = useState(false);
  const [extraLoad, showExtraLoad] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [infoFeild, setInfoFeild] = useState([
    {
      id: 0,
      label: 'Full Name',
      value: '',
    },
    {
      id: 1,
      label: 'Phone Number',
      value: '',
    },
  ]);

  const [infoDropFeild, setInfoDropFeild] = useState([
    {
      id: 0,
      label: 'Gender',
      value: '',
      dropItems: [
        {
          label: 'Male',
          value: 'male',
        },
        {
          label: 'Female',
          value: 'female',
        },
      ],
    },
    {
      id: 1,
      label: 'Status',
      value: '',
      dropItems: [
        {
          label: 'Single',
          value: 'single',
        },
        {
          label: 'Married',
          value: 'married',
        },
      ],
    },
  ]);

  const [pickupFeild, setPickupFeild] = useState([
    {
      id: 0,
      label: 'Company Name (optional) ',
      value: '',
    },
    {
      id: 1,
      label: 'Street Address',
      value: '',
    },
    {
      id: 2,
      label: 'Town City',
      value: '',
    },
    {
      id: 3,
      label: 'Postal Code',
      value: '',
    },
  ]);

  const [pickupDropFeild, setPickupDropFeild] = useState([
    {
      id: 0,
      label: 'Countary',
      value: '',
      dropItems: [
        {
          label: 'Canada',
          value: 'canada',
        },
      ],
    },
    {
      id: 1,
      label: 'Province',
      value: '',
      dropItems: [
        {
          label: 'British Columbia',
          value: 'british columbia',
        },
        {
          label: 'Ontario',
          value: 'ontario',
        },
      ],
    },
    {
      id: 2,
      label: 'Timing',
      value: '',
      dropItems: [
        {
          label: 'Morning',
          value: 'morning',
        },
        {
          label: 'Evening',
          value: 'evening',
        },
      ],
    },
    {
      id: 3,
      label: 'Pickup Day',
      value: '',
      dropItems: [
        {
          label: 'Monday',
          value: 'monday',
        },
        {
          label: 'Tuesday',
          value: 'tuesday',
        },
        {
          label: 'Wednesday',
          value: 'wednesday',
        },
        {
          label: 'Thursday',
          value: 'thursday',
        },
        {
          label: 'Friday',
          value: 'friday',
        },
        {
          label: 'Saturday',
          value: 'saturday',
        },
        {
          label: 'Sunday',
          value: 'sunday',
        },
      ],
    },
  ]);

  const [apartmentSuit, setApartmentSuit] = useState('');

  const infoFieldChange = (index, value) => {
    let tempFeilds = [...infoFeild];
    tempFeilds[index].value = value;
    setInfoFeild(tempFeilds);
  };

  const pickupFieldChange = (index, value) => {
    let tempFeilds = [...pickupFeild];
    tempFeilds[index].value = value;
    setPickupFeild(tempFeilds);
  };

  const dropInfoChange = (index, value) => {
    let tempFeilds = [...infoDropFeild];
    tempFeilds[index].value = value;
    setInfoDropFeild(tempFeilds);
  };

  const dropPickupChange = (index, value) => {
    let tempFeilds = [...pickupDropFeild];
    tempFeilds[index].value = value;
    setPickupDropFeild(tempFeilds);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    setSelectedPlan(props.history.location.state.planObj);
  }, [props.history.location.state]);

  const handleCheckout = async () => {
    const userInfo = {
      name: infoFeild[0].value,
      gender: infoDropFeild[0].value,
      contactNumber: infoFeild[1].value,
      status: infoDropFeild[1].value,
      dob: selectedDate,
    };

    const pickupInof = {
      streetAddress: pickupFeild[1].value,
      townCity: pickupFeild[2].value,
      postalCode: pickupFeild[3].value,
      countary: pickupDropFeild[0].value,
      province: pickupDropFeild[1].value,
      timing: pickupDropFeild[2].value,
      pickupDay: pickupDropFeild[3].value,
      lbsPrice: extraLoad ? lbsCount : 0,
    };

    for (const property in userInfo) {
      if (userInfo[property] === '') {
        toast.error('Please fill all the value');
        return;
      }
    }

    for (const property in pickupInof) {
      if (pickupInof[property] === '') {
        toast.error('Please fill all the value');
        return;
      }
    }

    pickupInof.companyName = pickupFeild[0].value;
    pickupInof.apartment = apartmentSuit;

    try {
      const currentUser = JSON.parse(localStorage.getItem('token'));
      if (!currentUser) {
        return;
      }

      let userId = currentUser.id;
      pickupInof.userId = userId;

      const res = await updateUser(userId, userInfo);
      if (res) {
        const pickUpres = await addPickUpInfo(userId, pickupInof);
        if (pickUpres) {
          console.log(
            selectedPlan.id,
            selectedPlan.planStripeId,
            selectedPlan.price
          );

          const checkOutObj = {
            planId: selectedPlan.id,
            planTitle: selectedPlan.planTitle,
            planStripeId: selectedPlan.planStripeId,
            price: selectedPlan.price,
            userId,
            lbsPrice: extraLoad ? lbsCount : 0,
          };

          history.push('/orderdetails', { checkOutObj });
        } else {
          toast.error('Something went wrong please try again');
        }
      } else {
        toast.error('Something went wrong please try again');
      }
    } catch (error) {
      toast.error('Something went wrong please try again');
    }
  };

  const lbsIncrement = () => {
    if (lbsCount < 50) {
      setLbsCount(lbsCount + 1);
    }
  };

  const lbsDecrement = () => {
    if (lbsCount > 10) {
      setLbsCount(lbsCount - 1);
    }
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
            {infoFeild.map((item, index) => (
              <div
                key={index}
                style={{ marginTop: index === 0 ? null : '3rem' }}
                className="row d-flex justify-content-center align-items-center"
              >
                <MyTextFeild
                  width="78%"
                  label={item.label}
                  value={item.value}
                  onChange={(value) => infoFieldChange(index, value)}
                ></MyTextFeild>
              </div>
            ))}
          </div>

          <div className="col-5  text-white " style={{ height: '30rem' }}>
            {infoDropFeild.map((item, index) => (
              <div
                style={{ marginTop: index === 0 ? '-0.4rem' : '1.5rem' }}
                className="row d-flex justify-content-start align-items-start"
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
                    onChange={(e) => dropInfoChange(index, e.target.value)}
                  >
                    {item.dropItems.map((dropItem, i) => (
                      <MenuItem key={i} value={dropItem.value}>
                        {dropItem.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            ))}

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
      <div className="container-fluid" style={{ marginTop: '-6rem' }}>
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
        <div
          className="row  d-flex justify-content-center align-items-center"
          style={{ marginTop: '3rem' }}
        >
          <div className="col-5 text-white " style={{ height: '30rem' }}>
            {pickupFeild.map((item, index) => (
              <div
                style={{ marginTop: index === 0 ? null : '3rem' }}
                className="row d-flex justify-content-center align-items-center"
              >
                <MyTextFeild
                  width="78%"
                  label={item.label}
                  value={item.value}
                  onChange={(value) => pickupFieldChange(index, value)}
                ></MyTextFeild>
              </div>
            ))}

            <div
              style={{ marginTop: '3rem' }}
              className="row d-flex justify-content-center align-items-center"
            >
              <Button
                style={{ marginRight: '0.5rem' }}
                onClick={() => showExtraLoad(!extraLoad)}
              >
                Want to add Extra Load? (1lbs/$1)
              </Button>
              {extraLoad ? (
                <ButtonGroup
                  size="small"
                  aria-label="small outlined button group"
                >
                  <Button onClick={() => lbsIncrement()}>+</Button>
                  <Button>{lbsCount}</Button>
                  <Button onClick={() => lbsDecrement()}>-</Button>
                </ButtonGroup>
              ) : null}
            </div>
          </div>

          <div className="col-5  text-white " style={{ height: '30rem' }}>
            {pickupDropFeild.map((item, index) => (
              <div
                key={index}
                className="row d-flex justify-content-start align-items-start"
                style={{ marginTop: index === 0 ? '-0.5rem' : '1.4rem' }}
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
                    {item.dropItems.map((drop, i) => (
                      <MenuItem key={i} value={drop.value}>
                        {drop.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            ))}

            <div
              className="row d-flex justify-content-start align-items-start"
              style={{ marginTop: '2.5rem', marginLeft: '-0.3rem' }}
            >
              <MyTextFeild
                width="78%"
                value={apartmentSuit}
                label="Apartment, Suite, unit etc(Optional)"
                onChange={(value) => setApartmentSuit(value)}
                style={{ fontSize: '5rem' }}
              ></MyTextFeild>
            </div>
          </div>
        </div>
      </div>
      {/* Personal Info End */}
      <div className="container-fluid" style={{ marginTop: '-4rem' }}>
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ marginBottom: '5rem', marginTop: '2rem' }}
        >
          <Button
            onClick={() => handleCheckout()}
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
