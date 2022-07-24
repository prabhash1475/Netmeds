import './App.css';
import { ControlledCarousel } from './components/ControlledCraousel';
import { Navbar } from './components/Navbar';
import Paymentdetail from './components/Paymentdetail';
import { Home } from './components/Home';
import { Net } from './components/Net';
import { Footer } from './components/Footer';
import { Top } from './components/Top';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ControlledCarousel />
      <Paymentdetail />
      <Home />
      <Net />
      <Top />
      <Footer />
    </div>
  );
}

export default App;
