/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const WatchedContext = createContext();

export const WatchedProvider = ({ children }) => {
  const [watchedMovies, setWatchedMovies] = useState([]);

  const addToWatched = (movie) => {
    const movieExists = watchedMovies.some(
      (existingMovie) => existingMovie.id === movie.id
    );

    if (movieExists) {
      console.log("This movie is already in the Watched list.");
      return;
    }

    setWatchedMovies((prevMovies) => [...prevMovies, movie]);
  };

  const removeFromWatched = (movieId) => {
    setWatchedMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== movieId)
    );
  };

  return (
    <WatchedContext.Provider
      value={{ watchedMovies, addToWatched, removeFromWatched }}
    >
      {children}
    </WatchedContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWatched = () => useContext(WatchedContext);
