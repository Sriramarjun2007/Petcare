import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

       
        <div>
          <h2 className="text-3xl font-bold text-green-400">
            PetPalace
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-400">
            Providing healthy food and top-notch grooming
            services for your beloved pets.
          </p>

          <div className="flex gap-4 mt-6 text-2xl">
            <a href="#" className="hover:text-green-400 transition">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-green-400 transition">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-green-400 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-5">
            Services
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link to="/food" className="hover:text-green-400">
                Food Subscription
              </Link>
            </li>

            <li>
              <Link to="/groom" className="hover:text-green-400">
                 Salon Grooming
              </Link>
               
            </li>

            <li>
              <a href="#" className="hover:text-green-400">
                Mobile Grooming
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-green-400">
                Vet Consultations
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-5">
            Company
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-green-400">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-green-400">
                Pet Care Blog
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-green-400">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-green-400">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-5">
            Newsletter
          </h3>

          <p className="text-sm text-gray-400 mb-4">
            Subscribe for pet care tips and exclusive offers.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white outline-none border border-gray-700 focus:border-green-500"
            />

            <button
              type="submit"
              className="bg-green-500 px-6 py-3 rounded-xl hover:bg-green-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2026 PetPalace. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;