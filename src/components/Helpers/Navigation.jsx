import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gradient-to-b from-zinc-950 to-transparent text-white py-3">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        <div className="text-2xl font-bold tracking-wide">MovieReel</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12H16m-6 6h6"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:space-x-8 absolute md:relative top-full left-0 right-0 md:top-0 bg-zinc-950 md:bg-transparent md:flex-row flex-col md:p-0 p-4 z-10`}
        >
          <li className="md:py-0 py-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative inline-block pb-2 transition-colors duration-300 ${
                  isActive ? "text-teal-400" : "hover:text-teal-300"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Home</span>
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 transition-transform duration-300 ease-in-out transform ${
                      isActive
                        ? "bg-teal-400 scale-x-100"
                        : "bg-transparent scale-x-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
          <li className="md:py-0 py-2">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `relative inline-block pb-2 transition-colors duration-300 ${
                  isActive ? "text-teal-400" : "hover:text-teal-300"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Movies</span>
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 transition-transform duration-300 ease-in-out transform ${
                      isActive
                        ? "bg-teal-400 scale-x-100"
                        : "bg-transparent scale-x-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
          <li className="md:py-0 py-2">
            <NavLink
              to="/watchLater"
              className={({ isActive }) =>
                `relative inline-block pb-2 transition-colors duration-300 ${
                  isActive ? "text-teal-400" : "hover:text-teal-300"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Watch Later</span>
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 transition-transform duration-300 ease-in-out transform ${
                      isActive
                        ? "bg-teal-400 scale-x-100"
                        : "bg-transparent scale-x-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
          <li className="md:py-0 py-2">
            <NavLink
              to="/watched"
              className={({ isActive }) =>
                `relative inline-block pb-2 transition-colors duration-300 ${
                  isActive ? "text-teal-400" : "hover:text-teal-300"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Watched</span>
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 transition-transform duration-300 ease-in-out transform ${
                      isActive
                        ? "bg-teal-400 scale-x-100"
                        : "bg-transparent scale-x-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
