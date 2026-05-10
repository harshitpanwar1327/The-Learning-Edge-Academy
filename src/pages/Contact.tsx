import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import {FacebookRounded, Instagram, YouTube} from "@mui/icons-material"
import FAQ from "../section/Faq";
import { lazy } from "react"

const Hero = lazy(()=>import("../section/Hero"));

const cards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [
      "Sector 47, Sohna Road",
      "Gurgaon, Haryana 122018",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [
      "+91 98100 12345",
      "+91 98100 67890",
    ],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [
      "hello@learningedge.in",
      "admissions@learningedge.in",
    ],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: [
      "Mon–Sat: 8 AM – 8 PM",
      "Sun: 10 AM – 4 PM (admissions)",
    ],
  },
]

const faqs = [
  { q: "How do I book a free demo class?", a: "Fill the form on this page or call us. Our counselor will schedule the demo within 24 hours." },
  { q: "Do you offer online classes?", a: "Yes. Most programs are available in offline, online and hybrid formats." },
  { q: "What are your office timings?", a: "Mon–Sat: 8 AM – 8 PM. Sundays: 10 AM – 4 PM (admissions only)." },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });

  return (
    <>
      <Hero badge="Contact" title="Let's Talk About Your Goals" description="Book a free demo, request a counselor callback or simply visit our Gurgaon campus — we'd love to meet you." />

      <section className="py-16">
        <div className="mx-auto grid max-w-350 gap-8 px-6 lg:grid-cols-[1.2fr_1fr] xl:px-10">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl md:p-10">
            <h2 className="text-3xl font-bold tracking-[-1px] text-[#162B6F]">Book Your Free Demo Class</h2>
            <p className="mt-2 text-[15px] text-gray-500">Fill the form — our team responds within 24 hours.</p>
            <form className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-[#162B6F]">Full Name *</label>
                <input id="name" required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value,})} placeholder="Your name" className="mt-2 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition-all duration-300 focus:border-[#162B6F] focus:ring-4 focus:ring-[#162B6F]/10"/>
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-[#162B6F]">Phone *</label>
                <input id="phone" required type="tel" value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value,})} placeholder="+91" className="mt-2 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition-all duration-300 focus:border-[#162B6F] focus:ring-4 focus:ring-[#162B6F]/10"/>
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-[#162B6F]">Email</label>
                <input id="email" type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value,})} placeholder="you@example.com" className="mt-2 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition-all duration-300 focus:border-[#162B6F] focus:ring-4 focus:ring-[#162B6F]/10"/>
              </div>
              <div>
                <label htmlFor="course" className="text-sm font-medium text-[#162B6F]">Interested Program</label>
                <select id="course" value={form.course} onChange={(e)=>setForm({...form, course: e.target.value,})} className="mt-2 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition-all duration-300 focus:border-[#162B6F] focus:ring-4 focus:ring-[#162B6F]/10">
                  <option value="">Select a program</option>
                  <option>Foundation (6–8)</option>
                  <option>Boards (9–10)</option>
                  <option>Senior Secondary (11–12)</option>
                  <option>JEE Preparation</option>
                  <option>NEET Preparation</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-[#162B6F]">Message</label>
                <textarea id="message" rows={5} value={form.message} onChange={(e)=>setForm({...form, message: e.target.value,})} placeholder="Tell us about your child's grade and goals..." className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#162B6F] focus:ring-4 focus:ring-[#162B6F]/10"/>
              </div>

              <div className="flex flex-wrap gap-4 sm:col-span-2">
                <button type="submit" className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-xl bg-linear-to-r from-[#F59E0B] to-[#F97316] px-7 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  Request Free Demo
                </button>

                <a href="https://wa.me/919810012345" target="_blank" rel="noreferrer">
                  <button type="button" className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#162B6F] bg-white px-6 text-sm font-medium text-[#162B6F] transition-all duration-300 hover:bg-[#EEF2FF]">
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </button>
                </a>
              </div>
            </form>
          </div>

          <div className="space-y-4">
            {cards.map((b) => (
              <div key={b.title} className="flex gap-4 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#162B6F] to-[#F97316] text-white">
                  <b.icon className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="text-[18px] font-semibold text-[#162B6F]">{b.title}</h4>
                  <div className="mt-2 space-y-1">
                    {b.lines.map((l) => (
                      <div key={l} className="text-[15px] text-gray-600">
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              {[FacebookRounded, Instagram, YouTube].map((Icon, i) => (
                <a key={i} href="#" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#162B6F] text-white transition-all duration-300. hover:bg-orange-500">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="mx-auto max-w-350 px-6 xl:px-10">
          <div className="overflow-hidden rounded-[36px] border border-gray-200 bg-white shadow-xl">
            <iframe title="The Learning Edge Academy Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.732!2d77.0421!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zR3VyZ2Fvbg!5e0!3m2!1sen!2sin!4v1700000000000" width="100%" height="420" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border-0"/>
          </div>
        </div>
      </section>

      <FAQ heading="Programs" subHeading="Quick Answers" faqs={faqs} />
    </>
  )
}

export default Contact