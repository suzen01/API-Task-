import React from 'react';
import ReactDOM,{render} from 'react-dom';
import ToRoutering from './App';
import './component/Card'
import {BrowserRouter as Router } from 'react-router-dom';





ReactDOM.render(
<Router><ToRoutering /></Router>

,document.getElementById('root'));
// ReactDOM.render(<App/>,document.getElementById('root'));