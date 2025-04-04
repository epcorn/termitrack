import trackerOnly from "../images/trackerOnly.png";
import itrackerBase from "../images/itrackerBase.jpg";
import itrackerPro from "../images/trackerPro.jpg";
import termite from "../images/termite.jpg";
// Custom SVG Icons instead of using react-icons

const PestServiceCard = ({
  pestType,
  description,
  imageSrc,
  price,
  point1,
  point2,
  point3,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-200">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={`${pestType} control service`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h2 className="text-xl font-bold">{pestType}</h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-yellow-100 p-2 rounded-full">
            <img
              src={termite}
              className="rounded-full object-cover "
              alt="Termite Detection Sensor"
            />
          </div>
          <div className="bg-green-100 py-1 px-3 rounded-full text-green-800 font-semibold">
            EMI available
          </div>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <ul className="text-sm text-gray-500 mb-4">
          <li className="flex items-center mb-1">
            <span className="mr-2">✓</span> <span>{point1}</span>
          </li>
          <li className="flex items-center mb-1">
            <span className="mr-2">✓</span> <span>{point2}</span>
          </li>
          <li className="flex items-center mt-5">
            <span className="mr-2">✓</span> <span>{point3}</span>
          </li>
        </ul>
      </div>

      {/* Button Section */}
      <div className="px-4 pb-4">
        <button className="w-full bg-gradient-to-r from-green-600 to-lime-500 hover:from-green-700 hover:to-lime-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
          Contact Us for pricing
        </button>
      </div>
    </div>
  );
};

// Example of using the component
const PestServicesGrid = () => {
  const pestServices = [
    {
      pestType: "Tracker Only",
      description:
        "Most trusted, basic termite detection tool, making professional termite management 'Professional'",
      imageSrc: trackerOnly,
      price: 89,
      point1: "Light Weight",
      point2: "Easy to handle",
      point3: "Budget Friendly",
    },
    {
      pestType: "iTracker-Base",
      description:
        'An upgraded tool in "Professional Termite Managemnet", heavily relying on scientific inspection in termite management.',
      imageSrc: itrackerBase,
      price: 79,
      point1: "Termite Tracking ",
      point2: "Temperature Sensor",
      point3: "Humidity Sensor",
    },
    {
      pestType: "iTracker-Pro",
      description:
        "With thermal imaging this professional inspection tool gives termite management an edge in the ever competitive scenario.",
      imageSrc: itrackerPro,
      price: 69,
      point1: "Termite Tracking",
      point2: "Temperature & Humidity Sensor",
      point3: "Thermal Imaging",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4">
      <h2 id="trackerRange" className="text-3xl font-bold text-center mb-8">
        iTracker Range
      </h2>
      <div className=" flex justify-center items-center gap-6 max-w-6xl mx-auto">
        {pestServices.map((service, index) => (
          <PestServiceCard
            key={index}
            pestType={service.pestType}
            description={service.description}
            imageSrc={service.imageSrc}
            price={service.price}
            point1={service.point1}
            point2={service.point2}
            point3={service.point3}
          />
        ))}
      </div>
    </div>
  );
};

export default PestServicesGrid;
