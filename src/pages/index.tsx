'use client'

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { FloatingOrbs, ParticleBackground } from '@/components/Animations'
import {
  HeroSection,
  FeaturesSection,
  StatsSection,
  CTASection,
} from '@/components/Sections'
import {
  MenuSection,
  GallerySection,
  Web3Section,
  Footer,
} from '@/components/MenuGallery'

export default function Home() {
  return (
    <main className="bg-espresso text-white overflow-x-hidden">
      {/* Background Effects */}
      <FloatingOrbs />
      <ParticleBackground />

      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <MenuSection />
      <GallerySection />
      <Web3Section />
      <CTASection />
      <Footer />
    </main>
  )
}
