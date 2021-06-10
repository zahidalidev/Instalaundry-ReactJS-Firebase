import React, { Suspense } from 'react';

//styles
import './css/style.css';
import './css/style.min.css';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Price from './pages/Price';
import Faq from './pages/Faq';
import Contact from './pages/Contact';

// components
import MyAppbar from './components/MyAppbar';
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div>
      <MyAppbar />
      <Faq></Faq>

      {/* <Home /> */}
      {/* <Price />
      <About />
      <Contact /> */}
      <Suspense fallback={<div></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
