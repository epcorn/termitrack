import React from 'react';

// 1. Import Reusable Components
import ProductHero from '../components/ProductHero';
import ProductOverview from '../components/ProductOverview';
import HowItWorks from '../components/HowItWorks';
import BenefitsGrid from '../components/BenefitsGrid';
import VideoSection from '../components/VideoSection';
import TechSpecs from '../components/TechSpecs';
import CallToAction from '../components/CallToAction';

// TODO: Replace these placeholders with actual imports or valid URLs/Components
const RadarIcon = () => <span className="text-3xl">📡</span>;
const TempIcon = () => <span className="text-3xl">🌡️</span>;
const ThermalIcon = () => <span className="text-3xl">🔥</span>;
const CheckIcon = () => '✓';


// 2. Define Product-Specific Data (Or import from data file)
const proProductData = {
  hero: {
    productName: "iTraker Pro",
    subTitle: "Advanced Termite Detection Tool",
    description: "Unmatched precision with  Thermal, and Moisture sensors for non-invasive termite inspection.",
   // backgroundImageUrl: iTrakerProHeroBg,
    buttonText: "ORDER iTRACKER-PRO",
    buttonLink: "/contact?product=pro" // Example link
  },
  overview: {
    heading: "Detect the Undetectable with iTraker® Pro",
  //  imageUrl: iTrakerProDeviceImage,
    imageAlt: "iTraker Pro Termite Detection Device",
    paragraphs: [
      "Engineered for elite pest management professionals, the iTraker® Pro integrates three powerful sensors into one ergonomic device. Gain definitive insights without damaging property.",
      "Its advanced technology suite provides comprehensive data for accurate diagnosis and targeted treatment planning."
    ],
    features: [
      "Termite Tracking",
      "High-Resolution Thermal Sensor",
      "Precision Moisture Sensor",
      "Ambient Temperature Sensor",
      "Bluetooth Connectivity & Reporting App"
    ],
    buttonText: "GET PRICING",
    buttonLink: "/demo?product=pro"
  },
  howItWorks: {
    heading: "Multi-Sensor Technology Explained",
    features: [
      { icon: <RadarIcon />, title: "Termite Tracker", description: "Detects termite movement through common building materials." },
      { icon: <TempIcon />, title: "Moisture & Temperature", description: "Identifies moisture anomalies and temperature variations often linked to termite activity and conducive environments." },
      { icon: <ThermalIcon />, title: "Thermal Sensor", description: "Reveals subtle heat signatures produced by active termite colonies, pinpointing hidden infestations." }
    ]
  },
  benefits: {
      heading: "Why Choose iTraker Pro?",
      items: [
        { icon: <CheckIcon />, title: "Definitive Detection", description: "Highest accuracy with combined sensor data reduces guesswork and ensures effective treatment." },
        { icon: <CheckIcon />, title: "Completely Non-Invasive", description: "Inspect thoroughly without drilling, cutting, or damaging client property. Preserves structural integrity." },
        { icon: <CheckIcon />, title: "Save Time & Resources", description: "Quickly scan large areas, pinpoint activity precisely, and avoid unnecessary, widespread treatments." },
        { icon: <CheckIcon />, title: "Enhanced Professionalism", description: "Provide clients with clear, data-backed reports generated via the mobile app, building trust." },
        { icon: <CheckIcon />, title: "Versatile & Reliable", description: "Effective in various environments and materials for residential, commercial, and pre-purchase inspections." },
        { icon: <CheckIcon />, title: "Comprehensive Data", description: "Combines movement, thermal, and moisture data for a complete picture of potential infestations." }
      ]
  },
  video: {
      heading: "See iTraker Pro in Action",
      videoId: "YOUR_ITRAKER_PRO_YOUTUBE_ID" // Replace with actual ID
  },
  techSpecs: {
      heading: "iTraker Pro Specifications",
      specs: [
        { label: "Sensors Included", value: "Thermal, Moisture, Temperature" },
        { label: "Connectivity", value: "Bluetooth 5.0 LE" },
        { label: "App Compatibility", value: "iOS 13+, Android 8+" },
        { label: "Battery", value: "Rechargeable Li-ion, ~8 Hrs Use" },
        { label: "Weight", value: "Approx. 550g" },
        { label: "Warranty", value: "1 Year Limited Warranty" },
        // ... add more specs
      ]
  },
  cta: {
      heading: "Elevate Your Inspections with iTraker Pro",
      text: "Gain the competitive edge with the most advanced termite detection technology available. Order your iTraker Pro today.",
      primaryButtonText: "GET TRACKER PRICING",
      primaryButtonLink: "/contact?product=pro",
      secondaryButtonText: "GET TRACKER PRICING",
      secondaryButtonLink: "/demo?product=pro"
  }
};


// 3. Render components using the data
const ITrakerProPage = () => {
  const data = proProductData;

  return (
    <div>
      <ProductHero {...data.hero} />
      <ProductOverview {...data.overview} />
      <HowItWorks {...data.howItWorks} />
      <BenefitsGrid heading={data.benefits.heading} benefits={data.benefits.items} />
      {data.video.videoId && <VideoSection {...data.video} />}
      <TechSpecs {...data.techSpecs} />
      <CallToAction {...data.cta} />
    </div>
  );
};

export default ITrakerProPage;