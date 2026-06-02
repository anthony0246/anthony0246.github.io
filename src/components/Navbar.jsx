import { useState } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const SECTION_IDS = ['about', 'experience', 'projects', 'skills', 'contact']

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="font-mono text-accent font-bold text-sm tracking-widest hover:opacity-80 transition-opacity"
        >
          anthony.alam
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = activeSection === id
            return (
              <button
                key={id}
                onClick={() => handleNavClick(href)}
                className={`
                  px-3 py-1.5 font-mono text-sm rounded transition-colors duration-200 relative
                  ${isActive ? 'text-accent' : 'text-muted hover:text-primary'}
                `}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-accent rounded-full" />
                )}
              </button>
            )
          })}
          <a
            href="/assets/ANTHONY_M_ALAM_RESUME.pdf"
            download
            className="ml-3 px-3 py-1.5 font-mono text-sm border border-accent text-accent rounded hover:bg-accent/10 transition-colors duration-200"
          >
            Resume ↓
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-primary transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-primary transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-primary transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-4 flex flex-col gap-2">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = activeSection === id
            return (
              <button
                key={id}
                onClick={() => handleNavClick(href)}
                className={`text-left py-2 font-mono text-sm ${isActive ? 'text-accent' : 'text-muted'}`}
              >
                {label}
              </button>
            )
          })}
          <a
            href="/assets/ANTHONY_M_ALAM_RESUME.pdf"
            download
            className="mt-2 py-2 font-mono text-sm text-accent border-t border-border"
            onClick={() => setMenuOpen(false)}
          >
            Resume ↓
          </a>
        </div>
      )}
    </header>
  )
}
