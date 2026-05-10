import student1 from "../../assets/student-1.jpg";
import student2 from "../../assets/student-2.jpg";
import { Trophy } from "lucide-react";

const toppers = [
  { name: "Aarav Mehta", img: student1, course: "JEE Advanced", score: "AIR 287", year: "2024" },
  { name: "Ishita Sharma", img: student2, course: "NEET UG", score: "AIR 642", year: "2024" },
  { name: "Kabir Verma", img: student1, course: "CBSE Class 12 PCM", score: "98.4%", year: "2024" },
  { name: "Riya Singh", img: student2, course: "JEE Main", score: "99.7 %ile", year: "2024" },
  { name: "Aditya Rao", img: student1, course: "NEET UG", score: "AIR 1184", year: "2024" },
  { name: "Sneha Patel", img: student2, course: "CBSE Class 10", score: "97.8%", year: "2024" },
];

const Toppers = () => {
  return (
    <>
        <section className="py-16">
            <div className="mx-auto max-w-350 px-6 xl:px-10">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-orange-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                        Toppers
                    </div>
                    <h2 className="text-4xl font-bold tracking-[-1.5px] text-[#162B6F] md:text-5xl">Our 2024 Achievers</h2>
                    <p className="mt-5 text-lg leading-8 text-gray-600">A glimpse of the students who turned ambition into achievement.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {toppers.map((t, i) => (
                        <div key={i} className="group overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                            <div className="relative aspect-4/3 overflow-hidden bg-[#EEF2FF]">
                                <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"/>
                                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-[#F59E0B] to-[#F97316] px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                                    <Trophy className="h-3.5 w-3.5" />
                                    {t.score}
                                </div>
                                <div className="absolute right-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-[#162B6F] shadow-sm">
                                    {t.year}
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-[22px] font-bold tracking-[-0.5px] text-[#162B6F]">{t.name}</h4>
                                <p className="mt-1 text-[15px] text-gray-600">{t.course}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Toppers