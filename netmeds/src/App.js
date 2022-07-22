import './App.css';
import { ControlledCarousel } from './components/ControlledCraousel';
import { Navbar } from './components/Navbar';
import Paymentdetail from './components/Paymentdetail';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ControlledCarousel />
      <Paymentdetail />
      <Home />
    </div>
  );
}

export default App;
