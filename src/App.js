import './App.css'
import { useState } from 'react'

const COIN_TO_CURRENCY = [0.01, 0.05, 0.10, 0.25]
const COIN_TO_LABEL = [['Penny', 'Pennies'], ['Nickel', 'Nickels'], ['Dime', 'Dimes'], ['Quarter', 'Quarters']]

function App() {
  const [coinAmount, setCoins] = useState([0, 0, 0, 0]);

  // button component that calls increaseCoin(the handleIncrease/increaseCounter) function on click
  const CoinCounter = (props) => {
    const {increaseCoin, label} = props
    return <button onClick={increaseCoin}>{label}</button>
  }
  
  const increaseCounter = (index) => {
    const coinCopy = [...coinAmount]
    coinCopy[index] += 1
    setCoins(coinCopy)
  }

  const renderCoinCounter = (label, handleIncrease) => (
    <CoinCounter
      label={label}
      increaseCoin={handleIncrease}
    />
   )

  const coinCounters = coinAmount.map((_, index) => {
    // toFixed ensures that the dime button is listed as $0.10 rather than $0.1
    const label = `$${COIN_TO_CURRENCY[index].toFixed(2)}`
    const handleIncrease = () => increaseCounter(index)
    return renderCoinCounter(label, handleIncrease)
  });

  const coinTotals = coinAmount.map((amount, index) => {
    // returns respective coinLabel (through index) as singular or plural based on quantity
    const coinLabels = (amount === 0 || amount > 1) ? COIN_TO_LABEL[index][1] : COIN_TO_LABEL[index][0]
    return <span>{coinLabels}: {amount} </span>
  });

  const renderTotal = () => {
    // Note: Initializing reduce's initial value argument to 0 prevents pennies from adding $1 instead of 1 cent to total
    const runningTotal = coinAmount.reduce((acc, val, index) => {
      return acc + (val * COIN_TO_CURRENCY[index])
     }, 0)
    return <span>Total: ${runningTotal.toFixed(2)}</span>
  }
  
  return (
    <div className="App">
      <h1>Coin Collector!</h1>
      <div>{renderTotal()}</div>
      <div>{coinTotals}</div>
      <div>{coinCounters}</div>
    </div>
  );
}

export default App;
