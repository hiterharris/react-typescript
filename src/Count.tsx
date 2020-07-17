import * as React from 'react';
import {useState, useEffect} from 'react';
import './App.css';

import {connect} from 'react-redux';
import {setCount} from './actions/count';

const Count: React.FC<any> = (props) => {
    const [initialCount, setInitialCount] = useState(props.count[0].count);

    useEffect(() => {
      props.setCount();
    }, []);

    console.log(initialCount);

    return(
      <div>
        <h1>Count: {initialCount}</h1>
      </div>  
    );
}

const mapStateToProps = state => {
  return {
    count: state.count,
  }
}

export default connect(
  mapStateToProps,
  {setCount}
)(Count);
