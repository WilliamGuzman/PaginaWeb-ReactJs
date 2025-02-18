import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SingUp from './components/pages/SingUp';
import Products from './components/pages/Products';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SingUp} />
      </Switch>
    </Router>
  );
}

export default App;
