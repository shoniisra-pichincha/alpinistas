import React, { Component } from "react";
import "./App.css";
import HomePage from "./HomePage";
import RoutesPage from "./RoutesPage";
import AyudaPage from "./AyudaPage";
import NotFoundPage from "./NotFoundPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/rutas" component={RoutesPage} />
          <Route exact path="/ayuda" component={AyudaPage} />
          <Route exact component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
