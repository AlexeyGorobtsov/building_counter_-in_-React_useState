import React from 'react';
import {render} from 'react-dom';

import './styles.css';
import { Count } from './components/counter/count';
import { AppCard } from "./components/fetch-and-display-GitHub-users/AppCard";

render(
    <div>
        <Count/>
        <AppCard/>
    </div>,
    document.getElementById('root')
);