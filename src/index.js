import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);

if (module.hot) {
  module.hot.accept(err => {
    if (err) console.error('Cannot apply HMR update.', err);
  });
}
