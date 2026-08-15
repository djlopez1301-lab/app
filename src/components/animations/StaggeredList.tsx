'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.4 } }
}

export function StaggeredContainer({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Para tablas necesitamos renderizar un <motion.tbody> en lugar de <motion.div>
export function StaggeredTableBody({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.tbody
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.tbody>
  )
}

export function StaggeredItem({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.tr variants={item} className={className}>
      {children}
    </motion.tr>
  )
}
