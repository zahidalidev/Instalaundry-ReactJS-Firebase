import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import img1 from '../../assets/img/2.jpg';
import './Login.css';
import { Colors } from '../../config/Colors';
import { toast } from 'react-toastify';
// import { login } from '../../http/api';

class Register extends Component {
  state = {
    loginFeilds: [
      {
        label: 'Name',
        name: 'name',
        type: 'text',
      },
      {
        label: 'Email',
        name: 'email',
        type: 'email',
      },
      {
        label: 'Address',
        name: 'address',
        type: 'text',
      },
      {
        label: 'Password',
        name: 'password',
        type: 'password',
      },
      {
        label: 'Confirm Password',
        name: 'confirmPassword',
        type: 'password',
      },
    ],
    email: '',
    password: '',
    address: '',
  };

  handleChange = (e, name) => {
    const value = e.target.value;
    if (name === 'email') {
      this.setState({ email: value });
    } else if (name === 'password') {
      this.setState({ password: value });
    }
  };

  handleLogin = async () => {
    // let { email, password } = this.state;
    // email = email.trim();
    // password = password.trim();
    // if (email === '' || password === '') {
    //   toast.error('Please fill all the feilds');
    // } else {
    //   const body = {
    //     email,
    //     password,
    //   };
    //   try {
    //     const { data: jwt } = await login(body);
    //     localStorage.setItem('token', jwt);
    //     this.props.onHandleLogin(this.props.history);
    //   } catch (error) {
    //     toast.error('User Login Error: Email or password in invalid ');
    //   }
    // }
  };

  render() {
    const { loginFeilds } = this.state;

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
                  Sign Up
                </h1>
              </div>
              <div className="col-md-6 text-center text-md-right">
                <div className="d-inline-flex align-items-center">
                  {/* <a className="btn text-white">Home</a>
                  <i className="fas fa-angle-right text-white"></i>
                  <a className="btn text-white disabled">Login</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Login start         */}

        <div
          className="container-fluid"
          style={{
            backgroundImage: 'url(' + img1 + ')',
            backgroundSize: 'cover',
            padding: '10rem',
            opacity: '0.9',
          }}
        >
          <div
            className="container-fluid"
            // style={{
            //   position: 'absolute',
            //   top: '21rem',
            //   left: 0,
            //   bottom: '100rem',
            //   right: 0,
            //   backgroundColor: 'black',
            //   width: '100%',
            //   height: '100%',
            // }}
          >
            {/* <img src={img1} style={{ width: '100%', height: '100%' }}></img> */}
            <div
              className="container loginContainer"
              style={{ height: '50rem ', width: '38rem' }}
            >
              <div className="row" style={{ justifyContent: 'center' }}>
                <h1
                  className="loginHeading"
                  style={{ color: Colors.primary, marginTop: '5rem' }}
                >
                  Sign Up
                </h1>
                <div className="col-md-12">
                  {loginFeilds.map((login, i) => (
                    <div className="col-md-12" key={i}>
                      <TextField
                        className="loginTextFeild"
                        label={login.label}
                        variant="outlined"
                        size="medium"
                        onChange={(e) => this.handleChange(e, login.name)}
                        type={login.type}
                        style={{ marginBottom: '3rem' }}
                      />
                    </div>
                  ))}
                  {/* <div
                className="col-md-12"
                style={{ marginLeft: '4%', marginTop: '-1.4vw' }}
              >
                <p style={{ alignSelf: 'center' }}>
                  Don't have account{' '}
                  <span
                    onClick={() => this.props.history.push('/register')}
                    style={{ color: Colors.primary, cursor: 'pointer' }}
                  >
                    Sign up
                  </span>{' '}
                </p>
              </div> */}

                  <div className="col-md-12 align-items-center justify-content-center">
                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <Button
                        onClick={this.handleLogin}
                        className="loginButton"
                        onClick={this.handleLogin}
                        style={{
                          backgroundColor: Colors.secondary,
                          // marginLeft: 'rem !important',
                        }}
                        variant="contained"
                        color="primary"
                      >
                        Sign Up
                      </Button>
                    </div>
                  </div>
                  {/* <div className="col-md-12" >
                                <Button className="forgetButton" onClick={this.handleLogin} variant="contained" color="primary">
                                    Forget Password
                                </Button>
                            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
