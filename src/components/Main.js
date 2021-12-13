import React from "react";
import AnimalsList from "./animals/AnimalsList";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/animals" component={AnimalsList} />
      </Switch>
    </div>
  );
};

export default Main;
