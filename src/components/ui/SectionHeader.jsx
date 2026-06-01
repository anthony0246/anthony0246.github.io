export default function SectionHeader({ label }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-mono text-accent text-lg">~/</span>
        <h2 className="font-mono text-2xl md:text-3xl text-primary font-bold">{label}</h2>
      </div>
      <div className="h-px bg-border w-full" />
    </div>
  )
}
