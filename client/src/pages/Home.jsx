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
import {useState , useEffect} from "react";


const FEATURES = {
  termite : "Termite Tracker",
  moister : "Moister Sensor",
  temperature : "Temperature Sensor" ,
  thermal : "Thermal Image",
}

const PRODUCT_FEATURES = {
  "iTracker-Pro"  : new Set([FEATURES.termite , FEATURES.moister , FEATURES.temperature , FEATURES.thermal]),
  "iTracker-Base" : new Set([FEATURES.termite , FEATURES.moister , FEATURES.temperature]),
  "Tracker Only"  : new Set([FEATURES.termite]),
}




function Home() {

const [selectedFeature , setSelectedFeature] = useState(new Set());
const [highlightedProduct , setHighlightedProduct] = useState(null);



const hangleToggleFeature = (feature)=>{

  setSelectedFeature((prevSet)=>{
          
    const newSet = new Set(prevSet) ;
    if(newSet.has(feature)){
      newSet.delete(feature);
    }
    else{
      newSet.add(feature);
    }

    return newSet ;

  })

}

useEffect(()=>{
  let prodcutToHighlight = null ;
  if(setsAreEqual(PRODUCT_FEATURES["iTracker-Pro"], selectedFeature)){
       prodcutToHighlight = "iTracker-Pro";
  }else if(setsAreEqual(PRODUCT_FEATURES["iTracker-Base"], selectedFeature)){
      prodcutToHighlight = "iTracker-Base";
  }
  else if(setsAreEqual(PRODUCT_FEATURES["Tracker Only"],selectedFeature)){
    prodcutToHighlight = "Tracker Only"
  }
  setHighlightedProduct(prodcutToHighlight);
}, [selectedFeature])

function setsAreEqual(setA , setB){
         if(setA.size  !== setB.size) return false ;
         for(const items of setA){
           if(!setB.has(items)) return false ;
         }
         return true ;
}


  return (
    <div>
      <Topbar />
      <HeroSection />
      <GetInTouch selectedFeature = {selectedFeature} onFeatureToggle = {hangleToggleFeature} Features = {FEATURES}/>
      <PestServicesGrid  highlightedProduct = {highlightedProduct}/>
      <WhyChooseUs />
      <AboutUs />
      <ContactUs />
      <Accordian />
    </div>
  );
}

export default Home;
