import petlogo from "../assets/petlogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black p-4 shadow-md z-50">
      <div className="flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img
            src={petlogo}
            alt="Pet Palace Logo"
            width="50"
            className="rounded-xl"
          />
          <h1 className="text-2xl font-bold">
            Petpalace
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-10 text-xl">
          <li>
            <Link to="/" className="hover:text-green-500 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/food" className="hover:text-green-500 transition">
              Food Subscription
            </Link>
          </li>

          <li>
            <Link to="/grooming" className="hover:text-green-500 transition">
              Grooming
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-green-500 transition">
              About
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;