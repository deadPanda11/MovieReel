import { createContext, useContext, useState } from "react";

const WatchLaterContext = createContext();

// eslint-disable-next-line react/prop-types
export const WatchLaterProvider = ({ children }) => {
  const [watchLaterMovies, setWatchLaterMovies] = useState([]);

  const addToWatchLater = (movie) => {
    setWatchLaterMovies((prevMovies) => [...prevMovies, movie]);
  };

  const removeFromWatchLater = (movieId) => {
    setWatchLaterMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== movieId)
    );
  };

  return (
    <WatchLaterContext.Provider
      value={{ watchLaterMovies, addToWatchLater, removeFromWatchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWatchLater = () => useContext(WatchLaterContext);
