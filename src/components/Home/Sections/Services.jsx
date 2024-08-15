const Services = () => {
  return (
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
  );
};

export default Services;
