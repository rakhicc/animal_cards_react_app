import React from "react";
import { useParams, useHistory } from "react-router";
const AnimalSingle = () => {
  let history = useHistory();
  let { animal } = useParams();
  /* console.log(useHistory);
  console.log(useParams); */
  return (
    <div className="singleinfo">
      <div className="singleAnimal">
        <p className="para">Animal is here: {animal}</p>
      </div>
      <img
        src={`https://source.unsplash.com/1600x900/?${animal}`}
        alt="animal_picture"
      />
      <div>
        <button onClick={() => history.goBack()}>Back to animals</button>
      </div>
    </div>
  );
};

export default AnimalSingle;
