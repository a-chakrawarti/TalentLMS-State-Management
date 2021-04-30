import React from "react";
import Movie from "./Movie";

import { useGlobalContext } from "./context";

const MovieList = () => {
  const { movieList } = useGlobalContext();
  console.log(movieList);
  return (
    <>
      <div>movieList</div>
      {movieList.map((item) => (
        <Movie key={item.id} data={item} />
      ))}
    </>
  );
};

export default MovieList;
