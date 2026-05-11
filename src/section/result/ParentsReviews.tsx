import { Star, Quote } from "lucide-react";

const reviews = [
  { quote: "My son's confidence in physics transformed completely. The mentors here treat each child as an individual.", name: "Mr. Mehta", role: "Parent" },
  { quote: "Excellent test series and personal feedback. They truly invest in the student.", name: "Mrs. Iyer", role: "Parent" },
  { quote: "From struggling in math to scoring 98% — the credit goes entirely to The Learning Edges.", name: "Tanvi B.", role: "Class 10 Student" },
];

const ParentsReviews = () => {
  return (
    <section className="py-20 bg-[linear-gradient(180deg,oklch(0.99_0.01_260),oklch(0.96_0.025_262))]">
        <div className="mx-auto max-w-350 px-6 xl:px-10">
            <div className="mx-auto mb-14 max-w-3xl text-center">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-orange-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Parent Voices
                </div>
                <h2 className="text-4xl font-bold tracking-[-1.5px] text-[#162B6F] md:text-5xl">Trusted by Parents</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {reviews.map((r, i) => (
                    <div key={i} className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                            <Quote className="h-7 w-7" />
                        </div>
                        <p className="text-[16px] leading-8 text-gray-700">"{r.quote}"</p>
                        <div className="mt-6 flex items-center gap-1 text-orange-500">
                            {Array.from({ length: 5 }).map((_, k) => (
                                <Star key={k} className="h-4 w-4 fill-current"/>
                            ))}
                        </div>
                        <div className="mt-5">
                            <h4 className="text-[18px] font-semibold text-[#162B6F]">{r.name}</h4>
                            <p className="mt-1 text-sm text-gray-500">{r.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ParentsReviews