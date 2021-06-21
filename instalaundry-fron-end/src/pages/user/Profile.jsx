import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import MyTextFeild from '../../components/common/MyTextFeild';
import SubscriptionCard from '../../components/SubscriptionCard';

// config
import { Colors } from '../../config/Colors';
import { getAllUserSubscriptions, updateUser } from '../../services/UserServices';

function Profile(props) {
  const [showPersonal, setShowPersonal] = useState(true);
  const [currentUserId, setCurrentUserId] = useState('');
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

  const [subscription, setSubscription] = useState([
    {
      packageName: 'Individual',
      price: '$9.99/Week',
    },
    {
      packageName: 'Individual',
      price: '$9.99/Week',
    },
    {
      packageName: 'Individual',
      price: '$9.99/Week',
    },
    {
      packageName: 'Individual',
      price: '$9.99/Week',
    },
    {
      packageName: 'Individual',
      price: '$9.99/Week',
    },
  ]);

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
      let res = await getAllUserSubscriptions(currentUserId)
      console.log(res);
    } catch (error) {

    }
  }

  useEffect(() => {
    getCurrentUserinfo()
    userSubscriptions()
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
                  onClick={() => setShowPersonal(true)}
                  style={{
                    borderTopLeftRadius: 10,
                    cursor: 'pointer',
                    backgroundColor: showPersonal ? Colors.primaryTrans : null,
                    borderBottom: '1px solid white',
                  }}
                  className="row d-flex flex-row align-items-center p-2 justify-content-center"
                >
                  <p style={{ marginTop: '1rem' }} className="">
                    Personal Information
                  </p>
                </div>
                <div
                  onClick={() => setShowPersonal(false)}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: !showPersonal ? Colors.primaryTrans : null,
                    borderBottom: '1px solid white',
                  }}
                  className="row d-flex flex-row align-items-center p-2 justify-content-center"
                >
                  <p style={{ marginTop: '1rem' }} className="">
                    My Subscriptions
                  </p>
                </div>
              </div>



              {/* Personal Info start */}
              {showPersonal ? (
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
              ) : (
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
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
