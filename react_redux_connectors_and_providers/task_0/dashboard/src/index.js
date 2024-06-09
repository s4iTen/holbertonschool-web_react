import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from "./App/App";
import AppContext from "./App/AppContext";
import uiReducer from './reducers/uiReducer'; // replace with the actual path to your uiReducer
import reportWebVitals from "./reportWebVitals";

const actualUser = {
  email: 'user@example.com',
  password: 'password123',
  isLoggedIn: true,
};

const actualLogOut = () => {
  console.log('Actual user logged out');
};

let store = createStore(uiReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContext.Provider value={{ user: actualUser, logOut: actualLogOut }}>
        <App />
      </AppContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();