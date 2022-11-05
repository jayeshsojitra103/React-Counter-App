import { useState } from "react";

let intervalId;

export const useCounter = () => {
  //Local State
  let [counter, setCounter] = useState(0);
  let [isCounterStart, setIsCounterStart] = useState(false);

  //Start Counter incrementing
  const onStartCounterClick = () => {
    setIsCounterStart(true);
    intervalId = setInterval(() => {
      setCounter(counter++);
    }, 1000);
  };

  //Pause counter and clear interval
  const onPauseCounterClick = () => {
    clearInterval(intervalId);
    setIsCounterStart(false);
  };

  //Reset Counter value and reset interal
  const resetCount = () => {
    setCounter(0);
    setIsCounterStart(false);
    clearInterval(intervalId);
  };
  return {
    onStartCounterClick,
    onPauseCounterClick,
    resetCount,
    counter,
    isCounterStart
  };
};
