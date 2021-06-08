import MyAppbar from './components/MyAppbar';
import Home from './pages/Home';
import './css/style.css';
import './css/style.min.css';
import About from './pages/About';
import Footer from './components/Footer';
import Price from './pages/Price';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <MyAppbar />
      {/* <Price></Price> */}
      {/* <Home /> */}
      {/* <About></About> */}
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
