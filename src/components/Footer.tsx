import { MapPin, Phone, Mail, GraduationCap } from "lucide-react";
import {FacebookRounded, Instagram, YouTube} from "@mui/icons-material"
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F2B6B] text-white flex flex-col">
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-16">
        <div className="flex flex-col gap-4 md:col-span-3 lg:col-span-2">
          <NavLink to="/" className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#2E3E84] bg-linear-to-br from-[#162B6F] via-[#2E3E84] to-[#F97316] shadow-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="leading-tight">
              <h2 className="text-[20px] font-bold tracking-[-0.4px]">The Learning Edge</h2>
            </div>
          </NavLink>

          <p className="text-white/70 leading-relaxed">Premier coaching institute in Gurgaon empowering students from foundation to JEE & NEET with personalized mentorship.</p>

          <div className="flex items-center gap-4 mt-2">
            <a href="/" rel="noopener noreferrer" target="_blank" className="bg-gray-300/10 hover:bg-[#F97316] p-2 rounded-full cursor-pointer transition duration-300"><FacebookRounded sx={{ fontSize: 18 }} />
            </a>
            <a href="/" rel="noopener noreferrer" target="_blank" className="bg-gray-300/10 hover:bg-[#F97316] p-2 rounded-full cursor-pointer transition duration-300"><Instagram sx={{ fontSize: 18 }} />
            </a>
            <a href="/" rel="noopener noreferrer" target="_blank" className="bg-gray-300/10 hover:bg-[#F97316] p-2 rounded-full cursor-pointer transition duration-300"><YouTube sx={{ fontSize: 18 }} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="flex flex-col gap-2 text-white/70">
            <NavLink to="/about-us" className={({ isActive }) => `w-fit transition duration-300 hover:text-[#F97316] ${ isActive ? "text-white" : ""}`}>
              About
            </NavLink>
            <NavLink to="/courses" className={({ isActive }) => `w-fit transition duration-300 hover:text-[#F97316] ${ isActive ? "text-white" : "" }`}>
              Courses
            </NavLink>
            <NavLink to="/results" className={({ isActive }) => `w-fit transition duration-300 hover:text-[#F97316] ${ isActive ? "text-white" : "" }`}>
              Results
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `w-fit transition duration-300 hover:text-[#F97316] ${ isActive ? "text-white" : "" }`}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `w-fit transition duration-300 hover:text-[#F97316] ${ isActive ? "text-white" : "" }`}>
              Contact
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Programs</h3>
          <div className="flex flex-col gap-2 text-white/70">
            <NavLink to={'/courses'} className="hover:text-[#F97316] cursor-pointer w-fit transition duration-300">Foundation (6–8)</NavLink>
            <NavLink to={'/courses'} className="hover:text-[#F97316] cursor-pointer w-fit transition duration-300">Boards (10-12)</NavLink>
            <NavLink to={'/courses'} className="hover:text-[#F97316] cursor-pointer w-fit transition duration-300">Senior Secondary (11–12)</NavLink>
            <NavLink to={'/courses'} className="hover:text-[#F97316] cursor-pointer w-fit transition duration-300">JEE Main & Advanced</NavLink>
            <NavLink to={'/courses'} className="hover:text-[#F97316] cursor-pointer w-fit transition duration-300">NEET Preparation</NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex flex-col gap-2 text-white/70">
            <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer hover:text-[#F97316] transition">
              <MapPin size={18} className="shrink-0" /> <span className="wrap-break-word">Sector 47, Sohna Road, Gurgaon, Haryana 122018</span>
            </a>

            <a href="tel:+919810012345" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer hover:text-[#F97316] transition">
              <Phone size={18} className="shrink-0" /> <span>+91 9810012345</span>
            </a>

            <a href="mailto:hello@learningedge.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer hover:text-[#F97316] transition break-all">
              <Mail size={18} className="shrink-0" /><span className="wrap-break-word">hello@learningedge.in</span>
            </a>
          </div>
        </div>
      </div>

      <hr className="text-white/10" id="site-footer" />

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-12 py-6 text-blue-200">
        <p className="text-sm">© 2026 The Learning Edge Academy. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <NavLink to={'/privacy-policy'} className="hover:text-white transition duration-300">Privacy Policy</NavLink>
          <NavLink to={'/terms-and-conditions'} className="hover:text-white transition duration-300">Terms & Conditions</NavLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer;