'use client'

import Header from '../components/header'
import Hero from '../components/hero'
import Gallery from '../components/gallery'
import RollingGallery from '../components/rolling-gallery'
import Testimonials from '../components/testimonials'
import Sponsors from '../components/sponsors'
import Footer from '../components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] selection:bg-[#d4ff00] selection:text-black">
      <Header />
      <Hero />
      <Gallery />
      <RollingGallery />
      <Testimonials />
      <Sponsors />
      <Footer />
    </main>
  )
}
