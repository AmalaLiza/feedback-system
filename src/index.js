import React from "react";
import "@babel/polyfill";
import { render } from "react-dom";
import App from "./components/app/container";
import configureStore from "./store";
import { Provider } from "react-redux";

// Configure store
const store = configureStore();
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
