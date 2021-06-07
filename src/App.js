import MyAppbar from './components/MyAppbar';
import Home from './pages/Home';
import './css/style.css';
import './css/style.min.css';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <MyAppbar />
      {/* <Home /> */}
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
