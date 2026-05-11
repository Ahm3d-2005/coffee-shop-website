'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Counter, StaggerContainer, FadeInItem, GradientText } from './Animations'
import { CoffeeScene } from './CoffeeScene'
import { HoverScale } from './Animations'

// Hero Section
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to <GradientText>BrewHub</GradientText>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience premium coffee with Web3.0 rewards. Earn BREW tokens with every purchase and unlock exclusive NFT benefits.
          </p>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-coffee rounded-lg text-white font-semibold button-glow hover:shadow-lg"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-coffee-500 rounded-lg text-coffee-400 font-semibold hover:bg-coffee-500/10 transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right 3D Scene */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-96 md:h-full"
        >
          <CoffeeScene />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-coffee-500 text-3xl">↓</div>
      </motion.div>
    </section>
  )
}

// Features Section
export const FeaturesSection = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Ultra-fast Web3 transactions powered by blockchain technology',
    },
    {
      icon: '💎',
      title: 'NFT Rewards',
      description: 'Exclusive NFT collectibles with every premium membership',
    },
    {
      icon: '🪙',
      title: 'BREW Token',
      description: 'Earn and trade BREW tokens for exclusive perks',
    },
    {
      icon: '🌐',
      title: 'Web3 Enabled',
      description: 'Fully decentralized with smart contract support',
    },
  ]

  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Why Choose <GradientText>BrewHub?</GradientText>
        </motion.h2>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <FadeInItem key={i}>
                <HoverScale>
                  <div className="glass-dark p-6 rounded-xl hover-lift">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </HoverScale>
              </FadeInItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}

// Stats Section
export const StatsSection = () => {
  const stats = [
    { label: 'Active Members', value: 50000, suffix: '+' },
    { label: 'Coffee Blends', value: 200, suffix: '+' },
    { label: 'Locations', value: 45, suffix: '' },
    { label: 'BREW Tokens', value: 1000000, suffix: '+' },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-coffee-900/20 to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center glass-dark p-8 rounded-xl hover-lift"
            >
              <div className="text-4xl md:text-5xl font-bold text-coffee-400 mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// CTA Section
export const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto glass-dark p-12 rounded-2xl text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Join the <GradientText>Coffee Revolution?</GradientText>
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Connect your wallet and start earning BREW tokens today!
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-gradient-coffee rounded-lg text-white font-bold text-lg button-glow hover:shadow-xl transition-all"
        >
          Connect Wallet Now
        </motion.button>
      </motion.div>
    </section>
  )
}
