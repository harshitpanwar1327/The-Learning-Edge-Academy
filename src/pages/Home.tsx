import { ArrowRight, Sparkles, Users, Trophy } from "lucide-react"
import { NavLink } from "react-router-dom"
import hero from "../assets/hero-students.jpg"
import Course from "../section/home/Course"
import WhyUs from "../section/home/WhyUs"

const Home = () => {
  return (
    <>
      <section className="mt-15 relative overflow-hidden bg-[linear-gradient(180deg,oklch(0.99_0.01_260),oklch(0.96_0.025_262))]">
        <div className="mx-auto grid max-w-350 items-center gap-16 px-6 pb-20 pt-16 lg:grid-cols-2 lg:pb-28 lg:pt-24 xl:px-10">
          <div className="animate-[fade-up_0.7s_ease-out_both]">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-[#162B6F] shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" />
              Admissions Open · 2026 Batch
            </div>

            <h1 className="mt-6 max-w-175 text-4xl font-bold leading-[1.05] tracking-[-2px] text-[#162B6F] md:text-5xl lg:text-6xl">
              Empowering Students to Achieve{" "}
              <span className="bg-linear-to-r from-[#162B6F] to-[#F97316] bg-clip-text text-transparent">
                Academic Excellence
              </span>
            </h1>
            <p className="mt-6 max-w-155 text-lg leading-8 text-gray-600">Foundation Courses, Board Preparation, NEET & JEE Coaching in Gurgaon — taught by mentors from India's top institutes.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink to="/courses">
                <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#162B6F] px-7 text-sm font-medium text-white hover:bg-[#162B6F]/90">
                  Explore Courses
                  <ArrowRight className="h-4 w-4" />
                </button>
              </NavLink>
              <NavLink to="/contact">
                <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#162B6F] bg-white px-7 text-sm font-medium text-[#162B6F] transition duration-300 hover:bg-[#162B6F] hover:text-white">
                  Book Free Demo Class
                </button>
              </NavLink>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                ["200+", "Students"],
                ["95%", "Success"],
                ["10+", "Faculty"],
              ].map(([number, label]) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-[#162B6F]">
                    {number}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[2px] text-gray-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-[scale-in_0.4s_ease-out_both]">
            <div className="overflow-hidden rounded-4xl border border-white shadow-2xl">
              <img src={hero} alt="Students learning at The Learning Edge Academy" className="h-auto w-full object-cover"/>
              <div className="absolute inset-0 bg-linear-to-tr from-[#162B6F]/20 to-transparent rounded-4xl" />
            </div>
            <div className="absolute -left-4 top-10 rounded-2xl border border-white/20 bg-white/80 p-4 shadow-xl backdrop-blur-xl md:-left-8">
              <div className="flex items-center gap-3">
                <p className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[#F59E0B] to-[#F97316] text-white">
                  <Trophy className="h-5 w-5" />
                </p>
                <div>
                  <p className="text-sm font-bold text-[#162B6F]">AIR 287</p>
                  <p className="text-xs text-gray-500">JEE Advanced 2024</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-10 rounded-2xl border border-white/20 bg-white/80 p-4 shadow-xl backdrop-blur-xl md:-right-8" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-center gap-3">
                <p className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#162B6F] text-white">
                  <Users className="h-5 w-5" />
                </p>
                <div>
                  <p className="text-sm font-bold text-[#162B6F]">98.4%</p>
                  <p className="text-xs text-gray-500">Boards Topper</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Course />
      <WhyUs />
    </>
  )
}

export default Home