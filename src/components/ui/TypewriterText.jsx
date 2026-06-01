import { useTypewriter } from '../../hooks/useTypewriter'

const ROLES = [
  'Software Engineer',
  'Cisco Intern × 3',
  'Ford Motor Intern',
  'Full-Stack Developer',
  'Networking Engineer',
  'AI Developer',
]

export default function TypewriterText() {
  const { displayText } = useTypewriter(ROLES)

  return (
    <div className="flex items-center gap-0 font-mono text-xl md:text-2xl text-accent min-h-[2rem]">
      <span>{displayText}</span>
      <span className="ml-0.5 inline-block w-0.5 h-6 bg-accent animate-pulse" />
    </div>
  )
}
