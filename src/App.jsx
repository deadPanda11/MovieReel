import MoviesList from "./components/Movies/MoviesList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Helpers/Root";
import MovieDetails from "./components/Movies/MovieDetails";
import ErrorPage from "./components/Helpers/Error";
import Home from "./components//Home/Home";
import WatchLater from "./components/Watchlist/WatchLater";
import Watched from "./components/Watchlist/Watched";
import { WatchLaterProvider } from "./components/Context/WatchLaterContext";
import { WatchedProvider } from "./components/Context/WatchedContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "movies", element: <MoviesList /> },
      { path: "movies/:movieId", element: <MovieDetails /> },
      { path: "watchLater", element: <WatchLater /> },
      { path: "watched", element: <Watched /> },
    ],
  },
]);

function App() {
  return (
    <WatchLaterProvider>
      <WatchedProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </WatchedProvider>
    </WatchLaterProvider>
  );
}

export default App;
