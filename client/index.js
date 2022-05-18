import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import history from "./history";
// import store from "./store";
import App from "./App";

ReactDOM.render(
  // <Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </Provider>
  document.getElementById("app")
);