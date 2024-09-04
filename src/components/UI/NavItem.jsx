/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavItem = ({ item, link, onClick }) => {
  return (
    <li className="md:py-0 py-2">
      <NavLink
        to={link}
        className={({ isActive }) =>
          `relative inline-block pb-2 transition-colors duration-300 ${
            isActive ? "text-teal-400" : "hover:text-teal-300"
          }`
        }
        onClick={onClick}
      >
        {({ isActive }) => (
          <>
            <span>{item}</span>
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
  );
};

export default NavItem;
