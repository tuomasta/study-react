import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configure-store';
import { Provider } from 'react-redux';

// add styles into webpack bundle
import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);