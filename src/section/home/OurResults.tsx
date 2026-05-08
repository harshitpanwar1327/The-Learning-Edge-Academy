import student1 from "../../assets/student-1.jpg";
import student2 from "../../assets/student-2.jpg";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const results = [
  { name: "Aarav Mehta", img: student1, course: "JEE Advanced 2024", score: "AIR 287" },
  { name: "Ishita Sharma", img: student2, course: "NEET 2024", score: "AIR 642" },
  { name: "Kabir Verma", img: student1, course: "CBSE Class 12 PCM", score: "98.4%" },
];

const OurResults = () => {
  return (
    <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-350 px-6 xl:px-10">
            <div className="mx-auto mb-14 max-w-3xl text-center">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-orange-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Our Results
                </div>
                <h2 className="text-4xl font-bold tracking-[-1.5px] text-[#162B6F] md:text-5xl">Stories of Success</h2>
                <p className="mt-5 text-lg leading-8 text-gray-600">Real students. Real outcomes. Every year, our students top boards and crack the toughest exams.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {results.map((r) => (
                    <div key={r.name} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        <div className="relative aspect-square overflow-hidden bg-[#EEF2FF]">
                            <img src={r.img} alt={r.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                            <div className="absolute left-4 top-4 rounded-full bg-linear-to-r from-[#F59E0B] to-[#F97316] px-4 py-2 text-xs font-bold text-white shadow-lg">
                                {r.score}
                            </div>
                        </div>
                        <div className="p-6">
                            <h4 className="text-[20px] font-bold text-[#162B6F]">{r.name}</h4>
                            <p className="mt-1 text-[15px] text-gray-600">{r.course}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center">
                <NavLink to="/results">
                    <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-7 text-sm font-medium bg-[#162B6F] text-white shadow-sm hover:bg-[#162B6F]/90 hover:scale-102 transition-all duration-300">
                        View All Results
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </NavLink>
            </div>
        </div>
    </section>
  )
}

export default OurResults