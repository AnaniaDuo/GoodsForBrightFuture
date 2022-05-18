import React, { Component } from "react";
import AllProducts from "./components/AllProducts";
import Locations from "./components/Locations";
import Home from "./components/Home";
import SingleProduct from "./components/SingleProduct";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";

export class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={AllProducts} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/locations" component={Locations} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
