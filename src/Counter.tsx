import * as React from 'react';
import {useState} from 'react';

interface Props {
    count?: number;
}

const Counter: React.FunctionComponent<Props> = (props) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1);
      };
      const decrement = () => {
        setCount(count - 1);
      };
    return(
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>  
    );
}

export default Counter;