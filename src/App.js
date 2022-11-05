import React from 'react';
import './App.css'
import { useCounter } from './Hook/useCounter';

function App() {
  //Call Custom hook
  const {
    onStartCounterClick,
    onPauseCounterClick,
    resetCount,
    counter,
    isCounterStart
  } = useCounter();



  return (
    <div className="App" data-testid='counterWrapper'>

      <div className="center">
        <h1 data-testid='counterValue'>Counter: {counter}</h1>
        
        {!isCounterStart ? (
          <button onClick={onStartCounterClick}  data-testid="startButton">Start</button>
        ) : (
          <button onClick={onPauseCounterClick} data-testid="pauseButton">Pause</button>
        )}
        &nbsp;
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
}
export default App