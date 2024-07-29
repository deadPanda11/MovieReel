import { useWatchLater } from "../Context/WatchLaterContext";
import MovieTile from "../Movies/MovieTile";

const WatchLater = () => {
  const { watchLaterMovies } = useWatchLater();

  if (watchLaterMovies.length === 0) {
    return (
      <p className="text-center text-white text-xl mt-4">
        No movies added to Watch Later.
      </p>
    );
  }

  return (
    <div className="px-4 mt-10 mb-20 md:px-8 lg:px-16 xl:px-32">
      <ul className="space-y-4">
        {watchLaterMovies.map((movie) => (
          <MovieTile key={movie.id} {...movie} />
        ))}
      </ul>
    </div>
  );
};

export default WatchLater;
