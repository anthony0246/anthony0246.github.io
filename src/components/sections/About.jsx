import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24 scroll-mt-14">
      <SectionHeader label="about" />

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/assets/my_image.jpg"
            alt="Anthony Alam"
            className="w-52 h-52 object-cover rounded-lg border border-border"
          />
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
              a passion for building systems that operate at scale — from network routing infrastructure to
              connected vehicle platforms and AI-powered tools.
            </p>
            <p>
              I've completed three engineering internships at{' '}
              <span className="text-primary">Cisco Systems</span> and one at{' '}
              <span className="text-primary">Ford Motor Company</span>, working across IOS XE/XR networking,
              C++ embedded service development, and AI/observability automation. I love Backend and
              Infrastructure Development and thrive where precision and performance matter most.
            </p>
            <p>
              Outside of work, I enjoy building side projects, grinding coding problems on GitHub, and
              exploring how AI can be applied to real-world accessibility challenges.
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-5 font-mono">
            <p className="text-accent text-xs mb-3 uppercase tracking-widest">education</p>
            <p className="text-primary font-semibold text-sm">University of Ottawa</p>
            <p className="text-muted text-sm">BASc Software Engineering</p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs">
              <span className="text-muted">GPA: <span className="text-accent font-bold">3.96 / 4.0</span></span>
              <span className="text-muted">Expected: <span className="text-primary">Dec 2027</span></span>
              <span className="text-muted">Ottawa, ON</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
