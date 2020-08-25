import React from 'react';
import ReactDOM from 'react-dom';

import App from './src/components/app.js';

// ReactDOM.render(<App /> , document.getElementById('main'));
const target = document.getElementById('tick');
if (target) { ReactDOM.render(<App />, target); }