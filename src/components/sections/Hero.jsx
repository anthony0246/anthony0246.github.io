import { motion } from 'framer-motion'
import ParticleBackground from '../ui/ParticleBackground'
import TypewriterText from '../ui/TypewriterText'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col gap-5"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="font-mono text-muted text-sm">
          <span className="text-accent">$</span> whoami
        </motion.p>

        <motion.h1 variants={item} className="font-mono text-4xl md:text-6xl font-bold text-primary leading-tight">
          Anthony Alam
        </motion.h1>

        <motion.div variants={item}>
          <TypewriterText />
        </motion.div>

        <motion.p variants={item} className="font-sans text-muted text-base md:text-lg leading-relaxed max-w-xl">
          Shipping production-grade software across networks, vehicles, and AI —{' '}
          <span className="text-primary">powered by a 3.96 GPA.</span>
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={() => scrollTo('projects')}
            className="px-5 py-2.5 bg-accent text-background font-mono font-bold text-sm rounded hover:bg-accent/90 transition-colors duration-200"
          >
            View Work
          </button>
          <a
            href="/assets/ANTHONY_M_ALAM_RESUME.pdf"
            download
            className="px-5 py-2.5 border border-accent text-accent font-mono font-bold text-sm rounded hover:bg-accent/10 transition-colors duration-200"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div variants={item} className="flex gap-4 pt-2">
          <a
            href="https://github.com/anthony0246"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/anthonyalamswe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="mailto:anthonyalamswe@gmail.com"
            className="text-muted hover:text-accent transition-colors duration-200"
            aria-label="Email"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        onClick={() => scrollTo('about')}
        style={{ cursor: 'pointer' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </motion.div>
    </section>
  )
}
