import { motion } from 'framer-motion'
import SkillBadge from './SkillBadge'

const linkClasses =
  'flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-accent/30 bg-accent/10 text-accent font-mono text-sm font-medium hover:bg-accent/20 hover:border-accent/60 transition-colors duration-200'

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.652.95 3.559.95.865 0 2.21-1.01 3.85-1.01.635 0 2.986.06 4.522 2.28-.116.075-2.696 1.58-2.696 4.83 0 3.88 3.415 5.24 3.212 5.72z"/>
  </svg>
)

const SupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
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
      className="relative bg-surface/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden flex flex-col gap-4 group shadow-lg shadow-black/20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4, boxShadow: '0 0 28px rgba(88,166,255,0.25)', transition: { duration: 0.2 } }}
    >
      <div className="h-1 w-full bg-gradient-to-r from-accent to-amber-badge" />

      <div className="px-6 pt-6 pb-6 flex flex-col gap-4 flex-1">
      {project.badge && (
        <span className="absolute top-4 right-4 px-2 py-0.5 text-xs font-mono rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
          {project.badge}
        </span>
      )}

      <div>
        <h3 className="font-sans text-xl text-primary font-bold mb-1">{project.title}</h3>
        <p className="font-sans text-sm text-accent">{project.subtitle}</p>
      </div>

      <p className="font-sans text-sm text-muted leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <SkillBadge key={tag} label={tag} small />
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-border">
        {project.stayTuned ? (
          <span className="font-mono text-xs text-muted italic">
            // stay tuned
          </span>
        ) : (
          <>
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, boxShadow: '0 0 16px rgba(88,166,255,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className={linkClasses}
              >
                <GitHubIcon />
                <span>GitHub</span>
              </motion.a>
            )}
            {project.links.appStore && (
              <motion.a
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, boxShadow: '0 0 16px rgba(88,166,255,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className={linkClasses}
              >
                <AppleIcon />
                <span>App Store</span>
              </motion.a>
            )}
            {project.links.live && (
              <motion.a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, boxShadow: '0 0 16px rgba(88,166,255,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className={linkClasses}
              >
                <ExternalIcon />
                <span>Live Demo</span>
              </motion.a>
            )}
            {project.links.support && (
              <motion.a
                href={project.links.support}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, boxShadow: '0 0 16px rgba(88,166,255,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className={linkClasses}
              >
                <SupportIcon />
                <span>Support Page</span>
              </motion.a>
            )}
          </>
        )}
      </div>
      </div>
    </motion.div>
  )
}
