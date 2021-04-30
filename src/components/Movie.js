import React from "react";

const Movie = ({ data }) => {
  return (
    <>
      <div>
        <h3>{data.name}</h3>
        <p>${data.price}</p>
      </div>
    </>
  );
};

export default Movie;
