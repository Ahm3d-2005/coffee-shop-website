'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Floating Orbs Background
export const FloatingOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        x: [0, 100, 0],
        y: [0, -100, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 15, repeat: Infinity }}
      className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
    />
    <motion.div
      animate={{
        x: [0, -80, 0],
        y: [0, 100, 0],
        scale: [1.2, 1, 1.2],
      }}
      transition={{ duration: 18, repeat: Infinity }}
      className="absolute top-40 right-10 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
    />
    <motion.div
      animate={{
        x: [0, 50, 0],
        y: [0, 150, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 20, repeat: Infinity }}
      className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
    />
  </div>
)

// Particle System
export const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => i)

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-coffee-500 rounded-full opacity-60"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: Math.random() * window.innerHeight - 100,
            opacity: [0.6, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

// Number Counter Animation
interface CounterProps {
  value: number
  suffix?: string
  prefix?: string
}

export const Counter: React.FC<CounterProps> = ({ value, suffix = '', prefix = '' }) => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// Stagger Container
interface StaggerContainerProps {
  children: React.ReactNode
  staggerDelay?: number
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {children}
    </motion.div>
  )
}

// Fade In Item
interface FadeInItemProps {
  children: React.ReactNode
  delay?: number
}

export const FadeInItem: React.FC<FadeInItemProps> = ({ children, delay = 0 }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay },
    },
  }

  return <motion.div variants={item}>{children}</motion.div>
}

// Hover Scale Effect
interface HoverScaleProps {
  children: React.ReactNode
  scale?: number
}

export const HoverScale: React.FC<HoverScaleProps> = ({ children, scale = 1.05 }) => {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      {children}
    </motion.div>
  )
}

// Gradient Text
interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => (
  <span className={`bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
)
