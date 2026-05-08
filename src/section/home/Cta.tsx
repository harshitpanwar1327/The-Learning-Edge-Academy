import { NavLink } from "react-router-dom";

const Cta = () => {
  return (
    <section className="py-16">
        <div className="mx-auto max-w-350 px-6 xl:px-10">
            <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-[#162B6F] via-[#2B3F8D] to-[#4A56A6] px-6 py-8 text-center text-white shadow-2xl md:px-10 md:py-12">
                {/* background blur */}
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-400/30 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                <div className="relative z-10">
                    <h2 className="text-4xl font-bold tracking-[-1.5px] md:text-5xl">Start Your Success Journey Today</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">Join 200+ students who chose The Learning Edge for their academic transformation.</p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <NavLink to="/courses">
                            <button className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-xl bg-linear-to-r from-[#F59E0B] to-[#F97316] px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-[1.02]">Join Now</button>
                        </NavLink>
                        <NavLink to="/contact">
                            <button className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-xl border border-white/30 bg-white/10 px-8 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#162B6F]">Talk to Counselor</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cta