export default function GetInTouch() {
  return (
    <section className="bg-gray-100 py-16 ">
      <div className="container mx-auto px-6">
        <div className="bg-white px-6 py-8 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              CHOOSE YOUR TOOL.
            </h2>
          </div>
          <form className="text-center mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="col-span-1">
                <div className="p-3 border-0 bg-gray-50 text-gray-800 rounded-md hover:border hover:border-black">
                  <span>Termite Tracker</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="p-3 border-0 bg-gray-50 text-gray-800 rounded-md hover:border hover:border-black">
                  <span>Moister Sensor</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="p-3 border-0 bg-gray-50 text-gray-800 rounded-md hover:border hover:border-black">
                  <span>Temperature Sensor</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="p-3 border-0 bg-gray-50 text-gray-800 rounded-md hover:border hover:border-black">
                  <span>Thermal Image</span>
                </div>
              </div>
            </div>
            <a href="#trackerRange">
              <div className="mt-6">
                <button className="bg-yellow-400 text-black py-3 px-8 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition">
                  GET STARTED
                </button>
              </div>
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
