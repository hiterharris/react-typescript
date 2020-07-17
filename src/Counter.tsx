import * as React from 'react';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {setCount} from './actions/count';
import Count from './Count';

const Counter: React.FC<any> = (props) => {
    const [initialCount, setInitialCount] = useState(props.count[0].count);

    useEffect(() => {
      props.setCount();
    }, []);

    console.log(initialCount);

    const [name, setName] = useState('Counter');
      const increment = () => {
        setInitialCount(initialCount + 1);
      };
      const decrement = () => {
        setInitialCount(initialCount - 1);
      };
      const reset = () => {
        setInitialCount(0);
      }

    return(
      <div>
        <h1>{name}</h1>
        <h1>{initialCount}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <Count />
      </div>  
    );
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(
  mapStateToProps,
  {setCount}
)(Counter);