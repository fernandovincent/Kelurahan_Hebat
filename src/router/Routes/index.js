import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../../components/pages/Dashboard";
import Kelurahan from "../../components/pages/Kelurahan";
import Kuliner from "../../components/pages/Kuliner";
import Pariwisata from "../../components/pages/Pariwisata";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/daftarkelurahan">
          <Kelurahan />
        </Route>
        <Route path="/pariwisata">
          <Pariwisata />
        </Route>
        <Route path="/kuliner">
          <Kuliner />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
