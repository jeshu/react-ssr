import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import routes from "./Routes";
import axios from "axios";
import App from "./App";

const axiosInstance = axios.create({
  baseURL: "/api",
});
const store = createStore(
  reducers,
  window.INITAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <App.component routes={routes[0].routes}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
