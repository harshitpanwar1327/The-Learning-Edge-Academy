import { Quote, Star } from "lucide-react";

const testimonials = [
  { quote: "The personalized mentorship completely changed how I approach problems. The faculty truly cares.", name: "Aarav M.", role: "JEE Advanced AIR 287" },
  { quote: "My daughter went from average to top of her class. The weekly tests and parent reports keep us aligned.", name: "Mrs. Sharma", role: "Parent, Class 10" },
  { quote: "NEET prep here was rigorous and joyful at the same time. Best decision of my academic journey.", name: "Ishita S.", role: "NEET AIR 642" },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-350 px-6 xl:px-10">
            <div className="mx-auto mb-14 max-w-3xl text-center">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-orange-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Voices
                </div>
                <h2 className="text-4xl font-bold tracking-[-1.5px] text-[#162B6F] md:text-5xl">What Students & Parents Say</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
                <div key={i} className="rounded-[28px] border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                    <Quote className="h-7 w-7" />
                </div>
                <p className="text-[16px] leading-8 text-gray-700">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-1 text-orange-500">
                    {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current"/>
                    ))}
                </div>
                <div className="mt-5">
                    <h4 className="text-[18px] font-semibold text-[#162B6F]">{t.name}</h4>
                    <p className="mt-1 text-sm text-gray-500">{t.role}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials