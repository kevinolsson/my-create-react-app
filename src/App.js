import React from "react";
import PropTypes from "prop-types";
import { Router } from "Router";
import { Provider } from "react-redux";

export const App = ({ store }) => (
  <Provider store={store}>
    <Router />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object
};
