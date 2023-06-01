import { useState } from 'react';
import React from 'react';

// Parent Component
const App = () => {
  const [counter, setCounter] = useState(0);
  console.log('rendering with counter value', counter);

  const increaseByOne = () => {
    console.log('increasing, value before', counter);
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter);
    setCounter(counter - 1);
  };
  const setToZero = () => {
    console.log('resetting to zero, value before', counter);
  };

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="zero" />
      <Button handleClick={decreaseByOne} text="minus" />
    </div>
  );
};

// Children Component
const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

export default App;
