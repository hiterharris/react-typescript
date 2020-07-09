import * as React from 'react';
import {useState} from 'react';
import './App.css';

interface Props {
    count?: number;
    name?: string;
}

const Counter: React.FC<Props> = (props) => {
    const [count, setCount] = useState(0)
    const [name] = useState('Hiter')
    const increment = () => {
        setCount(count + 1);
      };
      const decrement = () => {
        setCount(count - 1);
      };
      const reset = () => {
        setCount(0);
      }
    return(
      <div>
        <h1>{name}</h1>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>  
    );
}

export default Counter;