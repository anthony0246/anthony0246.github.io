import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import SkillBadge from '../ui/SkillBadge'
import { skillGroups } from '../../data/skills'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24 scroll-mt-14">
      <SectionHeader label="skills" />

      <div className="flex flex-col gap-10">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <p className="font-mono text-accent text-xs uppercase tracking-widest mb-4">
              {group.category}
            </p>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {group.skills.map((skill) => (
                <motion.div key={skill} variants={badgeVariants}>
                  <SkillBadge label={skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
