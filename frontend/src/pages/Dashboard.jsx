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
        <p className="text-center pt-10 text-3xl font-bold">Pet Food Subcription</p>
        <p className="text-center text-gray-400 text-xl pt-2">Tailored nutrients plans for your pet's specific needs</p>
        <div className="flex gap-4 pt-20 pl-40">
          <div className="w-70 h-70 bg-white rounded-2xl">
            <img src={leaf} className="p-4"/>
            <p className="pl-8 text-xl font-bold">Fresh Ingredients</p>
            <p className="pl-8 pt-5 text-gray-400 ">Real meat,vegetables, and superfoods cooked gently to preserve nutrients</p>
          </div>

          <div className="w-70 h-70 bg-white rounded-2xl">
            <img src={plan}  className="p-4"/>
            <p className="pl-8 text-xl font-bold">Custom Diet<br></br>Plans</p>
            <p className="pl-8 pt-3 text-gray-400 ">personalized  meals based <br></br>on age ,breed,weight<br></br> and allergies.</p>
          </div>

          <div className="w-70 h-70 bg-white rounded-2xl">
            <img src={delivery}  className="p-4"/>
            <p className="pl-8 text-xl font-bold">Monthly Delivery </p>
            <p className="pl-8 pt-5 text-gray-400 mr-2">Convenient auto-shipping straight to your door. Never<br></br> run out of food.</p>
          </div>

          <div className="w-70 h-70 bg-white rounded-2xl">
            <img src={approve}  className="p-4"/>
            <p className="pl-8 text-xl font-bold">Vet Approved</p>
            <p className="pl-8 pt-5 text-gray-400 mr-5">Recipes formulated by veterinary nutritionlists for optimal health.</p>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Dashboard;