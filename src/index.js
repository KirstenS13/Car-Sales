import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//import Provider from redux
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';

//import our redux store from App.js
import { store } from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
