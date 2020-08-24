import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarLoggedIn from "./Components/Navbars/NavbarLoggedIn";
import NavbarLoggedOut from "./Components/Navbars/NavbarLoggedOut";
import About from "./Components/Pages/About";
import Pictures from "./Components/Pages/Pictures";
import ItemDetail from "./Components/ItemDetail";
import Profile from "./Components/Pages/Profile";
import Cart from "./Components/Pages/Cart";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavbarLoggedIn />
          <NavbarLoggedOut />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/pictures" exact component={Pictures} />
            <Route path="/shop/:id" component={ItemDetail} />
            <Route path="/profile" component={Profile} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
