import moviesData from "../../data/movies.json";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  const moviesList = moviesData.movies.map((movie) => (
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
      </div>
    </div>
  );
};

export default MoviesList;
