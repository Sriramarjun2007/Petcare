function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-green-400">PetPalace</h2>
          <p className="mt-4 text-sm">
            Providing healthy food and top-notch grooming services for your beloved pets
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-green-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-green-400"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-green-400"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400">Food Subscription</a></li>
            <li><a href="#" className="hover:text-green-400">Salon Grooming</a></li>
            <li><a href="#" className="hover:text-green-400">Mobile Grooming</a></li>
            <li><a href="#" className="hover:text-green-400">Vet Consultations</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400">About Us</a></li>
            <li><a href="#" className="hover:text-green-400">Pet Care Blog</a></li>
            <li><a href="#" className="hover:text-green-400">Contact</a></li>
            <li><a href="#" className="hover:text-green-400">Careers</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">Subscribe for pet care tips and exclusive offers</p>
          <form className="flex items-center">
            <input type="email" placeholder="Enter your email" 
                  className="text-white bg-gray-600 rounded-xl pl-3" />
            <button type="submit" className="bg-green-500 pl-2 pr-2 rounded-full  hover:bg-green-600">
             Send
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        © 2025 PetPalace. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;