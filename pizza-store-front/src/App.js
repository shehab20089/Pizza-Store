import React, { useEffect } from "react";
import Header from "./components/Header/index";
import Home from "./pages/homePage/index";
import Login from "./pages/loginPage/index";
import Register from "./pages/registerPage/index";
import Cart from "./pages/cartPage/index";
import Addproduct from "./pages/addProductPage/index";
import HistoryPage from "./pages/historyPage";
import SearchPage from "./pages/searchPage";
import { ToastContainer, toast } from "react-toastify";
import Error from "./pages/ErrorPage/index";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./App.scss";
import API from "./api/api";
toast.configure({
  autoClose: 4000,
  hideProgressBar: true,
  style: { width: "auto", minWidth: "30%" },
  draggable: true,
  position: toast.POSITION.TOP_LEFT
});
function App() {
  const history = useHistory();
  const status = useSelector(state => state.authReducer.isLoggedIn);
  const user = useSelector(state => state.authReducer.user);
  const products = useSelector(state => state.productReducer.products);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      let productResponse = await API.get("/product");
      dispatch({
        type: "setProducts",
        payload: productResponse.data.products
      });
      dispatch({
        type: "intializeCart"
      });
      let token = localStorage.getItem("pizza-token");
      if (token) {
        dispatch({ type: "changeStatus", payload: true });

        let userResponse = await API.get("/user", {
          headers: { Authorization: `Bearer ${token}` }
        });
        dispatch({ type: "setUser", payload: userResponse["data"].user });
      }
    }
    fetchData();
  }, []);
  const changeCurrency = () => {
    dispatch({ type: "changeCurrency" });
  };
  const handleLogout = () => {
    localStorage.removeItem("pizza-token");
    dispatch({ type: "setUser", payload: {} });
    dispatch({ type: "changeStatus", payload: false });
    toast.error("you have been logged out");

    history.push("/");
  };
  return (
    <>
      <Header>
        {status ? <a className="nav-link">{"Hi " + user.firstName}</a> : ""}

        <NavLink className="nav-link" activeClassName="activeLink" exact to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" activeClassName="activeLink" to="/cart">
          Cart
        </NavLink>
        <a className="nav-link" onClick={changeCurrency}>
          Change Currency
        </a>
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
          <>
            {user.IsAdmin ? (
              <NavLink
                className="nav-link"
                activeClassName="activeLink"
                to="/add"
              >
                Add Product
              </NavLink>
            ) : (
              <>
                <NavLink
                  className="nav-link"
                  activeClassName="activeLink"
                  to="/history"
                >
                  history
                </NavLink>
              </>
            )}

            <a className="nav-link" onClick={handleLogout}>
              Logout
            </a>
          </>
        )}
      </Header>
      <div>
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
          <Route path="/history">
            <HistoryPage />
          </Route>
          <Route path="/search/:searchResult">
            <SearchPage />
          </Route>

          <Route>
            <Error />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
