import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import OfferingsSection from "@/components/OfferingsSection";
import DifferenceSection from "@/components/DifferenceSection";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <OfferingsSection />
        <DifferenceSection />
        <FounderSection />
      </main>
      <Footer />
    </>
  );
}
