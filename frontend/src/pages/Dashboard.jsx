import dogcatlogo from "../assets/dogcat.png";
import leaf from "../assets/leaf.png";
import plan from "../assets/plan.png";
import delivery from "../assets/delivery.png";
import approve from "../assets/approved.png";

function Dashboard() {
  return (
    <div className="bg-[#F4EFDE] min-h-screen pt-20">
      {/* Hero Section */}
      <div className="flex flex-col items-center px-4">
        <p className="bg-[#F5D496] inline-block px-4 py-2 rounded-full text-xs font-bold mt-10 text-center">
          TRUSTED BY 10,000+ PET PARENTS
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-5 text-center leading-tight">
          Healthy Food & Grooming <br />
          for Happy Pets
        </h1>

        <p className="mt-8 md:mt-10 text-center text-gray-600 text-base md:text-xl px-4">
          Fresh pet food delivered to your door + professional
          grooming services to keep your furry friends happy and
          healthy.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-10 w-full sm:w-auto">
          <button className="bg-green-500 text-white px-6 py-4 rounded-xl hover:bg-green-600 w-full sm:w-auto">
            Subscribe Now
          </button>

          <button className="bg-orange-400 text-white px-6 py-4 rounded-xl hover:bg-orange-500 w-full sm:w-auto">
            Book Grooming
          </button>
        </div>

        <img
          src={dogcatlogo}
          alt="Pet"
          className="mt-12 w-full max-w-xs sm:max-w-md md:max-w-2xl"
        />
      </div>

  
      <div className="bg-gray-100 mt-20 py-16 px-4">
        <p className="text-center text-3xl font-bold">
          Pet Food Subscription
        </p>

        <p className="text-center text-gray-600 text-lg md:text-xl pt-2">
          Tailored nutrient plans for your pet's specific needs
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <img src={leaf} alt="Fresh Ingredients" className="w-14" />

            <p className="text-xl font-bold mt-4">
              Fresh Ingredients
            </p>

            <p className="mt-3 text-gray-600">
              Real meat, vegetables, and superfoods cooked gently
              to preserve nutrients.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <img src={plan} alt="Custom Plans" className="w-14" />

            <p className="text-xl font-bold mt-4">
              Custom Diet Plans
            </p>

            <p className="mt-3 text-gray-600">
              Personalized meals based on age, breed, weight,
              and allergies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <img src={delivery} alt="Delivery" className="w-14" />

            <p className="text-xl font-bold mt-4">
              Monthly Delivery
            </p>

            <p className="mt-3 text-gray-600">
              Convenient auto-shipping straight to your door.
              Never run out of food.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <img src={approve} alt="Vet Approved" className="w-14" />

            <p className="text-xl font-bold mt-4">
              Vet Approved
            </p>

            <p className="mt-3 text-gray-600">
              Recipes formulated by veterinary nutritionists
              for optimal health.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>

          <p className="text-gray-600 mb-12">
            Four simple steps to a happier, healthier pet.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white text-xl font-bold mb-4">
                1
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Choose Pet Type
              </h3>

              <p className="text-gray-600 text-sm">
                Tell us about your dog or cat's breed, age,
                and size.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white text-xl font-bold mb-4">
                2
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Select Food Plan
              </h3>

              <p className="text-gray-600 text-sm">
                Pick a meal plan that fits their specific
                dietary needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white text-xl font-bold mb-4">
                3
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Schedule Grooming
              </h3>

              <p className="text-gray-600 text-sm">
                Book a salon visit or mobile grooming session.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white text-xl font-bold mb-4">
                4
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Relax & Enjoy
              </h3>

              <p className="text-gray-600 text-sm">
                Receive fresh food deliveries and enjoy a clean,
                happy pet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;