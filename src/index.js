import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import App from 'components/App';
import './index.css';
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
