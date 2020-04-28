import React, { useEffect } from "react";
import Header from "./components/Header/index";
import Home from "./pages/homePage/index";
import Login from "./pages/loginPage/index";
import Register from "./pages/registerPage/index";
import Cart from "./pages/cartPage/index";
import Addproduct from "./pages/addProductPage/index";
import Error from "./pages/ErrorPage/index";
import { createStore } from "redux";
import rootReducer from "./store/store";
import { connect, Provider, useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./App.scss";
import API from "./api/api";

function App() {
  const status = useSelector(state => state.authReducer.isLoggedIn);
  const products = useSelector(state => state.productReducer.products);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      console.log(products);

      let productResponse = await API.get("/product");
      dispatch({
        type: "setProducts",
        payload: productResponse.data.products
      });

      let token = localStorage.getItem("pizza-token");
      if (token) {
        dispatch({ type: "changeStatus", payload: true });

        let userResponse = await API.get("/user", {
          headers: { Authorization: `Bearer ${token}` }
        });
        dispatch({ type: "setUser", payload: userResponse });
      }
    }
    fetchData();
  }, []);
  return (
    <Router>
      <Header>
        <NavLink className="nav-link" activeClassName="activeLink" exact to="/">
          Home
        </NavLink>
        {!status ? (
          <>
            <NavLink
              className="nav-link"
              activeClassName="activeLink"
              to="/login"
            >
              login
            </NavLink>

            <NavLink
              className="nav-link"
              activeClassName="activeLink"
              to="/register"
            >
              register
            </NavLink>
          </>
        ) : (
          ""
        )}

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
