import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

// add styles into webpack bundle
import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);