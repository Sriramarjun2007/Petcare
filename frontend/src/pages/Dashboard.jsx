import dogcatlogo from "../assets/dogcat.png";
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
      <div className="bg-gray-400 mt-20">
        <h1>Pet Food Subcription</h1>
      </div>
    </div>
  
  );
}

export default Dashboard;