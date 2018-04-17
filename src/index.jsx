import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';
// Import custom components
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Posts from './posts/posts.component.jsx'
import Users from './users/users.component.jsx'

render(
    <Router>
        <Route path="/" component={Home}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/users" component={Users}/>
    </Router>,
    document.getElementById('container')
);