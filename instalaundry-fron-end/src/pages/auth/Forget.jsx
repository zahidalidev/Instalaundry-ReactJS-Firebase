import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

import img1 from '../../assets/img/2.jpg';
import './Login.css';
import { Colors } from '../../config/Colors';
import { toast } from 'react-toastify';
import { generateCode, loginUser } from '../../services/UserServices';
import axios from 'axios';

function Forget() {
  const [showCodeInput, setShowCodeInput] = useState('1');
  const [email, setEmail] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const history = useHistory();

  const handleForgetCode = async (code) => {
    var data = {
      service_id: 'service_siowrj7',
      template_id: 'template_0bvfsqc',
      user_id: 'user_ef7lljg2cLfLEVyVsoysv',
      template_params: {
        message: `your varification code is ${code}`,
        to_email: email,
      },
    };
    try {
      await axios.post(
        'https://api.emailjs.com/api/v1.0/email/send',
        JSON.stringify(data),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      alert('Check Your Email address');
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const handleEmailSentCode = async () => {
    try {
      let code = await generateCode();

      handleForgetCode(code);
    } catch (error) {}
  };

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
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ marginBottom: '5rem' }}
                    />
                  ) : null}
                  {showCodeInput == '2' ? (
                    <TextField
                      className="loginTextFeild"
                      label="Put Code here"
                      variant="outlined"
                      size="medium"
                      onChange={(e) => setConfirmCode(e.target.value)}
                      style={{ marginBottom: '5rem' }}
                    />
                  ) : null}

                  {showCodeInput == '3' ? (
                    <TextField
                      className="loginTextFeild"
                      label="New Password"
                      variant="outlined"
                      size="medium"
                      onChange={(e) => setNewPassword(e.target.value)}
                      style={{ marginBottom: '5rem' }}
                    />
                  ) : null}
                </div>

                <div className="col-md-12 align-items-center justify-content-center">
                  <div className="d-flex flex-row align-items-center justify-content-center">
                    {showCodeInput == '1' ? (
                      <Button
                        onClick={() => {
                          setShowCodeInput('2');
                          handleEmailSentCode();
                        }}
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
