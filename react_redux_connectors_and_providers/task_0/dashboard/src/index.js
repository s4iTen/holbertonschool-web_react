import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import AppContext from "./App/AppContext";
import reportWebVitals from "./reportWebVitals";

const actualUser = {
  email: 'user@example.com',
  password: 'password123',
  isLoggedIn: true,
};

const actualLogOut = () => {
  console.log('Actual user logged out');
};

ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider value={{ user: actualUser, logOut: actualLogOut }}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
