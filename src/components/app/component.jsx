import React from "react";
import { Switch, Route } from "react-router-dom";
import Results from "../../pages/results/container";
import Home from "../../pages/home/container";
import "../../global.css";

const App = () => {
	/*
		A <Switch> looks through all its children <Route>
		elements and renders the first one whose path
		matches the current URL. Use a <Switch> any time
		you have multiple routes, but you want only one
		of them to render at a time
		*/
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/results" component={Results} />
		</Switch>
	);
};
export default App;
