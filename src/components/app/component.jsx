import React from "react";
import { Switch, Route } from "react-router-dom";
import Results from "../../pages/results/component";
import Home from "../../pages/home/component";
import "../../global.css";

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/results" component={Results} />
  </Switch>
);
export default App;
