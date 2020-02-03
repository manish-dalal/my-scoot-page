import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./Home";
import Detail from "./Detail";

export default props => {
  return (
    <Layout>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/detail" exact component={Detail} />

        <Redirect to="/home" />
      </Switch>
    </Layout>
  );
};
