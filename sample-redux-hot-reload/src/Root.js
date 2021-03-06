import React from 'react';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>);

export default Root;
