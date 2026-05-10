interface HeroProps {
  badge: string;
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ badge, title, description }) => {
  return (
    <div className="mt-18 text-white bg-[linear-gradient(135deg,oklch(0.28_0.12_262)_0%,oklch(0.35_0.14_270)_50%,oklch(0.45_0.16_280)_100%)] py-12 lg:py-24 px-4 lg:px-16">
      <div className="flex flex-col items-start gap-6 max-w-5xl mx-auto">
        <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase backdrop-blur-xl">{badge}</div>
        <h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-[1.02] max-w-4xl">{title}</h1>
        <p className="md:text-lg max-w-2xl opacity-80">{description}</p>
      </div>
    </div>
  )
}

export default Hero