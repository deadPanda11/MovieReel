import { useState } from "react";
import moviesData from "../../data/movies.json";
import MovieCard from "./MovieCard";
import Pagination from "../Helpers/Pagination";

const MoviesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentMovies = moviesData.movies.slice(firstItemIndex, lastItemIndex);

  const moviesList = currentMovies.map((movie) => (
    <MovieCard
      id={movie._id}
      key={movie._id}
      title={movie.title}
      overview={movie.overview}
      poster={movie.poster_path}
      release_date={movie.release_date}
      genres={movie.genres}
    />
  ));

  return (
    <div className="px-4 mt-10 mb-20 md:px-8 lg:px-16 xl:px-32">
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {moviesList}
        </ul>
        <Pagination
          totalItems={moviesData.movies.length}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default MoviesList;
