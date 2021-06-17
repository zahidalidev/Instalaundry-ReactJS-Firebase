import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

//styles
import 'react-toastify/dist/ReactToastify.css';
import './css/style.css';
import './css/style.min.css';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Profile from './pages/user/Profile';
import Checkout from './pages/Checkout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AdminProfile from './pages/admin/Profile';
import Orderdetails from './pages/Orderdetails';

// components
import MyAppbar from './components/MyAppbar';
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div>
      <ToastContainer autoClose={5000} position={toast.POSITION.TOP_RIGHT} />

      <MyAppbar />

      <Route path="/home" exact render={(props) => <Home {...props} />} />
      <Route path="/faq" exact render={(props) => <Faq {...props} />} />
      <Route path="/pricing" exact render={(props) => <Pricing {...props} />} />
      <Route path="/about" exact render={(props) => <About {...props} />} />
      <Route path="/contact" exact render={(props) => <Contact {...props} />} />
      <Route path="/profile" exact render={(props) => <Profile {...props} />} />
      <Route path="/admin" exact render={(props) => <AdminProfile {...props} />} />
      <Route path="/register" exact render={(props) => <Register {...props} />} />
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route path="/checkout" exact render={(props) => <Checkout {...props} />} />
      <Route path="/orderdetails" exact render={(props) => <Orderdetails {...props} />} />

      <Redirect to="/home" />

      <Suspense fallback={<div></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
