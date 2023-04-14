import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement,multiply  } from './actions';

function App() {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  const handleIncrement = () => {
    dispatch(increment(value));
  };

  const handleDecrement = () => {
    dispatch(decrement(value));
  };

  
  const handleMultiply = () => {
    dispatch(multiply(value));
  };
  
  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <input type="number" value={value} onChange={handleChange} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      
      <div>
          <label>
            Multiply by:
          </label>
          <button onClick={handleMultiply}>Multiply</button>
        </div>


    </div>
  );
}

export default App;

  
