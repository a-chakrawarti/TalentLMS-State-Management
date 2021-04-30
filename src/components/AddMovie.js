import React, { useState } from "react";
import { useGlobalContext } from "./context";

const AddMovie = () => {
  const { setMovieList } = useGlobalContext();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      setMovieList((prevState) => [
        ...prevState,
        {
          name,
          price,
          id: new Date().getTime(),
        },
      ]);
      setName("");
      setPrice("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a movie"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
