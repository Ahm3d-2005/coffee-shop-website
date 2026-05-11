'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HoverScale, GradientText } from './Animations'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Home', 'Features', 'Menu', 'Web3', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-coffee-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-coffee-500 to-coffee-700 rounded-lg flex items-center justify-center">
            ☕
          </div>
          <span className="text-xl font-bold">
            <GradientText>BrewHub</GradientText>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <HoverScale key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-coffee-500 transition-colors"
              >
                {item}
              </a>
            </HoverScale>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-coffee rounded-lg text-white font-semibold button-glow hover:shadow-lg transition-all"
          >
            Connect Wallet
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-coffee-500/20 bg-espresso/80"
        >
          <div className="flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-coffee-500 transition-colors"
              >
                {item}
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-coffee rounded-lg text-white font-semibold text-center"
            >
              Connect Wallet
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
