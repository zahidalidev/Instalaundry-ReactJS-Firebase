import React, { Suspense, useEffect, useState } from "react";
import { useHistory } from "react-router";

// components
import Slider from "../components/Slider/Slider";
import MyTextFeild from "../components/common/MyTextFeild";
import Button from "@material-ui/core/Button";
import { Colors } from "../config/Colors";
import { getAllPostalCodes } from "../services/UserServices";
import { toast } from "react-toastify";

// lazy pages
const About = React.lazy(() => import("./About"));

// laxy components
const Services = React.lazy(() => import("../components/Services"));
const Testimonial = React.lazy(() => import("../components/Testimonial"));

export default function Home() {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [code, setCode] = useState([]);
  const [postalCodes, setPostalCodes] = useState([]);

  const handlePostalCodes = async () => {
    try {
      let res = await getAllPostalCodes();
      if (res) {
        setPostalCodes(res);
      } else {
        setPostalCodes([]);
      }
    } catch (error) {
      console.log("getting all users error: ", error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handlePostalCodes();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCodeCheck = () => {
    let tempCode = code.substr(0, 3);

    let ava = false;
    postalCodes.map((item) => {
      if (item.code.toLowerCase() === tempCode.toLowerCase()) {
        ava = true;
      }
    });

    if (ava) {
      toast.success("Congratulations we are available in you area");
      let user = localStorage.getItem("token");
      if (user) {
        history.push("./register");
      } else {
        history.push("./register");
      }
    } else {
      toast.error("Sorry we are not available in you area");
    }
    console.log(postalCodes, tempCode);
  };

  const handleScroll = function (event) {
    // let scrollTop = event.srcElement.body.scrollTop,
    //     itemTranslate = Math.min(0, scrollTop / 3 - 60);

    setShow(true);
  };

  return (
    <div>
      <Slider />
      <Suspense fallback={<div></div>}>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-8 d-flex justify-content-center align-items-center">
              {/* <h1
                className="display-4 pt-5 text-center mb-5"
                style={{
                  color: Colors.secondary,
                  fontSize: "2.3vw",
                  fontWeight: "bold",
                  marginTop: "-5rem",
                }}
              >
                Check if we are available in your area or not!
              </h1> */}
              <h1
                className="display text-center mb-5 mobMarginTop"
                style={{ fontSize: "2rem", marginTop: "12rem" }}
              >
                Check if we are available in your area or not!
              </h1>
            </div>
          </div>
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ marginTop: "-1rem" }}
          >
            <div className="col-8 d-flex justify-content-center align-items-center">
              <MyTextFeild
                width={"50%"}
                label="Postal Code"
                value={code}
                onChange={(value) => setCode(value)}
              />
            </div>
          </div>
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ marginTop: "1.4rem" }}
          >
            <div className="col-8 d-flex justify-content-center align-items-center">
              <Button
                style={{
                  backgroundColor: Colors.secondary,
                  color: Colors.white,
                }}
                className="btn btn-primary py-md-2 px-md-4 mt-2"
                variant="contained"
                onClick={() => handleCodeCheck()}
              >
                Check
              </Button>
            </div>
          </div>
        </div>
        <Services />

        {show ? <About removeHeader={true} /> : null}

        <Testimonial />
      </Suspense>
    </div>
  );
}
