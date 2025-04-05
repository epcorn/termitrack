import React from 'react';

// 1. Import Reusable Components (same as Pro page)
import ProductHero from '../components/ProductHero';
import ProductOverview from '../components/ProductOverview';
import HowItWorks from '../components/HowItWorks';
import BenefitsGrid from '../components/BenefitsGrid';
import VideoSection from '../components/VideoSection';
import TechSpecs from '../components/TechSpecs';
import CallToAction from '../components/CallToAction';

// TODO: Replace placeholders with actual imports or valid URLs/Components
const RadarIcon = () => <span className="text-3xl">📡</span>;
const TempIcon = () => <span className="text-3xl">🌡️</span>;
// Note: No ThermalIcon needed for Base 'How it Works'
const CheckIcon = () => '✓';


// 2. Define Product-Specific Data for iTraker Base
const baseProductData = {
  hero: {
    productName: "iTraker® Base",
    subTitle: "Reliable Termite Detection Tool",
    description: "Dependable termite detection using Radar, Moisture, and Temperature sensors for professional inspections.",
    //backgroundImageUrl: iTrakerBaseHeroBg, // Or a different image
    buttonText: "ORDER iTRAKER BASE",
    buttonLink: "/contact?product=base"
  },
  overview: {
    heading: "Accurate, Non-Invasive Detection with iTraker® Base",
    //imageUrl: iTrakerBaseDeviceImage,
    imageAlt: "iTraker Base Termite Detection Device",
    paragraphs: [
      "The iTraker® Base provides essential sensor technology for reliable termite detection without property damage.",
      "Ideal for professionals seeking a balance of advanced features and cost-effectiveness."
    ],
    features: [
      "Termite Tracking Radar",
      "Precision Moisture Sensor",
      "Ambient Temperature Sensor",
      "Easy-to-use Mobile App",
      "Durable Construction"
    ],
    buttonText: "Request Base Demo",
    buttonLink: "/demo?product=base"
  },
  howItWorks: {
    heading: "Core Sensor Technology",
    features: [
      { icon: <RadarIcon />, title: "Termite Tracker", description: "Detects termite movement through common materials." },
      { icon: <TempIcon />, title: "Moisture & Temperature", description: "Identifies moisture and temperature variations linked to termite presence." },
      // Note: No Thermal feature shown for Base model
    ]
  },
  benefits: {
      heading: "Benefits of Using iTraker® Base",
      items: [
         // Benefits might be slightly different or fewer than Pro
        { icon: <CheckIcon />, title: "Reliable Detection", description: "Core sensor technology for accurate identification of termite activity." },
        { icon: <CheckIcon />, title: "100% Non-Invasive", description: "Inspect properties thoroughly without causing damage." },
        { icon: <CheckIcon />, title: "Cost-Effective Solution", description: "Advanced detection capabilities at an accessible price point." },
        { icon: <CheckIcon />, title: "User-Friendly Operation", description: "Intuitive mobile app interface for easy data capture and reporting." },
        { icon: <CheckIcon />, title: "Professional Reporting", description: "Generate clear reports for clients based on sensor data." },
        { icon: <CheckIcon />, title: "Durable for Field Use", description: "Built to withstand the demands of regular professional inspections." }
      ]
  },
  video: {
      heading: "See iTraker® Base in Action",
      videoId: "YOUR_ITRAKER_BASE_YOUTUBE_ID" // Replace with actual ID (might be same or different video)
  },
  techSpecs: {
      heading: "iTraker® Base Specifications",
      specs: [
        { label: "Sensors Included", value: "Radar, Moisture, Temperature" }, // Note: No Thermal
        { label: "Connectivity", value: "Bluetooth 4.2" }, // Example difference
        { label: "App Compatibility", value: "iOS 12+, Android 7+" }, // Example difference
        { label: "Battery", value: "Rechargeable Li-ion, ~7 Hrs Use" }, // Example difference
        { label: "Weight", value: "Approx. 520g" }, // Example difference
        { label: "Warranty", value: "1 Year Limited Warranty" },
      ]
  },
  cta: {
      heading: "Get Reliable Results with iTraker Base",
      text: "Step up your termite inspections with proven sensor technology. Order your iTraker Base or request a demo.",
      primaryButtonText: "ORDER NOW",
      primaryButtonLink: "/contact?product=base",
      secondaryButtonText: "Request a Demo",
      secondaryButtonLink: "/demo?product=base"
  }
};

// 3. Render components using the data
const ITrakerBasePage = () => {
  const data = baseProductData;

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

export default ITrakerBasePage;