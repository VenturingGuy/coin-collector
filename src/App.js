import './App.css';
import Buttons from './Buttons';
import Quantities from './Quantities';
import Total from './Total';

function App() {
  return (
    <div className="App">
      <h1>Coin Collector!</h1>
      <Total
        total="3"
      />
      <Quantities
        pennies="1"
        nickels="2"
        dimes="3"
        quarters="4"
      />
      <Buttons />
    </div>
  );
}

export default App;
