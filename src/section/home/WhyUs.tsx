import { BarChart3, Clock, FileCheck, MessageSquare, Target, Users } from "lucide-react"

const why = [
  { icon: Users, title: "Experienced Faculty", desc: "Mentors from IITs, AIIMS & top universities with 10+ yrs experience." },
  { icon: Target, title: "Personalized Attention", desc: "Small batches of 18–22 students for one-on-one mentorship." },
  { icon: FileCheck, title: "Weekly Tests", desc: "Continuous assessment with detailed performance analytics." },
  { icon: MessageSquare, title: "Doubt Sessions", desc: "Daily doubt-clearing windows so no question goes unanswered." },
  { icon: BarChart3, title: "Performance Tracking", desc: "Granular reports on accuracy, time and topic mastery." },
  { icon: Clock, title: "Parent Reports", desc: "Monthly parent-teacher interactions and progress dashboards." },
];

const WhyUs = () => {
  return (
    <section className="bg-[linear-gradient(180deg,oklch(0.99_0.01_260),oklch(0.96_0.025_262))] py-20 lg:py-24">
        <div className="mx-auto max-w-350 px-6 xl:px-10">
            <div className="mx-auto mb-14 max-w-3xl text-center">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-orange-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Why Choose Us
                </div>
                <h2 className="text-4xl font-bold tracking-[-1.5px] text-[#162B6F] md:text-5xl">The Learning Edge Difference</h2>
                <p className="mt-5 text-lg leading-8 text-gray-600">Six pillars that make us Gurgaon's most trusted coaching institute.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {why.map((w, i) => (
                    <div key={w.title} className="group flex gap-4 rounded-[26px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{animationDelay: `${i * 50}ms`,}}>
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#162B6F] to-[#F97316] text-white shadow-md">
                            <w.icon className="h-5 w-5" />
                        </div>
                        <div>
                            <h4 className="text-[18px] font-semibold text-[#162B6F]">{w.title}</h4>
                            <p className="mt-2 text-[15px] leading-7 text-gray-600">{w.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default WhyUs