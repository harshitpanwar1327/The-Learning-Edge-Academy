const timeline = [
  { year: "2010", title: "Humble Beginning", desc: "Started with a single classroom and 18 students in Sector 47, Gurgaon." },
  { year: "2014", title: "First JEE Topper", desc: "Our first AIR under 1000 in JEE Advanced — a defining moment." },
  { year: "2017", title: "NEET Wing Launched", desc: "Expanded into medical entrance with a dedicated biology faculty team." },
  { year: "2020", title: "Hybrid Learning", desc: "Pioneered blended online + offline classes during the pandemic." },
  { year: "2024", title: "5000+ Alumni Strong", desc: "Crossed 5000 students mentored with 95% selection rate." },
];

const Journey = () => {
  return (
    <section className="bg-[#EEF2FF]/50 py-20">
        <div className="mx-auto max-w-350 px-6 xl:px-10">
            <div className="mx-auto mb-16 max-w-3xl text-center">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-orange-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Journey
                </div>
                <h2 className="text-4xl font-bold tracking-[-1.5px] text-[#162B6F] md:text-5xl">Milestones That Define Us</h2>
            </div>

            <div className="relative mx-auto max-w-4xl">
                <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-gray-200 md:left-1/2 md:-translate-x-1/2"/>

                {timeline.map((t, i) => (
                    <div key={t.year} className={`relative mb-12 md:grid md:grid-cols-2 md:gap-12 ${i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}>
                        <div className={`relative pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                            <div className="absolute left-5 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-orange-500 ring-4 ring-orange-100 md:left-1/2"/>
                            <p className="text-[22px] font-bold text-orange-500">{t.year}</p>
                            <h4 className="mt-2 text-[24px] font-bold tracking-[-0.5px] text-[#162B6F]">{t.title}</h4>
                            <p className="mt-3 text-[15px] leading-7 text-gray-600">{t.desc}</p>
                        </div>
                        <div />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Journey