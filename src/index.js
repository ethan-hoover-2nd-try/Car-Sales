import React from 'react';
import ReactDOM from 'react-dom';
import { appReducer } from './reducers/reducers';

// Redux Imports
import {createStore} from 'redux';
import {Provider} from 'react-redux';



import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';



const store = createStore(appReducer);
console.log(store)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
rootElement);
