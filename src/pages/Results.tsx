import Toppers from "../section/result/Toppers"
import ParentsReviews from "../section/result/ParentsReviews"

const Results = () => {
  return (
    <>
      <section className="mt-15 bg-linear-to-br from-[#0d1d50] via-[#203072] to-[#4A56A6] py-20 text-white md:py-28">
        <div className="mx-auto max-w-3xl px-6 xl:px-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] backdrop-blur-md">
            Results
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-[-2px] md:text-6xl">Numbers That Speak for Themselves</h1>
          <p className="mt-6 text-lg leading-8 text-white/80">Every year, our students top boards, crack JEE & NEET, and earn admissions to the country's finest institutions.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-350 grid-cols-2 gap-4 px-6 md:grid-cols-4 xl:px-10">
          {[
            {
              n: 95,
              suffix: "%",
              label: "Selection Rate",
            },
            {
              n: 5000,
              suffix: "+",
              label: "Students Mentored",
            },
            {
              n: 42,
              suffix: "%",
              label: "Avg Score Improvement",
            },
            {
              n: 150,
              suffix: "+",
              label: "AIR <5000 Selections",
            },
          ].map((stat, i) => (
            <div key={i} className="rounded-[28px] border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="bg-linear-to-r from-[#162B6F] to-[#F97316] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                {stat.n}
                {stat.suffix}
              </div>
              <p className="mt-3 text-sm uppercase tracking-[2px] text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Toppers />
      <ParentsReviews />
    </>
  )
}

export default Results