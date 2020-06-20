import React from "react";
import "@babel/polyfill";
import { render } from "react-dom";
import App from "./components/app/component";
import configureStore from "./store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

// Configure store called to get store object.
const store = configureStore();

// Connects store to app and binds react components to root.
render(
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>,
	document.getElementById("root")
);
