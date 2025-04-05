import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import TrackerOnlyPage from "./pages/TrackerOnlyPage.jsx";
import ITrackerBasePage from "./pages/ITrackerBasePage.jsx";
import ITrackerProPage from "./pages/ITrackerProPage.jsx";
import { Navbar, Footer } from "./components/index.js";
import NotFound from "./pages/NotFound.jsx";
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import AboutPageSectionsContinued from "./components/PestAbout.jsx";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <div className="fixed top-[24%] right-0 flex items-center group z-50">
        {/* Phone Icon Container */}
        <div className="bg-gradient-to-r from-green-600 to-lime-400 w-14 h-14 flex items-center justify-center rounded-l-2xl shadow-lg">
          <FaPhone className="text-3xl text-white" />
        </div>

        {/* Expanding Phone Number Container */}
        <div className="bg-gradient-to-r from-lime-400 to-yellow-500 h-14 flex items-center justify-center overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 shadow-lg">
          <span className="text-black font-semibold px-2">9223453450</span>
        </div>
      </div>
      <div className="fixed top-[calc(24%+70px)] right-0 flex items-center group z-50">
        {/* Phone Icon Container */}
        <div className="bg-gradient-to-r from-green-600 to-lime-400 w-14 h-14 flex items-center justify-center rounded-l-2xl shadow-lg">
          <MdMail className="text-3xl text-white" />
        </div>

        {/* Expanding Phone Number Container */}
        <div className="bg-gradient-to-r from-lime-400 to-yellow-500 h-14 flex items-center justify-center overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 shadow-lg">
          <span className="text-black font-semibold px-2">
           info@termitrack.com
          </span>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPageSectionsContinued />} />
        <Route path="*" element={<NotFound />} />
        <Route path = "/product/TrackerOnly" element = {<TrackerOnlyPage />}/>
        <Route path = "/product/iTrackerBase" element = {<ITrackerBasePage />}/>
        <Route path = "/product/iTrackerPro" element = {<ITrackerProPage />}/>


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
