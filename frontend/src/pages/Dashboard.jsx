import dogcatlogo from "../assets/dogcat.png";
import leaf from "../assets/leaf.png";
import plan from "../assets/plan.png";
import delivery from "../assets/delivery.png";
import approve from "../assets/approved.png";
function Dashboard() {
  return (
    <div className="bg-[#F4EFDE] min-h-screen pt-30">
      <div className="flex flex-col items-center">
        
        <p className="bg-[#F5D496] inline-block px-4 py-2 rounded-full text-xs font-sans font-bold mt-20">
          TRUSTED BY 10,000+ PET PARENTS
        </p>

        <h1 className="text-6xl font-bold mt-5 text-center">
          Healthy Food & Grooming <br />
          for Happy Pets
        </h1>

        <p className="mt-16 text-center text-gray-600 text-xl">
          Fresh pet food delivered to your door + professional grooming
          <br />
          services to keep your furry friends happy and healthy
        </p>

        <div className="flex gap-5 justify-center items-center mt-15">
          <button className="bg-green-500 px-6 py-4 rounded-xl hover:bg-green-600">
            Subscribe Now
          </button>

          <button className="bg-orange-400 px-6 py-4 rounded-xl hover:bg-orange-600">
            Book Grooming
          </button>
        </div>
        <img src={dogcatlogo} alt="petpicture" className="mt-25 "></img>
      </div>
      <div className="bg-gray-100 mt-20 h-150">
        <p className="text-center pt-10 text-3xl font-bold">Pet Food Subscription</p>
        <p className="text-center text-gray-600 text-xl pt-2">Tailored nutrients plans for your pet's specific needs</p>
        <div className="flex gap-4 pt-20 pl-40">
          <div className="w-70 h-70 bg-white rounded-2xl">
            <img src={leaf} className="p-4"/>
            <p className="pl-8 text-xl font-bold">Fresh Ingredients</p>
            <p className="pl-8 pt-5 text-gray-600 ">Real meat,vegetables, and superfoods cooked gently to preserve nutrients</p>
          </div>

          <div className="w-70 h-70 bg-white rounded-2xl">
            <img src={plan}  className="p-4"/>
            <p className="pl-8 text-xl font-bold">Custom Diet<br></br>Plans</p>
            <p className="pl-8 pt-3 text-gray-600 ">personalized  meals based <br></br>on age ,breed,weight<br></br> and allergies.</p>
          </div>

          <div className="w-70 h-70 bg-white rounded-2xl">
            <img src={delivery}  className="p-4"/>
            <p className="pl-8 text-xl font-bold">Monthly Delivery </p>
            <p className="pl-8 pt-5 text-gray-600 mr-2">Convenient auto-shipping straight to your door. Never<br></br> run out of food.</p>
          </div>

          <div className="w-70 h-70 bg-white rounded-2xl">
            <img src={approve}  className="p-4"/>
            <p className="pl-8 text-xl font-bold">Vet Approved</p>
            <p className="pl-8 pt-5 text-gray-600 mr-5">Recipes formulated by veterinary nutritionlists for optimal health.</p>
          </div>
        </div>
      </div>
      <div className="bg-white py-12 h-120">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-gray-600 mb-12">Four simple steps to a happier, healthier pet.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Choose Pet Type</h3>
                <p className="text-gray-600 text-sm">Tell us about your dog or cat's breed, age, and size.</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Select Food Plan</h3>
                <p className="text-gray-600 text-sm">Pick a meal plan that fits their specific dietary needs.</p>
              </div>
            
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Schedule Grooming</h3>
                <p className="text-gray-600 text-sm">Book a salon visit or mobile grooming session.</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white text-xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Relax & Enjoy</h3>
                <p className="text-gray-600 text-sm">Receive fresh food deliveries and enjoy a clean, happy pet.</p>
              </div>
          </div>
       </div>
      </div>
    </div>

  
  );
}

export default Dashboard;