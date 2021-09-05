import './App.css'
import Buttons from './Buttons'
import Total from './Total'
import { useState } from 'react'

const COIN_TO_CURRENCY = [0.01, 0.05, 0.10, 0.25]
const COIN_TO_LABEL = [['penny', 'pennies'], ['nickel', 'nickels'], ['dime', 'dimes'], ['quarter', 'quarters']]

const CoinCounter = (props) => {
  const {increaseCoin, label} = props
  return <button onClick={increaseCoin}>
    {label}
   </button>
}

function App() {
  const [coinAmount, setCoins] = useState([0, 0, 0, 0]);
  
  const increaseCounter = (index) => {
    const coinCopy = [...coinAmount];
    coinCopy[index] += 1;
    setCoins(coinCopy);
  }

  const renderCoinCounter = (label, handleIncrease) => (
    <CoinCounter
      increaseCoin={handleIncrease}
      label={label}
    />
   )

  const coinCounters = coinAmount.map((_, index) => {
    const label = `$0.${COIN_TO_CURRENCY[index]}`;
    const handleIncrease = () => increaseCounter(index);
    return renderCoinCounter(label, handleIncrease);
  });


  const renderTotal = () => {
    const runningTotal = coinAmount.reduce((acc, val, index) => {
      return acc + (val * COIN_TO_CURRENCY[index]);
     });
    return <span>Total: ${runningTotal}</span>
  }
  
    return (
    <div className="App">
      <h1>Coin Collector!</h1>
      
      <Buttons />
    </div>
  );
}






export default App;
