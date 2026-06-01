import { motion } from 'framer-motion'
import SkillBadge from './SkillBadge'

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="relative bg-surface border border-border rounded-lg p-6 flex flex-col gap-4 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4, borderColor: '#58a6ff', transition: { duration: 0.2 } }}
    >
      {project.badge && (
        <span className="absolute top-4 right-4 px-2 py-0.5 text-xs font-mono rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
          {project.badge}
        </span>
      )}

      <div>
        <h3 className="font-mono text-xl text-primary font-bold mb-1">{project.title}</h3>
        <p className="font-mono text-sm text-accent">{project.subtitle}</p>
      </div>

      <p className="font-sans text-sm text-muted leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <SkillBadge key={tag} label={tag} small />
        ))}
      </div>

      <div className="flex items-center gap-4 pt-2 border-t border-border">
        {project.stayTuned ? (
          <span className="font-mono text-xs text-muted italic">
            // stay tuned
          </span>
        ) : (
          <>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted hover:text-accent transition-colors duration-200 font-mono text-sm"
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted hover:text-accent transition-colors duration-200 font-mono text-sm"
              >
                <ExternalIcon />
                <span>Live Demo</span>
              </a>
            )}
          </>
        )}
      </div>
    </motion.div>
  )
}
