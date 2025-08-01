import { useState } from "react";
import { NavLink } from "react-router";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import AQTCLogo from "./AQTCLogo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = (
    <>
      {[
        { to: "/", label: "Home" },
        { to: "/aboutDetails", label: "About Us" },

        { to: "/serviceDetails", label: "Service" },
        { to: "/blog", label: "Blog" },
        { to: "/contact", label: "Contact Us" },
      ].map((item) => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `font-bold transition-all duration-500 transform hover:scale-110 hover:text-green-600 ${
                isActive ? "text-green-600" : "text-gray-700"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar bg-base-100 px-4 md:px-10">
      {/* Mobile View */}
      <div className="lg:hidden flex items-center justify-between w-full relative">
        <AQTCLogo />

        <button
          className="btn btn-ghost btn-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <IoMdClose size={22} /> : <FaBars size={20} />}
        </button>

        {isMenuOpen && (
          <ul
            className="absolute top-full right-0 mt-2 bg-base-100 rounded-lg shadow-lg w-52 p-4 flex flex-col gap-3 z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            {navItems}
            <li>
              <button className="btn bg-green-700 text-white border-none w-full hover:bg-amber-900 hover:-translate-y-1 transition-transform duration-300 ease-in-out text-sm">
                REQUEST A CONSULTATION
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <AQTCLogo />
        </div>

        {/* Menu */}
        <ul className="menu menu-horizontal gap-6">{navItems}</ul>

        {/* Button */}
        <button
          className="btn bg-green-700 text-white border-none px-7 ml-3
            hover:bg-amber-900 hover:-translate-y-1 transition-all duration-300 ease-in-out transform"
        >
          REQUEST A CONSULTATION
        </button>
      </div>
    </div>
  );
};

export default Navbar;
