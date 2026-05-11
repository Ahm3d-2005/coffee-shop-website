'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { StaggerContainer, FadeInItem, GradientText, HoverScale } from './Animations'

// Menu Section
export const MenuSection = () => {
  const menuItems = [
    // Espresso
    { category: 'Espresso', name: 'Classic Espresso', price: '$3.99', reward: '5 BREW' },
    { category: 'Espresso', name: 'Double Shot', price: '$4.99', reward: '7 BREW' },
    { category: 'Espresso', name: 'Premium Blend', price: '$5.99', reward: '10 BREW' },
    // Specialty
    { category: 'Specialty', name: 'Caramel Latte', price: '$5.49', reward: '8 BREW' },
    { category: 'Specialty', name: 'Vanilla Macchiato', price: '$5.99', reward: '9 BREW' },
    { category: 'Specialty', name: 'Mocha Supreme', price: '$6.49', reward: '11 BREW' },
    // Cold Brews
    { category: 'Cold Brews', name: 'Iced Americano', price: '$4.49', reward: '6 BREW' },
    { category: 'Cold Brews', name: 'Cold Brew Latte', price: '$5.49', reward: '8 BREW' },
    { category: 'Cold Brews', name: 'Iced Mocha', price: '$5.99', reward: '9 BREW' },
  ]

  const categories = ['Espresso', 'Specialty', 'Cold Brews']

  return (
    <section id="menu" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Our <GradientText>Premium Menu</GradientText>
        </motion.h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Earn BREW tokens on every purchase
        </p>

        <StaggerContainer>
          {categories.map((category) => (
            <motion.div key={category} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-coffee-400">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item, i) => (
                    <FadeInItem key={i}>
                      <HoverScale>
                        <div className="glass-dark p-6 rounded-xl hover-lift group">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-lg font-bold">{item.name}</h4>
                              <p className="text-coffee-400 font-semibold mt-1">{item.price}</p>
                            </div>
                            <div className="bg-purple-600/30 px-3 py-1 rounded-full text-sm text-purple-300">
                              NFT
                            </div>
                          </div>
                          <p className="text-sm text-gray-400 mb-4">Premium quality with Web3 rewards</p>
                          <div className="flex items-center justify-between">
                            <span className="text-yellow-400 font-bold">{item.reward}</span>
                            <button className="px-4 py-2 bg-coffee-600 rounded-lg text-sm font-semibold hover:bg-coffee-700 transition-all">
                              Order
                            </button>
                          </div>
                        </div>
                      </HoverScale>
                    </FadeInItem>
                  ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

// Gallery Section
export const GallerySection = () => {
  const galleryItems = [
    { id: 1, title: 'Espresso Art' },
    { id: 2, title: 'Latte Design' },
    { id: 3, title: 'Cold Brew' },
    { id: 4, title: 'Premium Blend' },
    { id: 5, title: 'Coffee Bean' },
    { id: 6, title: 'Brewing Process' },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <GradientText>Gallery</GradientText>
        </motion.h2>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <FadeInItem key={item.id} delay={i * 0.1}>
                <HoverScale scale={1.05}>
                  <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-coffee opacity-70 group-hover:opacity-50 transition-opacity"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">☕</div>
                        <p className="text-lg font-bold">{item.title}</p>
                      </div>
                    </div>
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

// Web3 Section
export const Web3Section = () => {
  const web3Features = [
    {
      icon: '🪙',
      title: 'BREW Token',
      description: 'Earn and trade BREW tokens on blockchain',
      value: '1M+',
    },
    {
      icon: '🎁',
      title: 'NFT Membership',
      description: 'Exclusive collectible cards with perks',
      value: '45K+',
    },
    {
      icon: '🗳️',
      title: 'DAO Governance',
      description: 'Vote on menu items and new features',
      value: '8K+',
    },
    {
      icon: '📈',
      title: 'Staking Rewards',
      description: 'Earn passive income on BREW holdings',
      value: '12%',
    },
  ]

  return (
    <section id="web3" className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Web3.0 <GradientText>Features</GradientText>
        </motion.h2>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {web3Features.map((feature, i) => (
              <FadeInItem key={i} delay={i * 0.1}>
                <HoverScale>
                  <div className="glass-dark p-6 rounded-xl hover-lift">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                    <div className="text-2xl font-bold text-cyan-400">{feature.value}</div>
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

// Footer
export const Footer = () => {
  const footerLinks = [
    { title: 'About', links: ['Our Story', 'Team', 'Blog'] },
    { title: 'Product', links: ['Features', 'Pricing', 'Security'] },
    { title: 'Community', links: ['Discord', 'Twitter', 'GitHub'] },
    { title: 'Legal', links: ['Privacy', 'Terms', 'Contact'] },
  ]

  return (
    <footer className="bg-espresso/80 border-t border-coffee-500/20 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-4 text-coffee-400">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-400 hover:text-coffee-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-coffee-500/20 pt-8 text-center text-gray-400 text-sm"
        >
          <p>© 2026 BrewHub. All rights reserved. | Powered by Web3.0</p>
        </motion.div>
      </div>
    </footer>
  )
}
