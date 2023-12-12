import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className="font-medium text-black">
              Let's explore our journey here
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/gallery' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          Gallery
        </NavLink>
        <NavLink to='/message' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          TP's message
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
