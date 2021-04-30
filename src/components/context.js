import React, { useState, createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = [
    {
      name: "The Chronicles of Narnia",
      id: 1,
      price: 2.34,
    },
    {
      name: "Harry Potter and the Philosopher's Stone",
      id: 2,
      price: 1.5,
    },
    {
      name: "Shrek the Third",
      id: 3,
      price: 0.99,
    },
    {
      name: "The Polar Express",
      id: 4,
      price: 0.75,
    },
    {
      name: "Puss in Boots",
      id: 5,
      price: 1.45,
    },
  ];
  const [movieList, setMovieList] = useState(initialState);

  return (
    <AppContext.Provider
      value={{
        movieList,
        setMovieList,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
