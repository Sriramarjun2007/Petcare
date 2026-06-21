import { useState } from "react";
import petlogo from "../assets/petlogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black p-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src={petlogo}
            alt="Pet Palace Logo"
            className="w-12 rounded-xl"
          />

          <h1 className="text-2xl font-bold">
            PetPalace
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-xl">
          <li>
            <Link to="/" className="hover:text-green-500 transition">
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/food"
              className="hover:text-green-500 transition"
            >
              Food Subscription
            </Link>
          </li>

          <li>
            <Link
              to="/groom"
              className="hover:text-green-500 transition"
            >
              Grooming
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-green-500 transition"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-white text-lg">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-500"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/food"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-500"
            >
              Food Subscription
            </Link>
          </li>

          <li>
            <Link
              to="/groom"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-500"
            >
              Grooming
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-500"
            >
              About
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;