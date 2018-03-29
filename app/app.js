
// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// Import root app
import App from 'containers/App';


import configureStore from './configureStore';


// Create redux store with history
// eslint-disable-next-line
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);


const MAX_ATTEMPTS = 10;
let attemps = 0;
const render = () => {
  const MOUNT_NODE = document.getElementById('__REACT_MOUNT__');
  if (!MOUNT_NODE) {
    attemps += 1;
    if (attemps < MAX_ATTEMPTS) {
      setTimeout(render, 250);
    }
    return;
  }


  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    const el = document.getElementById('__REACT_MOUNT__');
    if (el) {
      ReactDOM.unmountComponentAtNode(el);
    }
    render();
  });
}

render();

