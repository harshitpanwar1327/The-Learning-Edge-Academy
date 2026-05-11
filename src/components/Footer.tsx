import { MapPin, Phone, Mail } from "lucide-react";
import { Instagram, FacebookRounded } from "@mui/icons-material"
import { NavLink } from "react-router-dom";
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#032262] text-white flex flex-col">
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-16">
        <div className="flex flex-col gap-4 md:col-span-3 lg:col-span-2">
          <NavLink to="/" className="w-fit flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-10 h-10 rounded-xl border border-white shadow-[0_12px_30px_-10px_oklch(0.7_0.18_50/0.45)]" />
            <div>
              <h2 className="font-bold">The Learning Edges</h2>
              <p className="text-sm uppercase opacity-80">Academy · Gurgaon</p>
            </div>
          </NavLink>

          <p className="leading-relaxed opacity-80">Premier coaching institute in Gurgaon empowering students from foundation to JEE & NEET with personalized mentorship.</p>

          <div className="flex items-center gap-4 mt-2">
            <a href="https://www.facebook.com/share/17o9JXHGrS/" rel="noopener noreferrer" target="_blank" className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#F0532B] rounded-full cursor-pointer transition duration-300"><FacebookRounded /></a>
            <a href="https://www.instagram.com/thelearningedgeacademy_/" rel="noopener noreferrer" target="_blank" className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#F0532B] rounded-full cursor-pointer transition duration-300"><Instagram sx={{ fontSize: 18 }} /></a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="flex flex-col gap-2 opacity-80">
            <NavLink to="/courses" className="w-fit hover:text-[#F0532B] transition duration-300">
              Courses
            </NavLink>
            <NavLink to="/about-us" className="w-fit hover:text-[#F0532B] transition duration-300">
              About
            </NavLink>
            <NavLink to="/results" className="w-fit hover:text-[#F0532B] transition duration-300">
              Results
            </NavLink>
            <NavLink to="/gallery" className="w-fit hover:text-[#F0532B] transition duration-300">
              Gallery
            </NavLink>
            <NavLink to="/contact" className="w-fit hover:text-[#F0532B] transition duration-300">
              Contact
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Programs</h3>
          <div className="flex flex-col gap-2 opacity-80">
            <NavLink to={'/courses'} className="w-fit hover:text-[#F0532B] transition duration-300">Foundation (6–8)</NavLink>
            <NavLink to={'/courses'} className="w-fit hover:text-[#F0532B] transition duration-300">Boards (10-12)</NavLink>
            <NavLink to={'/courses'} className="w-fit hover:text-[#F0532B] transition duration-300">Senior Secondary (11–12)</NavLink>
            <NavLink to={'/courses'} className="w-fit hover:text-[#F0532B] transition duration-300">JEE Main & Advanced</NavLink>
            <NavLink to={'/courses'} className="w-fit hover:text-[#F0532B] transition duration-300">NEET Preparation</NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex flex-col gap-2 opacity-80">
            <a href="https://maps.app.goo.gl/Z4wizfWmpQhLTLbc7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer hover:text-[#F0532B] transition duration">
              <MapPin size={18} className="shrink-0" /> <span className="wrap-break-word">SCF 26, Basment, Huda Market, Urban Estate, Sector 4, Gurugram, Haryana 122001</span>
            </a>

            <span className="flex items-center gap-2 cursor-pointer hover:text-[#F0532B] transition duration break-all">
              <Phone size={18} className="shrink-0" /> <a href="tel:+919911115947">+91 9911115947</a>, <a href="tel:+919911115948">+91 9911115948</a>
            </span>

            <a href="mailto:ashishtle0105@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer hover:text-[#F0532B] transition duration break-all">
              <Mail size={18} className="shrink-0" /><span className="wrap-break-word">ashishtle0105@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <hr className="text-white/10" />

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-20 py-6 text-blue-200">
        <p className="text-sm text-center">© 2026 The Learning Edges Academy. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <NavLink to={'/privacy-policy'} className="hover:text-white transition duration-300">Privacy Policy</NavLink>
          <NavLink to={'/terms-and-conditions'} className="hover:text-white transition duration-300">Terms & Conditions</NavLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer;