import React from "react";
import AnimalsList from "./animals/AnimalsList";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Main = () => {
  return (
    <div>
      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/animals" component={AnimalsList} />
      </switch>
    </div>
  );
};

export default Main;
