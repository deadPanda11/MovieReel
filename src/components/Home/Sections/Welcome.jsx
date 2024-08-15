import { Link } from "react-router-dom";

const Welcome = () => {
  return (
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
  );
};

export default Welcome;
