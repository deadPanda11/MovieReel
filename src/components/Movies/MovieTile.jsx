/* eslint-disable react/prop-types */
import { useState } from "react";
import { useWatchLater } from "../Context/WatchLaterContext";
import { useWatched } from "../Context/WatchedContext";
import Tag from "../UI/Tag";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieTile = (props) => {
  const { watchLaterMovies, removeFromWatchLater } = useWatchLater();
  const { addToWatched } = useWatched();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!watchLaterMovies) {
    return null;
  }

  const releaseYear = props.release_date
    ? props.release_date.split("-")[0]
    : "";

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMarkAsWatched = (e) => {
    e.stopPropagation();
    addToWatched(props);
    toast.success(`You marked ${props.title} as watched`);
    setIsDropdownOpen(false);
  };

  const handleRemoveFromWatchLater = (e) => {
    e.stopPropagation();
    removeFromWatchLater(props.id);
    toast.info(`${props.title} removed from Watch Later`);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative flex bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
      <Link to={`/movies/${props.id}`}>
        <img
          src={props.poster}
          alt={props.title}
          className="w-32 h-auto object-cover"
        />
      </Link>
      <div className="flex-1 p-4">
        <p className="text-lg font-bold mb">{props.title}</p>
        <p className="text-gray-400 mb-2">{releaseYear}</p>
        <div className="flex flex-wrap text-xs mt-4">
          {props.genres.map((genre) => (
            <Tag key={genre} genre={genre} className="mr-2 mb-2" />
          ))}
        </div>
      </div>
      <div className="relative p-2 mt-4 mr-2">
        <button
          className="focus:outline-none"
          onClick={toggleDropdown}
          aria-label="More actions"
        >
          <FaEllipsisV size={20} />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-gray-700 text-white rounded shadow-md">
            <button
              className="block px-4 py-2 text-sm w-56 border-b-[1px] border-gray-500 text-left hover:bg-gray-600"
              onClick={handleMarkAsWatched}
            >
              Mark as Watched
            </button>
            <button
              className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-600"
              onClick={handleRemoveFromWatchLater}
            >
              Remove from Watch Later
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieTile;
