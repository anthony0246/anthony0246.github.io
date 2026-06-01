import { motion } from 'framer-motion'

export default function SkillBadge({ label, small = false }) {
  return (
    <motion.span
      className={`
        inline-block border border-border rounded-full font-mono text-muted
        transition-colors duration-200 hover:border-accent hover:text-accent cursor-default
        ${small ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'}
      `}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {label}
    </motion.span>
  )
}
