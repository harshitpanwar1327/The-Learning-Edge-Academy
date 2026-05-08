import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/courses", label: "Courses" },
  { path: "/about-us", label: "About" },
  { path: "/results", label: "Results" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) => isActive ? "w-full lg:w-fit px-4 py-2 bg-[#1162D4]/10 rounded-lg text-[#1162D4]" : "w-full lg:w-fit px-4 py-2 rounded-lg hover:text-[#1162D4] hover:bg-[#1162D4]/5 transition duration-300";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md p-4 md:px-8 flex items-center gap-4 justify-between">
      <NavLink to="/" className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#162B6F] via-[#2E3E84] to-[#F97316] shadow-lg">
          <GraduationCap className="h-6 w-6 text-white" />
        </div>
        <div className="leading-tight">
          <h2 className="text-[20px] font-bold tracking-[-0.4px] text-[#0F2B6B]">The Learning Edge</h2>
          <p className="mt-1 text-[12px] uppercase tracking-[3px] text-gray-500">Academy · Gurgaon</p>
        </div>
      </NavLink>

      <nav className="hidden items-center gap-3 lg:flex">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} end={item.path === "/"} className={navClass}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="hidden items-center gap-4 lg:flex">
        <NavLink to="/contact" className="font-semibold px-4 py-2 rounded-xl transition hover:bg-linear-to-r from-[#F59E0B] to-[#F97316] hover:text-white">
          Book Demo
        </NavLink>
        <NavLink to="/courses" className="rounded-xl bg-linear-to-r from-[#F59E0B] to-[#F97316] px-4 py-2 font-semibold text-white shadow-md transition hover:scale-[1.02]">
          Join Now
        </NavLink>
      </div>

      <button onClick={()=>setMenuOpen(!menuOpen)} className="lg:hidden" aria-label="Open navigation menu">
        {menuOpen ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ y: -400 }}
            animate={{ y: 0 }}
            exit={{ y: -400 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md p-6 w-full flex flex-col gap-4">
            <div className="lex items-center justify-between gap-4">
              <NavLink to="/" className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#162B6F] via-[#2E3E84] to-[#F97316] shadow-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="leading-tight">
                  <h2 className="text-[20px] font-bold tracking-[-0.4px] text-[#0F2B6B]">The Learning Edge</h2>
                  <p className="mt-1 text-[12px] uppercase tracking-[3px] text-gray-500">Academy · Gurgaon</p>
                </div>
              </NavLink>
              <X className="cursor-pointer" onClick={()=>setMenuOpen(false)}/>
            </div>
            <div className="lg:hidden flex flex-col items-center gap-1 text-gray-700 font-medium">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} end={item.path === "/"} onClick={()=>setMenuOpen(false)} className={navClass}>
                  {item.label}
                </NavLink>
              ))}
              <NavLink to="/courses" onClick={() => setMenuOpen(false)} className="mt-3 block rounded-xl bg-linear-to-r from-[#F59E0B] to-[#F97316] px-5 py-3 text-center font-semibold text-white">
                Join Now
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header