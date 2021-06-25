import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

import img1 from '../../assets/img/2.jpg';
import './Login.css';
import { Colors } from '../../config/Colors';
import { toast } from 'react-toastify';
import { loginUser } from '../../services/UserServices';

function Forget() {
  // state = {
  //   loginFeilds: [
  //     {
  //       label: 'Email',
  //       name: 'email',
  //       type: 'email',
  //       value: '',
  //     },
  //     {
  //       label: 'Password',
  //       name: 'password',
  //       type: 'password',
  //       value: '',
  //     },
  //   ],
  // };

  // handleChange = (value, index) => {
  //   let loginFeilds = [...this.state.loginFeilds];
  //   loginFeilds[index].value = value;
  //   this.setState({ loginFeilds });
  // };

  // handleLogin = async () => {
  //   let loginFeilds = [...this.state.loginFeilds];
  //   const email = loginFeilds[0].value.trim();
  //   const password = loginFeilds[1].value.trim();

  //   if (email === '' || password === '') {
  //     toast.error('Please fill all the feilds');
  //     return;
  //   }

  //   try {
  //     const res = await loginUser(email, password);
  //     localStorage.setItem('token', JSON.stringify(res));
  //     window.location.reload();
  //     // this.props.onHandleLogin(this.props.history);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error('User Login Error: Email or password in invalid ');
  //   }
  // };

  const [showCodeInput, setShowCodeInput] = useState('1');
  const history = useHistory();

  return (
    <>
      <div className="page-header container-fluid bg-secondary pt-2 pt-lg-4 pb-2">
        <div className="container py-1">
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1
                className="mb-4 mb-md-0 text-white"
                className="sliderMainHeading"
                style={{ fontSize: '2.5rem', marginTop: '6rem' }}
              >
                Forget Password
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{
          backgroundImage: 'url(' + img1 + ')',
          backgroundSize: 'cover',
          padding: '10rem',
          opacity: '0.9',
        }}
      >
        <div className="container-fluid">
          <div className="container loginContainer">
            <div className="row" style={{ justifyContent: 'center' }}>
              <h1
                className="loginHeading"
                style={{ color: Colors.primary, marginTop: '4rem' }}
              >
                Forget Password
              </h1>
              <div className="col-md-12">
                <div className="col-md-12">
                  {showCodeInput == '1' ? (
                    <TextField
                      className="loginTextFeild"
                      label="Email"
                      variant="outlined"
                      size="medium"
                      style={{ marginBottom: '5rem' }}
                    />
                  ) : null}
                  {showCodeInput == '2' ? (
                    <TextField
                      className="loginTextFeild"
                      label="Put Code here"
                      variant="outlined"
                      size="medium"
                      style={{ marginBottom: '5rem' }}
                    />
                  ) : null}

                  {showCodeInput == '3' ? (
                    <TextField
                      className="loginTextFeild"
                      label="New Password"
                      variant="outlined"
                      size="medium"
                      style={{ marginBottom: '5rem' }}
                    />
                  ) : null}
                </div>

                <div className="col-md-12 align-items-center justify-content-center">
                  <div className="d-flex flex-row align-items-center justify-content-center">
                    {showCodeInput == '1' ? (
                      <Button
                        onClick={() => setShowCodeInput('2')}
                        className="loginButton"
                        style={{
                          backgroundColor: Colors.secondary,
                          // marginLeft: 'rem !important',
                        }}
                        variant="contained"
                        color="primary"
                      >
                        Send Code
                      </Button>
                    ) : null}
                    {showCodeInput == '2' ? (
                      <Button
                        onClick={() => setShowCodeInput('3')}
                        className="loginButton"
                        style={{
                          backgroundColor: Colors.secondary,
                          // marginLeft: 'rem !important',
                        }}
                        variant="contained"
                        color="primary"
                      >
                        Confirm Code
                      </Button>
                    ) : null}
                    {showCodeInput == '3' ? (
                      <Button
                        onClick={() => history.push('/home')}
                        className="loginButton"
                        style={{
                          backgroundColor: Colors.secondary,
                          // marginLeft: 'rem !important',
                        }}
                        variant="contained"
                        color="primary"
                      >
                        Change
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forget;
