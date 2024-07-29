import { useParams } from "react-router-dom";
import moviesData from "../../data/movies.json";
import Backdrop from "../UI/Backdrop";
import Tag from "../UI/Tag";
import Button from "../UI/Button";
import { useWatchLater } from "../Context/WatchLaterContext";
import { useWatched } from "../Context/WatchedContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = moviesData.movies.find(
    (movie) => movie._id.toString() === movieId
  );

  const movieData = {
    id: movie._id,
    key: movie._id,
    title: movie.title,
    overview: movie.overview,
    poster: movie.poster_path,
    release_date: movie.release_date,
    genres: movie.genres,
  };

  const { watchLaterMovies, addToWatchLater, removeFromWatchLater } =
    useWatchLater();
  const { watchedMovies, addToWatched, removeFromWatched } = useWatched();

  if (!movie) {
    return <p>Movie not found</p>;
  }

  const isWatchLater = watchLaterMovies.some(
    (item) => item.id === movieData.id
  );
  const isWatched = watchedMovies.some((item) => item.id === movieData.id);

  const handleWatchLaterClick = () => {
    if (isWatchLater) {
      removeFromWatchLater(movieData.id);
      toast.info(`Removed from Watch Later`);
    } else {
      addToWatchLater(movieData);
      toast.success(`Saved to Watch Later`);
    }
  };

  const handleWatchedClick = () => {
    if (isWatched) {
      removeFromWatched(movieData.id);
      toast.info(`Removed from Watched.`);
    } else {
      addToWatched(movieData);
      toast.success(`Marked as watched.`);
    }
  };

  return (
    <div className="px-4 md:px-8 lg:px-32 py-5 flex flex-col lg:flex-row">
      <Backdrop imageUrl={movie.backdrop_path} blur={false} overlay={true} />
      <div className="w-full md:max-w-30 lg:w-1/3 mb-8 lg:mb-0">
        <img
          src={movie.poster_path}
          className="w-full h-auto mx-auto"
          alt={movie.title}
        />
      </div>
      <div className="w-full lg:w-2/3 px-4 lg:px-8 text-white">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mt-2 mb-4">
          {movie.title}
        </h1>
        <div className="flex flex-wrap items-center text-sm md:text-lg mb-4">
          <span>{new Date(movie.release_date).getFullYear()}</span>
          <span className="mx-2">|</span>
          <span>{movie.duration} mins</span>
          <span className="mx-2">|</span>
          <span>{movie.ageLimit}+</span>
        </div>
        <div className="flex flex-wrap mb-4">
          {movie.genres.map((genre) => (
            <Tag key={genre} genre={genre} className="mr-2 mb-2" />
          ))}
        </div>
        <h2 className="text-gray-300 text-sm md:text-md mt-4 mb-2">Overview</h2>
        <div className="border-b border-gray-300"></div>
        <p className="text-base md:text-xl mt-4 mb-4">{movie.overview}</p>
        <div className="flex flex-col md:flex-row mt-8 gap-4">
          <Button
            label={
              isWatchLater ? "Remove from Watch Later" : "Add to Watch Later"
            }
            onClick={handleWatchLaterClick}
          />
          <Button
            label={isWatched ? "Remove from Watched" : "Mark as Watched"}
            onClick={handleWatchedClick}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
