import React from 'react';
import {render} from 'react-dom';

import './styles.css';
import {Count} from './components/counter/count';


render(
    <Count/>,
    document.getElementById('root')
);