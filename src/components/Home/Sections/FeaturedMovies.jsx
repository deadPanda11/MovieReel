/* eslint-disable react/prop-types */
const FeaturedMovies = ({ featuredMovies }) => {
  return (
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
  );
};

export default FeaturedMovies;
