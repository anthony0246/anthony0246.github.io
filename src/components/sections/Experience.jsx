import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import SkillBadge from '../ui/SkillBadge'
import { experiences } from '../../data/experience'

function FordLogo() {
  return (
    <span className="inline-block px-2 py-0.5 bg-surface border border-border rounded font-mono text-xs text-muted">
      Ford
    </span>
  )
}

export default function Experience() {
  const [activeId, setActiveId] = useState(experiences[0].id)
  const active = experiences.find((e) => e.id === activeId)

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24 scroll-mt-14">
      <SectionHeader label="experience" />

      <div className="flex flex-col md:flex-row gap-0 border border-border rounded-lg overflow-hidden">
        {/* Tab list */}
        <div className="md:w-52 flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-r border-border flex-shrink-0">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveId(exp.id)}
              className={`
                flex items-center gap-2 px-4 py-4 text-left transition-colors duration-150 whitespace-nowrap md:whitespace-normal
                ${activeId === exp.id
                  ? 'border-b-2 md:border-b-0 md:border-l-2 border-accent bg-surface/60 text-accent'
                  : 'border-b-2 md:border-b-0 md:border-l-2 border-transparent text-muted hover:bg-surface/40 hover:text-primary'}
              `}
            >
              {exp.logo ? (
                <img src={exp.logo} alt={exp.company} className="w-5 h-5 object-contain flex-shrink-0" />
              ) : (
                <FordLogo />
              )}
              <span className="font-mono text-xs">{exp.shortName}</span>
              {exp.incoming && (
                <span className="ml-auto text-xs px-1 py-0.5 bg-accent/10 text-accent border border-accent/20 rounded font-mono">
                  ↑
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Detail pane */}
        <div className="flex-1 p-6 md:p-8 min-h-72">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-4 h-full"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-mono text-lg text-primary font-bold">{active.role}</h3>
                  {active.incoming && (
                    <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent border border-accent/20 rounded-full font-mono">
                      Incoming
                    </span>
                  )}
                </div>
                <p className="font-mono text-sm text-accent">{active.company} · {active.duration}</p>
                <p className="font-mono text-xs text-muted mt-0.5">{active.location}</p>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1">
                {active.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted font-sans leading-relaxed">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                {active.tags.map((tag) => (
                  <SkillBadge key={tag} label={tag} small />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
