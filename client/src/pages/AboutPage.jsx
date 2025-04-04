import { ContactUs } from "../components";

const AboutPage = () => {
  return (
    <>
      <div className="container mx-auto p-10">
        {/* Corporate Profile Section */}
        <section className="mb-12 mt-10">
          <div className="flex flex-col md:flex-row items-center">
            {/* Replacing ImagePlaceholder with div */}
            <div
              className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6"
              style={{
                backgroundColor: "#D1FAE5", // Light green background
                height: "300px", // Set fixed height
                backgroundImage:
                  "url(https://res.cloudinary.com/epcorn/image/upload/v1641465819/signature/Epcorn_logo_super-min_si1wja.jpg)", // Image background
                backgroundSize: "contain", // Cover the div
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat", // Center the image
              }}
              alt="Corporate Profile"
            />
            <div>
              <h1 className="text-4xl font-bold mb-4 text-green-700">
                Corporate Profile
              </h1>
              <p className="text-lg text-gray-700">
                Established on November 2, 1972, Epcorn embarked on a mission to
                provide a pest-free environment. Over the decades, our
                commitment has strengthened, focusing on protecting health,
                property, and the environment to ensure a safer, pest-free life
                for future generations. We have consistently evolved, adopting
                the latest technologies to meet the ever-changing needs of pest
                management.
              </p>
            </div>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="mb-12 bg-green-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-3 text-green-700">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We are dedicated to offering our customers innovative pest
            management solutions, aiming to build long-term, mutually reliable
            relationships.
          </p>
          <h2 className="text-3xl font-semibold mb-3 text-green-700">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700">
            Our goal is to become a trendsetting pest management organization by
            implementing modern technologies and incorporating advanced science
            in effectively managing disease-spreading pests.
          </p>
        </section>

        {/* Awards and Affiliations Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-green-700 text-center">
            Awards and Affiliations
          </h2>
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="max-w-xs text-center mb-6 md:mb-0">
              {/* Replacing ImagePlaceholder with div */}
              <div
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
                style={{
                  backgroundColor: "#FEF3C7", // Light yellow background
                  backgroundImage:
                    "url(https://res.cloudinary.com/epcorn/image/upload/v1641465819/signature/Epcorn_logo_super-min_si1wja.jpg)", // Image background
                  backgroundSize: "contain", // Cover the div
                  backgroundPosition: "center", // Center the image
                  backgroundRepeat: "no-repeat",
                }}
                alt="Award"
              />
              <p className="text-lg text-gray-700">
                Vendor of the Year 2006 by a leading facility management
                company.
              </p>
            </div>
            <div className="max-w-xs text-center">
              {/* Replacing ImagePlaceholder with div */}
              <div
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
                style={{
                  backgroundColor: "#FEF3C7", // Light yellow background
                  backgroundImage:
                    "url(https://www.pestcontrolenterprise.com/images/membership/2-ipca.png)", // Image background
                  backgroundSize: "contain", // Cover the div
                  backgroundPosition: "center", // Center the image
                  backgroundRepeat: "no-repeat",
                }}
                alt="Affiliation"
              />
              <p className="text-lg text-gray-700">
                Affiliated with the Indian Pest Control Association (IPCA) and
                the National Pest Management Association (NPMA).
              </p>
            </div>
          </div>
        </section>
      </div>
      <ContactUs />
    </>
  );
};

export default AboutPage;
