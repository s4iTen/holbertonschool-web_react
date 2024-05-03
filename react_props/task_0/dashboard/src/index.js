import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
// import { createRoot } from 'react-dom';
import "./App/App.css";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default root;
reportWebVitals();
