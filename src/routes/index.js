import React from "react";
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";

import history from "../services/history";

import Navbar from "../components/NavbarMenu";
import { Home, Politics, Welcome, UserArea } from "../pages";

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/politics" component={Politics} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/userarea" component={UserArea} />
      </Switch>
    </BrowserRouter>
  </Router>
);

export default Routes;
