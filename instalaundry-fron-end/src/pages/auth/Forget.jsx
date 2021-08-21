import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";

import img1 from "../../assets/img/2.jpg";
import "./Login.css";
import { Colors } from "../../config/Colors";
import { toast } from "react-toastify";
import {
  generateCode,
  loginUser,
  updateUserPassword,
  varifyCode,
} from "../../services/UserServices";
import axios from "axios";

function Forget(props) {
  const [showCodeInput, setShowCodeInput] = useState("1");
  const [email, setEmail] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const history = useHistory();

  const handleForgetCode = async (code) => {
    var data = {
      service_id: "service_siowrj7",
      template_id: "template_0bvfsqc",
      user_id: "user_ef7lljg2cLfLEVyVsoysv",
      template_params: {
        message: `your varification code is ${code}`,
        to_email: email,
      },
    };
    try {
      await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Check Your Email address");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleEmailSentCode = async () => {
    try {
      let code = await generateCode(email);
      if (code) {
        handleForgetCode(code);
        setShowCodeInput("2");
      } else {
        alert("Email is not correct");
      }
    } catch (error) {
      alert("Email is not correct");
    }
  };

  const handleConfirmCode = async () => {
    try {
      let code = await varifyCode(confirmCode);
      if (code) {
        setShowCodeInput("3");
      } else {
        alert("Code is not Correct!");
      }
    } catch (error) {
      alert("Code is not Correct!");
    }
  };

  const handleChangePassword = async () => {
    try {
      let upda = await updateUserPassword(email, newPassword);
      if (upda) {
        alert("Password Updated");
        history.push("/login");
      } else {
        alert("updation Error");
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="page-header container-fluid bg-secondary pt-2 pt-lg-4 pb-2">
        <div className="container py-1" style={{ marginTop: "5rem" }}>
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="mb-4 mb-md-0 text-white">Forget Password</h1>
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

      <div
        className="container-fluid"
        style={{
          backgroundImage: "url(" + img1 + ")",
          backgroundSize: "cover",
          padding: "2rem",
          height: "42rem",
          opacity: "0.9",
        }}
      >
        <div className="container-fluid">
          <div className="container loginContainer forget2Container">
            <div className="row" style={{ justifyContent: "center" }}>
              <h1
                className="loginHeading"
                style={{ color: Colors.secondary, marginTop: "4rem" }}
              >
                Forget Password
              </h1>
              <div className="col-md-12">
                <div className="col-md-12">
                  {showCodeInput == "1" ? (
                    <TextField
                      className="loginTextFeild"
                      label="Email"
                      variant="outlined"
                      size="medium"
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ marginTop: "-7rem" }}
                    />
                  ) : null}
                  {showCodeInput == "2" ? (
                    <TextField
                      className="loginTextFeild"
                      label="Put Code here"
                      variant="outlined"
                      size="medium"
                      onChange={(e) => setConfirmCode(e.target.value)}
                      style={{ marginTop: "-7rem" }}
                    />
                  ) : null}

                  {showCodeInput == "3" ? (
                    <TextField
                      className="loginTextFeild"
                      label="New Password"
                      variant="outlined"
                      size="medium"
                      onChange={(e) => setNewPassword(e.target.value)}
                      style={{ marginTop: "-8rem" }}
                    />
                  ) : null}
                </div>

                <div className="col-md-12 align-items-center justify-content-center">
                  <div className="d-flex flex-row align-items-center justify-content-center">
                    {showCodeInput == "1" ? (
                      <Button
                        onClick={() => handleEmailSentCode()}
                        className="loginButton"
                        style={{
                          backgroundColor: Colors.secondary,
                          // marginLeft: 'rem !important',
                          marginBottom: "10rem",
                        }}
                        variant="contained"
                        color="primary"
                      >
                        Send Code
                      </Button>
                    ) : null}
                    {showCodeInput == "2" ? (
                      <Button
                        onClick={() => handleConfirmCode()}
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
                    {showCodeInput == "3" ? (
                      <Button
                        onClick={() => handleChangePassword()}
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
