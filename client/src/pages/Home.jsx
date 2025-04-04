import {
  AboutUs,
  Accordian,
  ContactUs,
  GetInTouch,
  HeroSection,
  Topbar,
  WhyChooseUs,
} from "../components/index.js";
import PestServicesGrid from "../components/PestServicesGrid.jsx";
function Home() {
  return (
    <div>
      <Topbar />
      <HeroSection />
      <GetInTouch />
      <PestServicesGrid />
      <WhyChooseUs />
      <AboutUs />
      <ContactUs />
      <Accordian />
    </div>
  );
}

export default Home;
