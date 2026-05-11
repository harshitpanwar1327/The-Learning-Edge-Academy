import { lazy } from "react"
const Hero = lazy(()=>import("../section/Hero"));
import { BookOpen, GraduationCap, Calculator, Beaker, Stethoscope, Check, Sparkles } from "lucide-react";
import FAQ from "../section/FAQ";

const programs = [
  {
    icon: BookOpen, color: "from-sky-400 to-sky-600", tag: "Foundation",
    title: "Foundation Program (6–8)",
    desc: "Concept-first learning that lights the spark of curiosity early.",
    subjects: ["Math","Science","Social Science","English"],
    features: ["Concept building","Olympiad preparation (NSO/IMO)","Science & Math focus","Activity-based learning"],
  },
  {
    icon: GraduationCap, color: "from-indigo-500 to-purple-600", tag: "Boards",
    title: "Board Preparation (9–10)",
    desc: "Master CBSE with NTSE foundation and exam strategy.",
    subjects: ["Math","Science","Social Science","English"],
    features: ["CBSE preparation","NTSE foundation","Regular weekly tests","Doubt clearing sessions"],
  },
  {
    icon: Calculator, color: "from-red-400 to-indigo-700", tag: "Sr. Sec",
    title: "Senior Secondary (11–12)",
    desc: "Streams aligned with competitive exam aspirations.",
    subjects: ["PCM","PCB"],
    features: ["Stream-specialized teaching","Board + competitive integration","Advanced problem solving","Career counseling"],
  },
  {
    icon: Beaker, color: "from-orange-500 to-rose-500", tag: "Engineering",
    title: "JEE Preparation",
    desc: "Crack JEE Main & Advanced with structured rigour.",
    subjects: ["Physics","Chemistry","Mathematics"],
    features: ["JEE Main + Advanced","Daily Practice Problems","All-India mock test series","Previous year analysis"],
  },
  {
    icon: Stethoscope, color: "from-emerald-500 to-teal-600", tag: "Medical",
    title: "NEET Preparation",
    desc: "Built for the medical aspirant — depth, clarity, discipline.",
    subjects: ["Physics","Chemistry","Biology"],
    features: ["NCERT-focused mastery","Biology specialization","Bi-weekly test series","NEET pattern revision"],
  },
];

const faqs = [
  { q: "How are batches structured?", a: "Each batch has 18–22 students to ensure personalized attention. We group students by class and target exam." },
  { q: "Do you offer trial classes?", a: "Yes. Every student can attend a free demo class before enrolling. Book it from the Contact page." },
  { q: "What is the test schedule?", a: "Weekly chapter tests, monthly cumulative tests, and full-length mocks aligned with the target exam pattern." },
  { q: "Are study materials included?", a: "Yes — all printed handouts, DPPs, test papers and digital resources are included in the fee." },
  { q: "Is there a fee installment option?", a: "We offer flexible 2- and 3-installment plans. Speak to our counselor for details." },
];

const Courses = () => {
  return (
    <>
      <Hero badge="Courses" title="Our Courses" description="Structured learning paths for every academic stage — from foundation through JEE & NEET mastery." />

      <section className="py-20">
        <div className="mx-auto max-w-350 px-6 xl:px-10">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-orange-500">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Programs
            </div>
            <h2 className="text-4xl font-bold tracking-[-1.5px] text-[#162B6F] md:text-5xl">Choose Your Learning Path</h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">Five focused programs — each crafted to meet students exactly where they are.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <div key={p.title} style={{animationDelay: `${i * 60}ms`, }} className="group relative flex flex-col overflow-hidden rounded-4xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className={`h-1.5 w-full bg-linear-to-r ${p.color}`}/>

                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-6 flex items-start justify-between">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${p.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                      <p.icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[2px] text-orange-500">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-[24px] font-bold tracking-[-0.5px] text-[#162B6F]">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-gray-600">{p.desc}</p>
                  <div className="mt-6">
                    <div className="mb-3 text-[10px] font-semibold uppercase tracking-[2px] text-gray-500">
                      Subjects
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.subjects.map((s) => (
                        <span key={s} className="rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-medium text-[#162B6F]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[2px] text-gray-500">
                      <Sparkles className="h-3 w-3 text-orange-500" />
                      Highlights
                    </div>

                    <div className="space-y-3">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"/>
                          <span className="text-[15px] leading-6 text-gray-700">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ heading="FAQ" subHeading="Common Questions" faqs={faqs} />
    </>
  )
}

export default Courses