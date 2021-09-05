import './App.css'
import { useState } from 'react'

const COIN_TO_CURRENCY = [0.01, 0.05, 0.10, 0.25]
const COIN_TO_LABEL = [['Penny', 'Pennies'], ['Nickel', 'Nickels'], ['Dime', 'Dimes'], ['Quarter', 'Quarters']]

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
    // toFixed ensures that the dime button is listed as $0.10 rather than $0.1
    const label = `$${COIN_TO_CURRENCY[index].toFixed(2)}`;
    const handleIncrease = () => increaseCounter(index);
    return renderCoinCounter(label, handleIncrease);
  });

  const coinTotals = coinAmount.map((amount, index) => {
    const coinLabels = (amount === 0 || amount > 1) ? COIN_TO_LABEL[index][1] : COIN_TO_LABEL[index][0];
    return <span>{coinLabels}: {amount} </span>
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
      <div>{renderTotal}</div>
      <div>{coinTotals}</div>
      <div>{coinCounters}</div>
      
    </div>
  );
}






export default App;
