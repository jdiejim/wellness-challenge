import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { Route } from 'react-router-dom';
import thunk from 'redux-thunk';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const history = createHistory();
const router = routerMiddleware(history);
const middleware = [router, thunk];
const store = createStore(
  rootReducer,
  devTools,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
