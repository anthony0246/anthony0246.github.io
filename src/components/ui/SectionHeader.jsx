import { motion } from 'framer-motion'

export default function SectionHeader({ label }) {
  return (
    <div className="mb-12">
      <motion.h2
        className="font-mono text-2xl md:text-3xl text-primary font-bold mb-3"
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        {label}
      </motion.h2>
      <div className="flex items-center gap-3">
        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-accent to-amber-badge" />
        <div className="h-px flex-1 bg-border" />
      </div>
    </div>
  )
}
