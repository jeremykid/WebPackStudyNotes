//main.js 
// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());

//使用ES6的模块定义和渲染Greeter模块
import React from 'react';
import {render} from 'react-dom';
// import Greeter from './Greeter';
// import 

import './main.css';
//使用require导入css文件
import Echart from './echart';

// import { createStore, combineReducers } from 'redux'
// import { Provider } from 'react-redux'
// import { Router, Route, browserHistory } from 'react-router'
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// import reducers from '<project-path>/reducers'

// render(<Greeter />, document.getElementById('root'));
// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());

// React.render(<TestComponent />, document.getElementById('content'));

// var example = require('./example.js');
// document.getElementById('content').appendChild(example());

render(<Echart />, document.getElementById('content'));
