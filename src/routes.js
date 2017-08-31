import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import LoginPage from './components/login/login.page';
import AboutPage from './components/about/about.page';
import ChatPage from './components/chat/chat.page';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LoginPage} />
        <Route path="about" component={AboutPage} />
        <Route path="chat" component={ChatPage} />
    </Route>
);