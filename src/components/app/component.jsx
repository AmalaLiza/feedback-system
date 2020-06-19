import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Results from "../../pages/results/component";
import Home from "../../pages/home/component";

class App extends Component {
	render() {
		return (
			<HashRouter>
				{/*
					A <Switch> looks through all its children <Route>
					elements and renders the first one whose path
					matches the current URL. Use a <Switch> any time
					you have multiple routes, but you want only one
					of them to render at a time
					*/}
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/results" component={Results} />
				</Switch>
			</HashRouter>
		);
	}
}

export default App;
