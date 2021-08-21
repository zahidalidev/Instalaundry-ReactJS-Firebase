import React, { Suspense, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import gif1 from "../src/assets/img/gif1.gif";

//styles
import "react-toastify/dist/ReactToastify.css";
import "./css/style.css";
import "./css/style.min.css";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Profile from "./pages/user/Profile";
import Checkout from "./pages/Checkout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminProfile from "./pages/admin/Profile";
import Orderdetails from "./pages/Orderdetails";
import Forget from "./pages/auth/Forget";

// components
import MyAppbar from "./components/MyAppbar";
import ScrollToTop from "./components/ScrollToTop";
const Footer = React.lazy(() => import("./components/Footer"));

function App(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <>
      <ScrollToTop />
      {loading ? (
        <div className="container-fluid">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ marginTop: "9rem" }}
          >
            <img src={gif1} style={{ height: "20rem", width: "25rem" }}></img>
          </div>
        </div>
      ) : (
        <div>
          <ToastContainer
            autoClose={5000}
            position={toast.POSITION.TOP_RIGHT}
          />

          <MyAppbar />

          <Route path="/home" exact render={(props) => <Home {...props} />} />
          <Route path="/faq" exact render={(props) => <Faq {...props} />} />
          <Route
            path="/pricing"
            exact
            render={(props) => <Pricing {...props} />}
          />
          <Route path="/about" exact render={(props) => <About {...props} />} />
          <Route
            path="/contact"
            exact
            render={(props) => <Contact {...props} />}
          />
          <Route
            path="/profile"
            exact
            render={(props) => <Profile {...props} />}
          />
          <Route
            path="/admin"
            exact
            render={(props) => <AdminProfile {...props} />}
          />
          <Route
            path="/register"
            exact
            render={(props) => <Register {...props} />}
          />
          <Route path="/login" exact render={(props) => <Login {...props} />} />
          <Route
            path="/checkout"
            exact
            render={(props) => <Checkout {...props} />}
          />
          <Route
            path="/orderdetails"
            exact
            render={(props) => <Orderdetails {...props} />}
          />
          <Route
            path="/forget"
            exact
            render={(props) => <Forget {...props} />}
          />

          <Redirect
            to={{
              pathname: "/home",
              state: { from: props.location },
            }}
          />

          <Suspense fallback={<div></div>}>
            <Footer />
          </Suspense>
        </div>
      )}
    </>
  );
}

export default App;
