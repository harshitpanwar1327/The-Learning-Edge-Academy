import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from '../assets/Logo.png';

const navItems = [
  { path: "/", label: "Home" },
  { path: "/courses", label: "Courses" },
  { path: "/about-us", label: "About" },
  { path: "/results", label: "Results" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navClass = ({ isActive }: { isActive: boolean }) => isActive ? "w-full lg:w-fit px-4 py-2 bg-blue-100 rounded-xl font-medium text-sm" : "w-full lg:w-fit px-4 py-2 rounded-xl hover:bg-blue-50 transition duration-300";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border border-gray-200 p-4 md:px-8 flex items-center justify-between gap-4">
      <NavLink to="/" className="flex items-center gap-3">
        <img src={Logo} alt="Logo" className="w-10 h-10 rounded-xl shadow-[0_12px_30px_-10px_oklch(0.7_0.18_50/0.45)]" />
        <div>
          <h2 className="font-bold text-[#032262]">The Learning Edges</h2>
          <p className="text-sm uppercase text-gray-500">Academy · Gurgaon</p>
        </div>
      </NavLink>

      <div className="hidden lg:flex items-center gap-2">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={navClass}>
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <NavLink to="/contact" className="font-medium text-sm px-4 py-2 rounded-xl hover:bg-[linear-gradient(135deg,oklch(0.74_0.17_55),oklch(0.65_0.2_35))] hover:text-white">
          Book Demo
        </NavLink>
        <NavLink to="/courses" className="font-medium text-sm px-4 py-2 rounded-xl bg-[linear-gradient(135deg,oklch(0.74_0.17_55),oklch(0.65_0.2_35))] shadow-[0_12px_30px_-10px_oklch(0.7_0.18_50/0.45)] text-white hover:scale-105 transition duration-300">
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
            className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg p-6 flex flex-col gap-8"
          >
            <div className="flex justify-between gap-4">
              <NavLink to="/" onClick={()=>setMenuOpen(false)} className="flex items-center gap-3">
                <img src={Logo} alt="Logo" className="w-10 h-10 rounded-xl shadow-[0_12px_30px_-10px_oklch(0.7_0.18_50/0.45)]" />
                <div>
                  <h2 className="font-bold text-[#032262]">The Learning Edges</h2>
                  <p className="text-sm uppercase text-gray-500">Academy · Gurgaon</p>
                </div>
              </NavLink>
              <X className="cursor-pointer" onClick={()=>setMenuOpen(false)}/>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} onClick={()=>setMenuOpen(false)} className={navClass}>
                  {item.label}
                </NavLink>
              ))}
            </div>

            <NavLink to="/contact" onClick={()=>setMenuOpen(false)} className="font-medium text-sm px-4 py-2 rounded-xl bg-[linear-gradient(135deg,oklch(0.74_0.17_55),oklch(0.65_0.2_35))] shadow-[0_12px_30px_-10px_oklch(0.7_0.18_50/0.45)] text-white hover:scale-105 transition duration-300">
              Book Free Demo
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header