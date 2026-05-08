import { ArrowRight, BookOpen, GraduationCap, Microscope, Calculator, FlaskConical, Stethoscope } from "lucide-react"
import { NavLink } from "react-router-dom";

const courses = [
  { icon: BookOpen, title: "Classes 6–8 Foundation", desc: "Build strong concepts in Math & Science with Olympiad-level training.", tag: "Foundation" },
  { icon: GraduationCap, title: "Classes 9–10 Boards", desc: "CBSE board mastery with NTSE foundation and weekly assessments.", tag: "Boards" },
  { icon: Calculator, title: "Classes 11–12 Senior Secondary", desc: "PCM, PCB & Commerce streams aligned with competitive exams.", tag: "Sr. Sec" },
  { icon: FlaskConical, title: "JEE Preparation", desc: "JEE Main & Advanced. Concept clarity, DPPs, mock test series.", tag: "Engineering" },
  { icon: Stethoscope, title: "NEET Preparation", desc: "Biology mastery, NCERT-focused learning and rigorous test series.", tag: "Medical" },
  { icon: Microscope, title: "Olympiad & Scholarships", desc: "Specialized prep for NSO, IMO, KVPY and merit scholarships.", tag: "Honours" },
];

const Course = () => {
  return (
    <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-350 px-6 xl:px-10">
            <div className="mx-auto mb-14 max-w-3xl text-center">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-orange-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Programs
                </div>
                <h2 className="text-4xl font-bold tracking-[-1.5px] text-[#162B6F] md:text-5xl">Courses Designed for Excellence</h2>
                <p className="mt-5 text-lg leading-8 text-gray-600">Structured learning paths for every academic stage — from concept building to competitive mastery.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((c, i) => (
                    <div key={c.title} className="group rounded-[28px] border border-gray-200 bg-white p-7 text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-2xl" style={{animationDelay: `${i * 60}ms`,}}>
                        <div className="mb-6 flex items-start justify-between">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF2FF] text-[#162B6F] transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-[#F59E0B] group-hover:to-[#F97316] group-hover:text-white">
                                <c.icon className="h-7 w-7" />
                            </div>
                            <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[2px] text-orange-500">
                                {c.tag}
                            </span>
                        </div>
                        <h3 className="text-[22px] font-bold tracking-[-0.5px] text-[#162B6F]">{c.title}</h3>
                        <p className="mt-3 text-[15px] leading-7 text-gray-600">{c.desc}</p>

                        <NavLink to="/courses" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#162B6F] transition hover:text-orange-500">
                            Learn more
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Course