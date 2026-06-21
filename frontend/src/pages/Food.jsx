function FoodSubscription() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 mt-15">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-600">
            Pet Food Subscription
          </h1>
          <p className="text-gray-500 mt-2">
            Get fresh and healthy meals delivered to your doorstep.
          </p>
        </div>

        <form className="space-y-6">

          {/* Pet Type */}
          <div>
            <label className="block text-lg font-semibold mb-3">
              Select Pet Type
            </label>

            <div className="grid grid-cols-2 gap-4">
              <label className="border-2 border-gray-300 rounded-xl p-4 cursor-pointer hover:border-green-500">
                <input
                  type="radio"
                  name="petType"
                  value="Dog"
                  className="mr-2"
                />
                🐶 Dog
              </label>

              <label className="border-2 border-gray-300 rounded-xl p-4 cursor-pointer hover:border-green-500">
                <input
                  type="radio"
                  name="petType"
                  value="Cat"
                  className="mr-2"
                />
                🐱 Cat
              </label>
            </div>
          </div>

          {/* Pet Details */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">
                Pet Name
              </label>
              <input
                type="text"
                placeholder="Enter pet name"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Breed
              </label>
              <input
                type="text"
                placeholder="Enter breed"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Age (Years)
              </label>
              <input
                type="number"
                placeholder="Age"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Weight (Kg)
              </label>
              <input
                type="number"
                placeholder="Weight"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Food Plan */}
          <div>
            <label className="block mb-2 font-medium">
              Choose Food Plan
            </label>

            <select className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500">
              <option>Select Plan</option>
              <option>Basic Plan - ₹999/month</option>
              <option>Premium Plan - ₹1499/month</option>
              <option>Grain-Free Plan - ₹1999/month</option>
              <option>Vet Recommended Plan - ₹2499/month</option>
            </select>
          </div>

          {/* Delivery Frequency */}
          <div>
            <label className="block mb-3 font-medium">
              Delivery Frequency
            </label>

            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="delivery" />
                Weekly
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="delivery" />
                Bi-Weekly
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="delivery" />
                Monthly
              </label>
            </div>
          </div>

          {/* Allergies */}
          <div>
            <label className="block mb-2 font-medium">
              Allergies / Dietary Needs
            </label>

            <textarea
              rows="4"
              placeholder="Mention any allergies or special dietary requirements..."
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 font-medium">
              Delivery Address
            </label>

            <textarea
              rows="3"
              placeholder="Enter complete address"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition"
          >
            Subscribe Now
          </button>

        </form>
      </div>
    </div>
  );
}

export default FoodSubscription;