import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-14">
      <SectionHeader label="about" />

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <motion.div
          className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-auto"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/30 to-amber-badge/20 blur-2xl" aria-hidden="true" />
            <img
              src="/assets/my_image.jpg"
              alt="Anthony Alam"
              className="relative w-44 h-44 sm:w-52 sm:h-52 object-cover rounded-2xl border border-border shadow-2xl shadow-black/40"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 flex-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="font-sans text-muted text-base leading-relaxed space-y-4">
            <p>
              I'm a Software Engineering student at the University of Ottawa with a 3.96 GPA, driven by
              a passion for building systems that operate at scale: from network routing infrastructure to
              connected vehicle platforms and AI-powered tools.
            </p>
            <p>
              I've completed four engineering internships, three at{' '}
              <span className="text-accent font-semibold">Cisco Systems</span> and one at{' '}
              <span className="text-accent font-semibold">Ford Motor Company</span>, working across IOS XE/XR networking,
              telemetry observability, C++ embedded service development, and test automation. I love Backend and
              Infrastructure Development and thrive where precision and performance matter most.
            </p>
          </div>

          <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-5 font-mono shadow-lg shadow-black/20">
            <p className="text-accent text-xs mb-3 uppercase tracking-widest">education</p>
            <p className="font-sans text-primary font-semibold text-sm">University of Ottawa</p>
            <p className="font-sans text-muted text-sm">BASc Software Engineering</p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs">
              <span className="text-muted">GPA: <span className="text-accent font-bold">3.96 / 4.00</span></span>
              <span className="text-muted">Expected: <span className="text-primary">Dec 2027</span></span>
              <span className="text-muted">Ottawa, ON</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
