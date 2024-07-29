import { useWatched } from "../Context/WatchedContext";
import MovieCard from "../Movies/MovieCard";

const Watched = () => {
  const { watchedMovies } = useWatched();

  if (watchedMovies.length === 0) {
    return (
      <p className="text-center text-white text-xl mt-4">
        No movies added to Watched.
      </p>
    );
  }

  return (
    <div className="px-4 mt-10 mb-20 md:px-8 lg:px-16 xl:px-32">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {watchedMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} pageType="watched" />
        ))}
      </ul>
    </div>
  );
};

export default Watched;
