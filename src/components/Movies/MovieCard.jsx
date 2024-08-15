/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Tag from "../UI/Tag";
import { useWatchLater } from "../Context/WatchLaterContext";
import { useState } from "react";
import { toast } from "react-toastify";

const MovieCard = ({
  id,
  release_date,
  title,
  poster,
  genres,
  pageType,
  ...otherProps
}) => {
  const { watchLaterMovies, addToWatchLater, removeFromWatchLater } =
    useWatchLater();

  const [isHovered, setIsHovered] = useState(false);

  if (!watchLaterMovies) {
    return null;
  }

  const isWatchLater = watchLaterMovies.some((movie) => movie.id === id);

  const releaseYear = release_date ? release_date.split("-")[0] : "";

  const handleWatchLaterClick = (e) => {
    e.stopPropagation();
    if (isWatchLater) {
      removeFromWatchLater(id);
      toast.info(`${title} removed from Watch Later`);
    } else {
      addToWatchLater({
        id,
        title,
        release_date,
        poster,
        genres,
        ...otherProps,
      });
      toast.success(`${title} added to Watch Later`);
    }
  };

  return (
    <li
      className="relative w-auto bg-gray-900 text-white rounded-lg shadow-lg transition-transform transition-shadow duration-500 ease-in-out transform hover:scale-105 hover:shadow-gray-500 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/movies/${id}`}>
        <div className="relative">
          <img
            src={poster}
            className="w-full h-80 object-cover rounded-t-lg"
            alt={title}
          />
          <div
            className={`absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-black to-transparent opacity-0 transition-opacity duration-500 ${
              isHovered ? "opacity-80" : ""
            }`}
          ></div>
          <div
            className={`absolute bottom-0 left-0 w-full p-4 transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-wrap text-xs">
              {genres.map((genre) => (
                <Tag key={genre} genre={genre} className="mr-2 mb-2" />
              ))}
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm">
            <span className="font-bold">{title}</span>
            <span className="text-gray-400"> ({releaseYear})</span>
          </p>
        </div>
      </Link>
      {isHovered && pageType !== "watched" && (
        <div className="absolute top-3 right-3 flex space-x-2">
          <div className="relative group">
            <button
              onClick={handleWatchLaterClick}
              className="p-2 focus:outline-none"
              aria-label={
                isWatchLater ? "Remove from Watch Later" : "Add to Watch Later"
              }
            >
              <img
                src={
                  isWatchLater ? "/assets/plus_filled.png" : "/assets/plus.png"
                }
                alt={
                  isWatchLater
                    ? "Remove from Watch Later"
                    : "Add to Watch Later"
                }
                className="transition-all duration-300"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
            <div className="absolute mt-2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded px-2 py-1 z-[100]">
              {isWatchLater ? "Remove from Watch Later" : "Add to Watch Later"}
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default MovieCard;
