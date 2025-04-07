// src/pages/TrackerOnlyPage.jsx
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
const CheckIcon = () => '✓';


// 2. Define Product-Specific Data for Tracker Only
const trackerOnlyData = {
  hero: {
    productName: "Tracker Only",
    subTitle: "Essential Termite Tracking",
    description: "The original Termatrac  technology for reliable, non-invasive termite tracking.",
   // backgroundImageUrl: , // Or a different image
    buttonText: "ORDER TRACKER-ONLY",
    buttonLink: "/contact?product=tracker"
  },
  overview: {
    heading: "Simple, Reliable Termite Tracking",
    //imageUrl: trackerOnlyDeviceImage,
    imageAlt: "Termatrac Tracker Only Device",
    paragraphs: [
      "The foundational tool utilizing Termatrac's patented Radar technology to accurately track termite movement without penetration.",
      "A budget-friendly and easy-to-use option for professionals needing core tracking capabilities."
    ],
    features: [
      "Termite Tracking",
      "Lightweight & Portable Design",
      "Simple Operation",
      "Proven Reliability"
    ],
    buttonText: "Get Pricing", // Example different button
    buttonLink: "/contact?product=tracker"
  },
  howItWorks: {
    heading: "Core Tracking Technology",
    features: [
      { icon: <RadarIcon />, title: "Termite Tracker", description: "Detects termite movement through common building materials." },
      // Only includes Radar for this basic model
    ]
  },
  benefits: {
      heading: "Benefits of the Tracker Only",
      items: [
        { icon: <CheckIcon />, title: "Affordable Entry", description: "Access essential  tracking technology at a budget-friendly price point." },
        { icon: <CheckIcon />, title: "Easy to Use", description: "Simple operation makes it quick to learn and deploy in the field." },
        { icon: <CheckIcon />, title: "Non-Invasive Method", description: "Track termites without damaging walls or structures." },
        { icon: <CheckIcon />, title: "Proven Technology", description: "Based on the original, trusted Termatrac Radar system." },
        { icon: <CheckIcon />, title: "Lightweight & Portable", description: "Easy to carry and maneuver during inspections." }
      ]
  },
  video: {
      heading: "See the Tracker in Action",
      videoId: null // Set to null if no specific video exists for this model
      // videoId: "YOUR_TRACKER_ONLY_YOUTUBE_ID" // Or add ID if one exists
  },
  techSpecs: {
      heading: "Tracker Specifications",
      specs: [
        { label: "Sensors Included", value: "Termite Tracker" }, // Only Radar
        { label: "Connectivity", value: "N/A (Standalone or specific interface)" }, // Example difference
        { label: "App Compatibility", value: "N/A (or specific legacy software)" }, // Example difference
        { label: "Battery", value: "Standard Replaceable or Rechargeable" }, // Example difference
        { label: "Weight", value: "Approx. 450g" }, // Example difference
        { label: "Warranty", value: "1 Year Limited Warranty" },
      ]
  },
  cta: {
      heading: "Start Tracking Termites Reliably",
      text: "Get the essential tool for non-invasive termite tracking. Inquire about the Tracker Only today.",
      primaryButtonText: "GET TRACKER PRICING",
      primaryButtonLink: "/contact?product=tracker",
      secondaryButtonText: "Compare Models", // Example different button
      secondaryButtonLink: "/comparison" // Example link
  }
};


// 3. Render components using the data
const TrackerOnlyPage = () => {
  const data = trackerOnlyData;

  return (
    <div>
      <ProductHero {...data.hero} />
      <ProductOverview {...data.overview} />
      {/* Conditionally render HowItWorks if it has features */}
      {data.howItWorks.features.length > 0 && <HowItWorks {...data.howItWorks} />}
      <BenefitsGrid heading={data.benefits.heading} benefits={data.benefits.items} />
      {/* Conditionally render VideoSection if videoId exists */}
      {data.video.videoId && <VideoSection {...data.video} />}
      <TechSpecs {...data.techSpecs} />
      <CallToAction {...data.cta} />
    </div>
  );
};

export default TrackerOnlyPage;