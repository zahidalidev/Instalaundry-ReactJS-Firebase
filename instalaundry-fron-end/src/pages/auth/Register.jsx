import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';

import { addUser } from '../../services/UserServices';
import { Colors } from '../../config/Colors';
import './Login.css';
import img1 from '../../assets/img/2.jpg';
import CircularProgress from '@material-ui/core/CircularProgress';

class Register extends Component {
  state = {
    loginFeilds: [
      {
        id: 0,
        label: 'Name',
        name: 'name',
        type: 'text',
        value: '',
      },
      {
        id: 1,
        label: 'Email',
        name: 'email',
        type: 'email',
        value: '',
      },
      {
        id: 2,
        label: 'Password',
        name: 'password',
        type: 'password',
        value: '',
      },
      {
        id: 3,
        label: 'Confirm Password',
        name: 'confirmPassword',
        type: 'password',
        value: '',
      },
    ],
    loading: false,
  };

  handleChange = (value, index) => {
    let loginFeilds = [...this.state.loginFeilds];
    loginFeilds[index].value = value;
    this.setState({ loginFeilds });
  };

  handSignUp = async () => {
    this.setState({ loading: true });
    let loginFeilds = [...this.state.loginFeilds];
    let name = loginFeilds[0].value;
    let email = loginFeilds[1].value;
    let password = loginFeilds[2].value;
    let confirmPassword = loginFeilds[3].value;

    if (password !== confirmPassword) {
      toast.error('Password an Confirm password are not same !');
      return;
    }

    if (name === '' || email === '' || password === '') {
      toast.error('Please fill all the feilds');
      this.setState({ loading: false });
      return;
    }

    const body = {
      name,
      email,
      password,
    };

    try {
      await addUser(body);
      toast.success('Reistration Successfull');
      this.props.history.push('/login');
    } catch (error) {
      toast.error('User Login Error: Email or password in invalid ');
    }
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
          <div className="container-fluid">
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
                  {/* inpuit feilds */}
                  {loginFeilds.map((item, i) => (
                    <div className="col-md-12" key={i}>
                      <TextField
                        className="loginTextFeild"
                        label={item.label}
                        variant="outlined"
                        size="medium"
                        onChange={(e) => this.handleChange(e.target.value, i)}
                        type={item.type}
                        style={{ marginBottom: '3rem' }}
                      />
                    </div>
                  ))}

                  <div className="col-md-12 align-items-center justify-content-center">
                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <Button
                        className="loginButton"
                        onClick={this.handSignUp}
                        style={{
                          backgroundColor: Colors.secondary,
                        }}
                        variant="contained"
                        color="primary"
                      >
                        Sign Up
                      </Button>
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
}

export default Register;
