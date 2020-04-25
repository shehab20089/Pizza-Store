import React from "react";
import logo from "./logo.svg";
import Home from "./pages/homePage/index";
import Login from "./pages/loginPage/index";
import Register from "./pages/registerPage/index";
import Cart from "./pages/cartPage/index";
import Addproduct from "./pages/addProductPage/index";
import Error from "./pages/ErrorPage/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="(/home|/)/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/add">
            <Addproduct />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
