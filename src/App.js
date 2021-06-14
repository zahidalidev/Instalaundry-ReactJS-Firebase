import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';

//styles
import './css/style.css';
import './css/style.min.css';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Profile from './pages/user/Profile';
import AdminProfile from './pages/admin/Profile';

// components
import MyAppbar from './components/MyAppbar';
import Checkout from './pages/Checkout';
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div>
      <MyAppbar />

      <Route path="/home" exact render={(props) => <Home {...props} />} />
      <Route path="/faq" exact render={(props) => <Faq {...props} />} />
      <Route path="/pricing" exact render={(props) => <Pricing {...props} />} />
      <Route path="/about" exact render={(props) => <About {...props} />} />
      <Route path="/contact" exact render={(props) => <Contact {...props} />} />
      <Route path="/profile" exact render={(props) => <Profile {...props} />} />
      <Route path="/admin" exact render={(props) => <AdminProfile {...props} />} />

      <Redirect to="/home" />
      {/* <Checkout></Checkout> */}

      <Suspense fallback={<div></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
