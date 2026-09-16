import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import SkillBadge from '../ui/SkillBadge'
import { experiences } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-14">
      <SectionHeader label="experience" />

      <div className="relative flex flex-col gap-8">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            className="relative pl-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span
              className={`absolute left-0 top-5 w-10 h-10 rounded-full bg-surface border flex items-center justify-center ${
                i === 0 ? 'border-accent/50 shadow-[0_0_16px_rgba(88,166,255,0.35)]' : 'border-border'
              }`}
            >
              <img src={exp.logo} alt={exp.company} className="w-6 h-6 object-contain" />
            </span>

            <motion.div
              whileHover={{ y: -3, borderColor: 'rgba(88,166,255,0.4)' }}
              transition={{ duration: 0.2 }}
              className="bg-surface/40 backdrop-blur-sm border border-border rounded-xl p-5 sm:p-6 shadow-lg shadow-black/20"
            >
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-sans text-lg text-primary font-bold">{exp.role}</h3>
                {exp.current && (
                  <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent border border-accent/20 rounded-full font-mono">
                    Present
                  </span>
                )}
              </div>
              <p className="font-sans text-sm text-accent font-medium">{exp.company} · {exp.duration}</p>
              <p className="font-sans text-xs text-muted mt-0.5">{exp.location}</p>

              <ul className="flex flex-col gap-2.5 mt-4">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted font-sans leading-relaxed">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tags.map((tag) => (
                  <SkillBadge key={tag} label={tag} small />
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
