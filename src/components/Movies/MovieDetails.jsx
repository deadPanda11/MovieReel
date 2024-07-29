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
    <div className="px-32 py-5 flex">
      <Backdrop imageUrl={movie.backdrop_path} blur={false} overlay={true} />
      <div className="w-1/3">
        <img
          src={movie.poster_path}
          className="h-[600px] mx-auto my-4"
          alt={movie.title}
        />
      </div>
      <div className="w-2/3 px-8 text-white">
        <h1 className="font-bold text-5xl mt-2 mb-4">{movie.title}</h1>
        <div className="flex items-center text-lg mb-4">
          <span>{new Date(movie.release_date).getFullYear()}</span>
          <span className="mx-2">|</span>
          <span>{movie.duration} mins</span>
          <span className="mx-2">|</span>
          <span>{movie.ageLimit}+</span>
        </div>
        <div className="flex flex-wrap">
          {movie.genres.map((genre) => (
            <Tag key={genre} genre={genre} className="mr-2 mb-2" />
          ))}
        </div>
        <h2 className="text-gray-300 text-md mt-4 mb-2">Overview</h2>
        <div className="border-b border-gray-300"></div>
        <p className="text-xl mt-4 mb-4">{movie.overview}</p>
        <div className="flex mt-16">
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
