import * as React from 'react';
import {useState, useEffect} from 'react';
import './App.css';

import {connect} from 'react-redux';
import {setCount} from './actions/count';

// interface Props {
//     count?: number;
//     name?: string;
//     setCount?: any;
// }

const Counter: React.FC<any> = (props) => {

    useEffect(() => {
      props.setCount();
    }, [])

  
    const countArray = Object.values(props.count[0]);
    let result = countArray.map(({ count }) => count);
    const initialCount = result[0];
    console.log(initialCount);

    // const [name] = useState('Hiter')
    // const increment = () => {
    //     setCount(count + 1);
    //   };
    //   const decrement = () => {
    //     setCount(count - 1);
    //   };
    //   const reset = () => {
    //     setCount(0);
    //   }

    return(
      <div>
        {/* <h1>{name}</h1> */}
        <h1>{initialCount}</h1>
        {/* <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button> */}
      </div>  
    );
}

const mapStateToProps = state => {
  return {
    count: state
  }
}

export default connect(
  mapStateToProps,
  {setCount}
)(Counter);

// export default Counter;