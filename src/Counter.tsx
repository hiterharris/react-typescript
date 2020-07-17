import * as React from 'react';
import {useState, useEffect} from 'react';
import './App.css';

import {connect} from 'react-redux';
import {setCount} from './actions/count';

const Counter: React.FC<any> = (props) => {
    const [initialCount, setInitialCount] = useState(props.count[0].count);

    useEffect(() => {
      props.setCount();
    }, []);

    const [name] = useState('Counter')
    //   const decrement = () => {
    //     setCount(count - 1);
    //   };
    //   const reset = () => {
    //     setCount(0);
    //   }

    return(
      <div>
        <h1>{name}</h1>
        <h1>{initialCount}</h1>
        {/* <h1>{count2[0]}</h1> */}

        {/* <button onClick={increment}>Increment</button> */}
        {/* <button onClick={decrement}>Decrement</button> */}
        {/* <button onClick={reset}>Reset</button> */}
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

// export default Counter;