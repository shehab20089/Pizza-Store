import React from "react";
import Header from "./components/Header/index";
import Home from "./pages/homePage/index";
import Login from "./pages/loginPage/index";
import Register from "./pages/registerPage/index";
import Cart from "./pages/cartPage/index";
import Addproduct from "./pages/addProductPage/index";
import Error from "./pages/ErrorPage/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header>
        <NavLink className="nav-link" activeClassName="activeLink" exact to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" activeClassName="activeLink" to="/login">
          login
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="activeLink"
          to="/register"
        >
          register
        </NavLink>
        <NavLink className="nav-link" activeClassName="activeLink" to="/cart">
          cart
        </NavLink>
      </Header>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
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
