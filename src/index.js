// Lib
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Components
import App from './components/App';

// Store
import Store, { persist } from './store';

ReactDOM.render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persist}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
