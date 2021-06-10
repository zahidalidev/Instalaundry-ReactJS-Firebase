import React, { Suspense } from 'react';
import { Route } from 'react-router';

//styles
import './css/style.css';
import './css/style.min.css';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Faq from './pages/Faq';
import Contact from './pages/Contact';

// components
import MyAppbar from './components/MyAppbar';
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div>
      <MyAppbar />

      <Route path="/home" exact render={props => <Home {...props} />} />
      <Route path="/faq" exact render={props => <Faq {...props} />} />
      <Route path="/pricing" exact render={props => <Pricing {...props} />} />
      <Route path="/about" exact render={props => <About {...props} />} />
      <Route path="/contact" exact render={props => <Contact {...props} />} />

      <Suspense fallback={<div></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
