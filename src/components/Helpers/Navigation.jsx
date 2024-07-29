import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="bg-gradient-to-b from-zinc-950 to-transparent text-white py-3">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">MovieReel</div>
        <ul className="flex space-x-8">
          <li>
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
                  <span>{isActive ? "Home" : "Home"}</span>
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
          <li>
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
          <li>
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
          <li>
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
