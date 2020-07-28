import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import { Provider } from "react-redux";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// connecting redux devtools extension of chrome with redux store;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
