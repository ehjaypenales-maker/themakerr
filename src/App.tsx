/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  return (
    <div className="relative min-h-screen text-white bg-[#030303] overflow-x-hidden select-none font-sans antialiased">
      
      {/* Interactive global elements */}
      <CursorGlow />
      <ParticleBackground />

      {/* Floating navigation panel */}
      <Navbar />

      {/* Primary Landing Page sections flow */}
      <main className="relative z-10">
        <Hero />
        <Features />
        <Showcase />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>

      {/* CTA Footer & Subsections */}
      <Footer />
      
    </div>
  );
}
