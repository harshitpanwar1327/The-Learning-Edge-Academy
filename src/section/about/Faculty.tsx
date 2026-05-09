import faculty1 from '../../assets/faculty-3.jpg'

const faculty = [
  { name: "Dr. Anjali Kapoor", img: faculty1, role: "Director · Mathematics", bio: "PhD IIT Delhi · 14 yrs of mentoring JEE aspirants" },
  { name: "Prof. Rohit Sharma", img: faculty1, role: "Head of Physics", bio: "M.Tech IIT Bombay · Author of 3 reference books" },
  { name: "Dr. Meera Iyer", img: faculty1, role: "Head of Biology", bio: "MBBS AIIMS Delhi · NEET specialist for a decade" },
];

const Faculty = () => {
  return (
    <section className="bg-[linear-gradient(180deg,oklch(0.99_0.01_260),oklch(0.96_0.025_262))] py-20">
        <div className="mx-auto max-w-350 px-6 xl:px-10">
            <div className="mx-auto mb-14 max-w-3xl text-center">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-orange-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Faculty
                </div>
                <h2 className="text-4xl font-bold tracking-[-1.5px] text-[#162B6F] md:text-5xl">Meet the Mentors</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {faculty.map((f) => (
                    <div key={f.name} className="group overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        <div className="overflow-hidden bg-[#EEF2FF]">
                            <img src={f.img} alt={f.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                        </div>

                        <div className="p-6">
                            <h4 className="text-[22px] font-bold tracking-[-0.5px] text-[#162B6F]">{f.name}</h4>
                            <p className="mt-1 text-[15px] font-medium text-orange-500">{f.role}</p>
                            <p className="mt-4 text-[15px] leading-7 text-gray-600">{f.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Faculty