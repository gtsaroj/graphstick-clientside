import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from "./CardReducer/store"


const root = document.getElementById('root');
ReactDOM.createRoot(root).render
  (
    <React.StrictMode>
      <Provider store={store} >
        <App />
      </Provider>
    </React.StrictMode>

  );
