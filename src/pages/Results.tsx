import Toppers from "../section/result/Toppers"
import ParentsReviews from "../section/result/ParentsReviews"
import { lazy } from "react"

const Hero = lazy(()=>import("../section/Hero"));

const Results = () => {
  return (
    <>
      <Hero badge="Results" title="Numbers That Speak for Themselves" description="Every year, our students top boards, crack JEE & NEET, and earn admissions to the country's finest institutions." />

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