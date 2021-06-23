import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

import Paynow from '../../components/client/Paynow';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import MyTextFeild from '../../components/common/MyTextFeild';
import SubscriptionCard from '../../components/SubscriptionCard';

// config
import { Colors } from '../../config/Colors';
import { getAllUserSubscriptions, updateUser, deleteSubscriptionPlan, updatPickupInfo } from '../../services/UserServices';
import { getPlans } from '../../services/PricingServices';
import { cancelUserSub } from "../../services/OrderServices";
import configObj from '../../config/config.json';
import { toast } from 'react-toastify';

const stripePromise = loadStripe(configObj.stripPublicId);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function Profile(props) {
  const classes = useStyles();
  const [showPersonal, setShowPersonal] = useState('personal');
  const [currentUserId, setCurrentUserId] = useState('');
  const [tip, setTip] = useState('');
  const [lbsCount, setLbsCount] = useState(10);

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

  const [userInfo, setUserinfo] = useState([
    {
      title: 'Full Name',
      value: ''
    },
    {
      title: 'Email',
      value: ''
    },
    {
      title: 'Contact Number',
      value: ''
    },
    {
      title: 'Password',
      value: ''
    },
  ])

  const [daysDrop, setDaysDrop] = useState(
    {
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
  );

  const dropPickupChange = (value) => {
    let tempDays = { ...daysDrop };
    tempDays.value = value;
    setDaysDrop(tempDays);
  };

  const [subscription, setSubscription] = useState([]);

  const handleUserInfo = async (index, value) => {
    const tempInfo = [...userInfo];
    tempInfo[index].value = value;
    setUserinfo(tempInfo)
  }

  const getCurrentUserinfo = () => {
    const tempInfo = [...userInfo];

    try {
      let currentUser = localStorage.getItem('token');
      if (currentUser) {
        currentUser = JSON.parse(currentUser)
      }
      tempInfo[0].value = currentUser.name
      tempInfo[1].value = currentUser.email
      tempInfo[2].value = currentUser.contactNumber
      tempInfo[3].value = currentUser.password
      setCurrentUserId(currentUser.id)
      setUserinfo(tempInfo)

    } catch (error) {
      console.log("Getting Info Error: ", error)
    }
  }

  const userSubscriptions = async () => {
    try {

      let allPlans = await getPlans()
      let res = await getAllUserSubscriptions(currentUserId)
      if (res) {
        for (let i = 0; i < res.length; i++) {
          for (let j = 0; j < allPlans.length; j++) {
            if (res[i].planId === allPlans[j].id) {
              res[i].packageName = allPlans[j].name;
              res[i].price = allPlans[j].price;
            }
          }
        }

        setSubscription(res);
      }
    } catch (error) {

    }
  }

  useEffect(() => {
    getCurrentUserinfo()
  }, [])

  // updating user
  const handleUpdate = async () => {
    const body = {
      name: userInfo[0].value,
      email: userInfo[1].value,
      contactNumber: userInfo[2].value,
      password: userInfo[3].value
    }

    try {
      await updateUser(currentUserId, body)
    } catch (error) {
      console.log("user profile update errr: ", error)
    }
  }

  const handleCancelSub = async (id, docId) => {
    try {
      let res = await cancelUserSub(id);
      await deleteSubscriptionPlan(docId)
      await userSubscriptions()
      console.log(res);
    } catch (error) {
      console.log("sub cancel erro: ", error)
    }
  }

  const handlePickuDay = async () => {
    let newPickupDay = daysDrop.value;
    if (newPickupDay == '') {
      toast.error("Please Select the Day")
    }
    try {
      await updatPickupInfo(currentUserId, { pickupDay: newPickupDay })
    } catch (error) {
      console.log("Update day error: ", error)
    }
  }

  return (
    <>
      <Breadcrumbs
        title="Profile"
        currentPage="Profile"
        previousPages={['Home']}
      />
      <div className="container-fluid" style={{ marginTop: '-3rem' }}>
        <div className="row d-flex flex-row text-center justify-content-md-start">
          <div
            style={{ marginTop: '7rem', marginBottom: '5rem' }}
            className="justify-content-center align-items-center col-md-12"
          >
            <div className="row d-flex flex-row text-start text-white justify-content-center">
              <div
                style={{
                  border: '1px solid grey',
                  borderBottomLeftRadius: 10,
                  borderTopLeftRadius: 10,
                  backgroundColor: Colors.secondary,
                  height: '40rem',
                }}
                className="d-flex flex-column justify-content-start col-md-3"
              >
                <div
                  onClick={() => setShowPersonal('personal')}
                  style={{
                    borderTopLeftRadius: 10,
                    cursor: 'pointer',
                    backgroundColor: showPersonal === 'personal' ? Colors.primaryTrans : null,
                    borderBottom: '1px solid white',
                  }}
                  className="row d-flex flex-row align-items-center p-2 justify-content-center"
                >
                  <p style={{ marginTop: '1rem' }} className="">
                    Personal Information
                  </p>
                </div>

                <div
                  onClick={() => setShowPersonal('day')}
                  style={{
                    borderTopLeftRadius: 10,
                    cursor: 'pointer',
                    backgroundColor: showPersonal === 'day' ? Colors.primaryTrans : null,
                    borderBottom: '1px solid white',
                  }}
                  className="row d-flex flex-row align-items-center p-2 justify-content-center"
                >
                  <p style={{ marginTop: '1rem' }} className="">
                    Change Pickup Day
                  </p>
                </div>

                <div
                  onClick={() => {
                    userSubscriptions()
                    setShowPersonal('subscription')
                  }}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: showPersonal == 'subscription' ? Colors.primaryTrans : null,
                    borderBottom: '1px solid white',
                  }}
                  className="row d-flex flex-row align-items-center p-2 justify-content-center"
                >
                  <p style={{ marginTop: '1rem' }} className="">
                    My Subscriptions
                  </p>
                </div>

                <div
                  onClick={() => {
                    setShowPersonal('tip')
                  }}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: showPersonal == 'tip' ? Colors.primaryTrans : null,
                    borderBottom: '1px solid white',
                  }}
                  className="row d-flex flex-row align-items-center p-2 justify-content-center"
                >
                  <p style={{ marginTop: '1rem' }} className="">
                    Pay Tip
                  </p>
                </div>

                <div
                  onClick={() => {
                    setShowPersonal('load')
                  }}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: showPersonal == 'load' ? Colors.primaryTrans : null,
                    borderBottom: '1px solid white',
                  }}
                  className="row d-flex flex-row align-items-center p-2 justify-content-center"
                >
                  <p style={{ marginTop: '1rem' }} className="">
                    Want To Add Extra Load
                  </p>
                </div>

              </div>



              {/* Personal Info start */}
              {showPersonal == 'personal' ? (
                <div
                  style={{
                    border: '1px solid grey',
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: Colors.white,
                  }}
                  className="d-flex flex-column justify-content-start col-md-8"
                >
                  <div
                    style={{ marginTop: '2rem' }}
                    className="row d-flex flex-row align-items-center p-2 justify-content-center"
                  >
                    <h3 style={{ fontSize: '2rem' }}>Peronal Infomation</h3>
                  </div>

                  <div className="row d-flex flex-row justify-content-md-center">
                    <div
                      className="col-md-12 d-flex justify-content-center align-self-center"
                      style={{
                        flexDirection: 'column',
                        height: 300,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div style={{ marginTop: '10rem', width: "100%" }} className="row">
                      </div>

                      {
                        userInfo.map((user, index) =>
                          <div key={index} style={{ marginTop: '2rem', width: '100%' }}>
                            <MyTextFeild
                              width={'78%'}
                              label={user.title}
                              value={user.value}
                              onChange={(value) => handleUserInfo(index, value)}
                            />
                          </div>
                        )
                      }

                      <Button
                        onClick={() => handleUpdate()}
                        style={{
                          backgroundColor: Colors.secondary,
                          color: Colors.white,
                        }}
                        className="btn btn-primary py-md-2 px-md-4 mt-4"
                        variant="contained"
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </div>
              ) : null}

              {
                showPersonal == 'subscription' ?
                  // subscription plan start;
                  <div className="d-flex flex-column justify-content-start col-md-8">
                    <div
                      style={{ marginTop: '-0.5rem' }}
                      className="row d-flex flex-row align-items-center p-1 justify-content-center"
                    >
                      <h3 style={{ fontSize: '2rem' }}>My Subscriptions</h3>
                    </div>
                    <div className="row d-flex flex-row justify-content-md-start">
                      {subscription.map((sub, index) => (
                        <div
                          key={index}
                          className="col-md-6 d-flex justify-content-center"
                          style={{
                            marginTop: '2rem',
                            flexDirection: 'column',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <div style={{ width: '100%' }}>
                            <SubscriptionCard
                              showCancelBtn={true}
                              packageName={sub.packageName}
                              price={sub.price}
                              cancelSub={() => handleCancelSub(sub.userSubId, sub.docId)}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div> : null
              }

              {
                showPersonal == 'tip' ?
                  // subscription plan start;
                  <div className="d-flex flex-column justify-content-start col-md-8">
                    <div
                      style={{ marginTop: '-0.5rem' }}
                      className="row d-flex flex-row align-items-center p-1 justify-content-center"
                    >
                      <h3 style={{ fontSize: '2rem' }}>Pay Tip</h3>
                    </div>
                    <div className="row d-flex mt-5 flex-row justify-content-md-start">

                      <div style={{ marginTop: '2rem', width: '100%' }}>
                        <MyTextFeild
                          width={'60%'}
                          label={"Pay Tip (In Dollar), Enter Only Number For example 5, 10..."}
                          value={tip}
                          onChange={(value) => setTip(value)}
                        />
                      </div>

                    </div>
                    <div className="contaienr-fluid mt-4" >

                      <Elements stripe={stripePromise}>
                        <Paynow
                          onlyTip={true}
                          tipPrice={parseFloat(tip.match(/(\d+)/))}
                        />
                      </Elements>
                    </div>
                  </div> : null
              }
              {
                showPersonal == 'load' ?
                  // subscription plan start;
                  <div className="d-flex flex-column justify-content-start col-md-8">
                    <div
                      style={{ marginTop: '-0.5rem' }}
                      className="row d-flex flex-row align-items-center p-1 justify-content-center"
                    >
                      <h3 style={{ fontSize: '2rem' }}>Pay for Extra Load</h3>
                    </div>
                    <div className="row d-flex mt-5 flex-row justify-content-md-start">

                      <div style={{ marginTop: '2rem', width: '100%' }}>
                        <h6>Add Extra Load in LBS from 10 to 50lbs</h6>
                        <ButtonGroup
                          style={{ marginTop: "2rem" }}
                          size="small"
                          aria-label="small outlined button group"
                        >
                          <Button onClick={() => lbsIncrement()}>+</Button>
                          <Button>{lbsCount}</Button>
                          <Button onClick={() => lbsDecrement()}>-</Button>
                        </ButtonGroup>
                      </div>

                    </div>
                    <div className="contaienr-fluid mt-4" >

                      <Elements stripe={stripePromise}>
                        <Paynow
                          onlyTip={true}
                          tipPrice={parseFloat(lbsCount)}
                        />
                      </Elements>
                    </div>
                  </div> : null
              }
              {
                showPersonal == 'day' ?
                  // subscription plan start;
                  <div className="d-flex flex-column justify-content-start col-md-8">
                    <div
                      style={{ marginTop: '-0.5rem' }}
                      className="row d-flex flex-row align-items-center p-1 justify-content-center"
                    >
                      <h3 style={{ fontSize: '2rem' }}>Pay for Extra Load</h3>
                    </div>
                    <div className="row d-flex mt-5 flex-row justify-content-md-start">

                      <div style={{ marginTop: '2rem', width: '100%' }}>
                        <div
                          className="row d-flex justify-content-center align-items-center"
                          style={{ marginTop: '1.4rem' }}
                        >
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                            style={{ width: '60%' }}
                          >
                            <InputLabel id="demo-simple-select-outlined-label">
                              Select Day
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={daysDrop.value}
                              onChange={(e) => dropPickupChange(e.target.value)}
                              label="Status"
                            >
                              {daysDrop.dropItems.map((drop, i) => (
                                <MenuItem key={i} value={drop.value}>
                                  {drop.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                      </div>

                    </div>
                    <div className="contaienr-fluid mt-4" >
                      <Button
                        onClick={() => handlePickuDay()}
                        style={{
                          backgroundColor: Colors.secondary,
                          color: Colors.white,
                        }}
                        className="btn btn-primary py-md-2 px-md-4 mt-4"
                        variant="contained"
                      >
                        Update Day
                      </Button>

                    </div>
                  </div> : null
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
