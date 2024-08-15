import { useEffect, useState } from "react";
import Welcome from "./Sections/Welcome";
import FeaturedMovies from "./Sections/FeaturedMovies";
import Services from "./Sections/Services";
import Backdrop from "../UI/Backdrop";
import moviesData from "../../data/movies.json";

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
      <Welcome />
      <FeaturedMovies featuredMovies={featuredMovies} />
      <Services />
    </div>
  );
};

export default Home;
