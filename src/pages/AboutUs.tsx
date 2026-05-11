import { Eye, Heart, Lightbulb, Target, Users, Award } from "lucide-react"
import gallery from "../assets/gallery-1.jpg"
import Journey from "../section/about/Journey";
import Faculty from "../section/about/Faculty";
import Cta from "../section/home/Cta";
import { lazy } from "react"

const Hero = lazy(()=>import("../section/Hero"));

const vision = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To make excellence accessible by combining personalized mentorship with proven academic frameworks.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To become India's most trusted home for ambitious learners who dream of IITs, AIIMS and beyond.",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Integrity, empathy, discipline and the joy of learning — woven into every classroom.",
  },
];

const methodology = [
  {
    icon: Lightbulb,
    title: "Concept First",
    desc: "Build deep understanding before solving.",
  },
  {
    icon: Users,
    title: "Small Batches",
    desc: "18–22 students for true mentorship.",
  },
  {
    icon: Target,
    title: "Practice & Test",
    desc: "DPPs and weekly tests calibrate progress.",
  },
  {
    icon: Award,
    title: "Mentor & Reflect",
    desc: "1:1 reviews keep momentum compounding.",
  },
];

const AboutUs = () => {
  return (
    <>
      <Hero badge="About Us" title="A Decade of Shaping Futures in Gurgaon" description="The Learning Edges Academy was born from a simple belief — that personalized, rigorous mentoring can transform any motivated student into a high achiever." />

      <section className="py-20">
        <div className="mx-auto grid max-w-350 gap-6 px-6 lg:grid-cols-3 xl:px-10">
          {vision.map((b) => (
            <div key={b.title} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#162B6F] to-[#F97316] text-white shadow-md">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-[-0.5px] text-[#162B6F]">{b.title}</h3>
              <p className="mt-3 text-md text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,oklch(0.99_0.01_260),oklch(0.96_0.025_262))] py-16">
        <div className="mx-auto grid max-w-350 items-center gap-14 px-6 lg:grid-cols-2 xl:px-10">
          <div className="overflow-hidden rounded-4xl shadow-2xl">
            <img src={gallery} alt="Our classroom" loading="lazy" className="h-full w-full object-cover"/>
          </div>

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-orange-500">
              Founder&apos;s Note
            </div>
            <h2 className="max-w-155 text-4xl font-bold leading-tight tracking-[-1.5px] text-[#162B6F] md:text-5xl">"We don't just teach. We mentor for life."</h2>
            <p className="mt-6 text-md  text-gray-600">When I started The Learning Edges in 2010, I wanted to build a place where every student felt seen — where academic ambition met personal care. Fifteen years later, that same philosophy guides every classroom, every test review, every parent meeting.</p>
            <p className="mt-5 text-[16px] leading-8 text-gray-600">If your child is ready to grow, we are ready to walk that path with them.</p>

            <div className="mt-8">
              <h4 className="text-[22px] font-bold text-[#162B6F]">Dr. Anjali Kapoor</h4>
              <p className="mt-1 text-[15px] text-gray-500">Founder & Director</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-350 px-6 xl:px-10">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-orange-500">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Methodology
            </div>
            <h2 className="text-4xl font-bold tracking-[-1.5px] text-[#162B6F] md:text-5xl">How We Teach</h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">A proven 4-step framework refined over 15 years and 5000+ students.</p>
          </div>
          
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {methodology.map((s, i) => (
              <div key={s.title} className="rounded-[28px] border border-gray-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-[3px] text-orange-500">
                  Step 0{i + 1}
                </div>
                <h4 className="mt-2 text-[20px] font-bold text-[#162B6F]">{s.title}</h4>
                <p className="mt-3 text-[15px] leading-7 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Journey />
      <Faculty />
      <Cta />
    </>
  )
}

export default AboutUs