import React from "react";
import { useParams, useHistory } from "react-router";
const AnimalSingle = () => {
  let history = useHistory();
  let { animal } = useParams();
  console.log(useHistory);
  console.log(useParams);
  return (
    <div>
      Animal will be here {animal}
      <button onClick={() => history.back}>Click here</button>
    </div>
  );
};

export default AnimalSingle;
