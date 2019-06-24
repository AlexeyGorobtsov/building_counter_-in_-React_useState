import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './styles.css';
import { Count } from './components/counter/count';
import { AppCard } from "./components/fetch-and-display-GitHub-users/AppCard";
import {Dashboard} from "./components/Dashboard.jsx";
import {About} from "./components/About.jsx";

render(
    <Router>
        <div>
            <aside>
                <Link to={'/'}>Dashboard</Link>
                <Link to={'/about'}>About</Link>
            </aside>
            <main>
                <Route exact path={'/'} component={Dashboard}/>
                <Route path={'/about'} component={About} />
            </main>
            <Count/>
            <AppCard/>
        </div>
    </Router>,
    document.getElementById('root')
);