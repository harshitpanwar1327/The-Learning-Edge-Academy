import student1 from "../../assets/student-1.jpg";
import student2 from "../../assets/student-2.jpg";

const faculty = [
  { name: "Dr. Anjali Kapoor", img: student1, subject: "Mathematics", exp: "14+ years", qual: "PhD, IIT Delhi" },
  { name: "Prof. Rohit Sharma", img: student2, subject: "Physics", exp: "12+ years", qual: "M.Tech, IIT Bombay" },
  { name: "Dr. Meera Iyer", img: student1, subject: "Biology", exp: "10+ years", qual: "MBBS, AIIMS Delhi" },
];

const Mentors = () => {
  return (
    <section className="bg-[linear-gradient(180deg,oklch(0.99_0.01_260),oklch(0.96_0.025_262))] py-20 lg:py-24">
        <div className="mx-auto max-w-350 px-6 xl:px-10">
            <div className="mx-auto mb-14 max-w-3xl text-center">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-orange-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Our Mentors
                </div>
                <h2 className="text-4xl font-bold tracking-[-1.5px] text-[#162B6F] md:text-5xl">Learn From the Best</h2>
                <p className="mt-5 text-lg leading-8 text-gray-600">Faculty drawn from IITs, AIIMS and top universities — passionate teachers first.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {faculty.map((f) => (
                    <div key={f.name} className="rounded-[28px] border border-gray-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        <div className="mx-auto h-32 w-32 overflow-hidden rounded-full ring-4 ring-orange-200">
                            <img src={f.img} alt={f.name} loading="lazy" className="h-full w-full object-cover"/>
                        </div>
                        <h4 className="mt-5 text-[22px] font-bold text-[#162B6F]">{f.name}</h4>
                        <p className="mt-1 text-[15px] font-medium text-orange-500">{f.subject}</p>
                        <div className="mt-4 flex items-center justify-center gap-3 text-sm text-gray-500">
                            <span>{f.exp}</span>
                            <span>•</span>
                            <span>{f.qual}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Mentors