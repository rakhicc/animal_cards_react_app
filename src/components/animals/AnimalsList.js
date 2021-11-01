import React from "react";
import { animals } from "./animalsdata";
import AnimalCard from "./AnimalCard";
import { Switch, Route, useRouteMatch } from "react-router";
import AnimalSingle from "./AnimalSingle";
const AnimalsList = () => {
  const match = useRouteMatch();
  const animalsListing = animals.map((item) => (
    <AnimalCard key={item.name} name={item.name} />
  ));
  return (
    <div className="animalslist">
      <Switch>
        <Route exact path={match.path}>
          {animalsListing}
        </Route>
        <Route path={`${match.path}/:animal`}>
          <AnimalSingle />
        </Route>
      </Switch>
    </div>
  );
};

export default AnimalsList;
