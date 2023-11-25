import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./CardReducer/store";
import { PersistGate } from "redux-persist/integration/react";
import AuthProvider from "./AuthProvider/AuthProvider";
import "./index.css";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <PersistGate loading={"Loading"} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
