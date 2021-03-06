import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { toast } from "react-toastify";

import { loginUser } from "../../services/UserServices";

import img1 from "../../assets/img/2.jpg";
import "./Login.css";
import { Colors } from "../../config/Colors";

class Login extends Component {
  state = {
    loginFeilds: [
      {
        label: "Email",
        name: "email",
        type: "email",
        value: "",
      },
      {
        label: "Password",
        name: "password",
        type: "password",
        value: "",
      },
    ],
    loading: false,
  };

  handleChange = (value, index) => {
    let loginFeilds = [...this.state.loginFeilds];
    loginFeilds[index].value = value;
    this.setState({ loginFeilds });
  };

  handleLogin = async () => {
    this.setState({ loading: true });
    let loginFeilds = [...this.state.loginFeilds];
    const email = loginFeilds[0].value.trim();
    const password = loginFeilds[1].value.trim();

    if (email === "" || password === "") {
      toast.error("Please fill all the feilds");
      this.setState({ loading: false });
      return;
    }

    try {
      const res = await loginUser(email, password);
      if (res) {
        localStorage.setItem("token", JSON.stringify(res));
        window.location.reload();
      } else {
        toast.error("User Login Error: Email or password in invalid ");
      }

      // this.props.onHandleLogin(this.props.history);
    } catch (error) {
      console.log(error);
      toast.error("User Login Error: Email or password in invalid ");
    }
    this.setState({ loading: false });
  };

  render() {
    const { loginFeilds } = this.state;

    return (
      <>
        {this.state.loading ? (
          <div className="container-fluid">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "30rem" }}
            >
              <CircularProgress disableShrink />
            </div>
          </div>
        ) : (
          <div>
            <div className="page-header container-fluid bg-secondary pt-2 pt-lg-4 pb-2">
              <div className="container py-1" style={{ marginTop: "5rem" }}>
                <div className="row align-items-center py-4">
                  <div className="col-md-6 text-center text-md-left">
                    <h1 className="mb-4 mb-md-0 text-white">Login</h1>
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
              className="container-fluid login-fluid "
              style={{
                backgroundImage: "url(" + img1 + ")",
                backgroundSize: "cover",
                padding: "10rem",
                opacity: "0.9",
              }}
            >
              <div
                className="container-fluid align-items-center justify-content-center"
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
                <div className="container loginContainer">
                  <div className="row" style={{ justifyContent: "center" }}>
                    <h1
                      className="loginHeading"
                      style={{ color: Colors.primary, marginTop: "4rem" }}
                    >
                      Login
                    </h1>
                    <div className="col-md-12">
                      {loginFeilds.map((item, i) => (
                        <div className="col-md-12" key={i}>
                          <TextField
                            className="loginTextFeild"
                            label={item.label}
                            variant="outlined"
                            size="medium"
                            onChange={(e) =>
                              this.handleChange(e.target.value, i)
                            }
                            type={item.type}
                            style={{ marginBottom: "4.2rem" }}
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
                              width: "12rem",
                              // marginLeft: 'rem !important',
                            }}
                            variant="contained"
                            color="primary"
                          >
                            Login
                          </Button>
                        </div>
                      </div>
                      <div className="col-md-12 align-items-center justify-content-center">
                        <div className="d-flex flex-row align-items-center justify-content-center">
                          <Button
                            className="loginButton"
                            onClick={() => this.props.history.push("/register")}
                            style={{
                              fontSize: "0.75rem",
                              backgroundColor: Colors.primary,
                              color: "black",
                              cursor: "pointer",
                              marginTop: "1.5rem",
                              width: "12rem",
                            }}
                          >
                            Don't have an account ?
                          </Button>
                        </div>
                      </div>
                      <div className="col-md-12 align-items-center justify-content-center">
                        <div className="d-flex flex-row align-items-center justify-content-center">
                          <Button
                            className="loginButton"
                            onClick={() => this.props.history.push("/forget")}
                            style={{
                              fontSize: "0.75rem",
                              backgroundColor: Colors.primary,
                              color: "black",
                              cursor: "pointer",
                              width: "12rem",
                              marginTop: "1.5rem",
                            }}
                          >
                            Forget Password ?
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Login;
