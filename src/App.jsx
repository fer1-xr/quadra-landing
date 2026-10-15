import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="landing">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <HowItWorks />
        <About />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
