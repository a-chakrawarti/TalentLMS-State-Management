import React from "react";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { movieList } = useGlobalContext();
  return (
    <>
      <nav>
        <span>MymovieDB</span>
        <span style={{ position: "absolute", right: "2rem" }}>
          {movieList.length}
        </span>
      </nav>
    </>
  );
};

export default Navbar;
