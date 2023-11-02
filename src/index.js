  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  import { Provider } from 'react-redux';
  import { store, persistor } from "./CardReducer/store"
  import { PersistGate } from 'redux-persist/integration/react'


  const root = document.getElementById('root');
  ReactDOM.createRoot(root).render
    (
      <React.StrictMode>
        <Provider store={store} >
          <PersistGate loading={"Loading"} persistor={persistor}>
            <App />
          </PersistGate>

        </Provider>
      </React.StrictMode>

    );
