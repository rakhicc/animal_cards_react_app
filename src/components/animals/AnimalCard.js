import React from "react";

const AnimalCard = (props) => {
  return (
    <div className="animalCard">
      <h2>{props.name}</h2>
      <img
        src={`https://source.unsplash.com/1600x900/?${props.name}`}
        alt="animal_picture"
      />
    </div>
  );
};

export default AnimalCard;
