import * as React from 'react';
import { render } from 'react-dom';
import App from './App';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {countReducer} from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(countReducer, applyMiddleware(thunk, logger));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('main')
);