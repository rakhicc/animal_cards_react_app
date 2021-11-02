import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
const AnimalCard = (props) => {
  const match = useRouteMatch();
  /* console.log(match); */
  return (
    <div className="animalCard">
      <h2>{props.name}</h2>
      <img
        src={`https://source.unsplash.com/1600x900/?${props.name}`}
        alt="animal_picture"
      />
      <Link to={`${match.url}/${props.name}`}>Read more</Link>
    </div>
  );
};

export default AnimalCard;
