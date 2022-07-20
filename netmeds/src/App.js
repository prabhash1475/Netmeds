import './App.css';
import { ControlledCarousel } from './components/ControlledCraousel';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ControlledCarousel />
    </div>
  );
}

export default App;
