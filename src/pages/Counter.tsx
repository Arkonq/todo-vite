import { useDispatch, useSelector } from 'react-redux';
import { CounterState } from '../types/types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector<CounterState>(state => state.counter.counter) as number;
  const [amount, setAmount] = useState(15);

  const addCounter = () => {
    dispatch({ type: "ADD", payload: amount })
  }

  const removeCounter = () => {
    dispatch({ type: "REMOVE", payload: amount })
  }

  return (
    <div className="counter">
      <div className="container">
        <h2>Counter: {counter}</h2>
        <div className="counter__body">
          <TextField fullWidth id="contained-number" label="Amount" type="number" value={amount} onChange={e => setAmount(Number.parseFloat(e.target.value))} />
          <ButtonGroup fullWidth aria-label="outlined button group">
            <Button onClick={addCounter}>+</Button>
            <Button onClick={removeCounter}>-</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default Counter;