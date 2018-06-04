import 'rxjs';
import 'rxjs-compat';
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './containers/Routes/index';
import reducers from './reducers/index.js';
import epics from './epics';

const epicMiddleware = createEpicMiddleware(epics);

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(epicMiddleware),
);

ReactDOM.render(<Provider store={store}>
  <Routes />
</Provider>, document.getElementById('root'));
