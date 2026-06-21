function GroomingBookingForm() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 mt-20">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-600">
            Pet Grooming Appointment
          </h1>
          <p className="text-gray-500 mt-2">
            Schedule a grooming session for your furry friend.
          </p>
        </div>

        <form className="space-y-6">

          {/* Pet Type */}
          <div>
            <label className="block text-lg font-semibold mb-3">
              Select Pet Type
            </label>

            <div className="grid grid-cols-2 gap-4">
              <label className="border-2 border-gray-300 rounded-xl p-4 cursor-pointer hover:border-pink-500">
                <input
                  type="radio"
                  name="petType"
                  value="Dog"
                  className="mr-2"
                />
                🐶 Dog
              </label>

              <label className="border-2 border-gray-300 rounded-xl p-4 cursor-pointer hover:border-pink-500">
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
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Breed
              </label>
              <input
                type="text"
                placeholder="Enter breed"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Age
              </label>
              <input
                type="number"
                placeholder="Age"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Weight (Kg)
              </label>
              <input
                type="number"
                placeholder="Weight"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          {/* Grooming Service */}
          <div>
            <label className="block mb-2 font-medium">
              Select Grooming Service
            </label>

            <select className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-pink-500">
              <option>Select Service</option>
              <option>Basic Bath & Brush - ₹499</option>
              <option>Full Grooming - ₹999</option>
              <option>Hair Trimming - ₹699</option>
              <option>Nail Clipping - ₹299</option>
              <option>Spa Treatment - ₹1299</option>
            </select>
          </div>

          {/* Appointment Date & Time */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">
                Appointment Date
              </label>
              <input
                type="date"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Preferred Time
              </label>
              <input
                type="time"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block mb-2 font-medium">
              Special Instructions
            </label>

            <textarea
              rows="4"
              placeholder="Any skin issues, allergies, or grooming preferences..."
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>

          {/* Owner Details */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">
                Owner Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          {/* Pickup Service */}
          <div>
            <label className="flex items-center gap-3">
              <input type="checkbox" />
              <span className="font-medium">
                Need Pickup & Drop Service
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl font-semibold text-lg transition"
          >
            Book Appointment
          </button>

        </form>
      </div>
    </div>
  );
}

export default GroomingBookingForm;