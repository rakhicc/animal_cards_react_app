import React from "react";
import { animals } from "./animalsdata";
import AnimalCard from "./AnimalCard";
const AnimalsList = () => {
  return (
    <div>
      <ul>
        {animals.map((item) => (
          <AnimalCard key={item.name} name={item.name} />
        ))}
      </ul>
    </div>
  );
};

export default AnimalsList;
