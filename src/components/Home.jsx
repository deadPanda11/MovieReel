import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "./UI/Backdrop";
import moviesData from "../data/movies.json";

const Home = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(() => {
    const randomMovies = moviesData.movies
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    setFeaturedMovies(randomMovies);
  }, []);

  return (
    <div className="min-h-screen text-white">
      <Backdrop imageUrl="" blur={false} overlay={true} />
      <section className="flex flex-col items-center justify-center text-center py-10 bg-cover bg-center bg-no-repeat">
        <h1 className="text-5xl font-bold mb-4">Welcome to MovieReel</h1>
        <p className="text-xl mb-8">
          Discover, Track, and Enjoy Your Favorite Movies
        </p>
        <Link
          to="/movies"
          className="px-6 py-3 bg-teal-700 rounded-full hover:bg-teal-600 transition duration-300"
        >
          Explore Movies
        </Link>
      </section>
      <section className="px-4 md:px-8 lg:px-16 xl:px-32">
        <h2 className="text-3xl font-bold mt-10 mb-8 text-center">
          Featured Movies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredMovies.map((movie) => (
            <div
              key={movie._id}
              className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={movie.poster_path}
                alt={movie.title}
                className="w-full h-72 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl ml-4 font-semibold">{movie.title}</h3>
              <p className="text-sm ml-4 mb-4 text-gray-400">
                {new Date(movie.release_date).getFullYear()}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 py-20 md:px-8 lg:px-16 xl:px-32 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose MovieReel?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Track Your Movies</h3>
            <p className="text-gray-400">
              Keep track of movies you want to watch later or have already
              watched. Easily manage your personal watchlist and discover new
              films.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Discover New Movies</h3>
            <p className="text-gray-400">
              Explore our curated collection of movies, including new releases,
              popular films, and hidden gems. Find something new to watch every
              day.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Detailed Movie Information
            </h3>
            <p className="text-gray-400">
              Get detailed information about each movie, including cast, crew,
              synopsis, and more. Know everything before you decide to watch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
