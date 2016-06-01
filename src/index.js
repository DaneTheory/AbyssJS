/*===============================================
    PRIMARY ENTRY POINT FOR REDUX AND REACT APP
=================================================*/
import React  from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import MainLayout  from './components/layouts/MainLayout'
import configureStore  from './store/configureStore'

export const store = configureStore();

const rootElem = document.getElementById('app');

// store.dispatch({
//   type: 'TOGGLE_OPEN',
//   open: false
// })


render(
  <Provider store={store}>
    <MainLayout />
  </Provider>,
  rootElem
);

// if (process.env.NODE_ENV !== 'production' && !window.devToolsExtension) {
//     const devtools = require('./server/devtools');
//     devtools.default(store);
// }
