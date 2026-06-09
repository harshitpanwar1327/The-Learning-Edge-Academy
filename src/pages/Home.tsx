import { ArrowRight, Sparkles, Users, Trophy, Target, FileCheck, MessageSquare, BarChart3, Clock, BookOpen, GraduationCap, Calculator, FlaskConical, Stethoscope, Microscope } from "lucide-react"
import { NavLink } from "react-router-dom"
import LandingImg from "../assets/LandingImg.jpg"
import { lazy } from "react"
import * as TopperIcons from '../assets/toppers'
import * as TeacherIcons from '../assets/teachers'
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"

const StudentCard = lazy(()=>import("../components/StudentCard"));
const Review = lazy(()=>import("../section/Review"));
const Faculty = lazy(()=>import("../section/Faculty"));

const courses = [
  { icon: BookOpen, title: "Classes 6–8 Foundation", desc: "Build strong concepts in Math & Science with Olympiad-level training.", tag: "Foundation" },
  { icon: GraduationCap, title: "Classes 9–10 Boards", desc: "CBSE board mastery with NTSE foundation and weekly assessments.", tag: "Boards" },
  { icon: Calculator, title: "Classes 11–12 Senior Secondary", desc: "PCM, PCB & Commerce streams aligned with competitive exams.", tag: "Sr. Sec" },
  { icon: FlaskConical, title: "JEE Preparation", desc: "JEE Main & Advanced. Concept clarity, DPPs, mock test series.", tag: "Engineering" },
  { icon: Stethoscope, title: "NEET Preparation", desc: "Biology mastery, NCERT-focused learning and rigorous test series.", tag: "Medical" },
  { icon: Microscope, title: "Olympiad & Scholarships", desc: "Specialized prep for NSO, IMO, KVPY and merit scholarships.", tag: "Honours" },
];

const whyUs = [
  { icon: Users, title: "Experienced Faculty", desc: "Mentors from top coaching institutes with 15+ yrs experience." },
  { icon: Target, title: "Personalized Attention", desc: "Small batches of 18–22 students for one-on-one mentorship." },
  { icon: FileCheck, title: "Weekly Tests", desc: "Continuous assessment with detailed performance analytics." },
  { icon: MessageSquare, title: "Doubt Sessions", desc: "Daily doubt-clearing windows so no question goes unanswered." },
  { icon: BarChart3, title: "Performance Tracking", desc: "Granular reports on accuracy, time and topic mastery." },
  { icon: Clock, title: "Parent Reports", desc: "Monthly parent-teacher interactions and progress dashboards." },
];

const results = [
  {
    name: "Manya",
    grade: "Class 12th",
    subjects: [
      { name: "PCM", marks: "98%" },
      { name: "JEE-Mains", marks: "99.96%ile" }
    ],
    photo: TopperIcons.Manya,
  },
  {
    name: "Mrridul",
    grade: "Class 12th",
    subjects: [
      { name: "PCM", marks: "97.6%" },
      { name: "JEE-Mains", marks: "98.6%ile" },
    ],
    photo: TopperIcons.Mrridul,
  },
  {
    name: "Saksham",
    grade: "Class 12th",
    subjects: [
      { name: "PCM", marks: "97%" },
      { name: "JEE-Mains", marks: "99.8%ile" },
    ],
    photo: TopperIcons.Saksham,
  }
];

const faculty = [
  { name: "Ashish Sir", img: TeacherIcons.Faculty1, subject: "Maths", exp: "27+ years (Ex-faculty of Narayana, and DAV East of Kailash)", qual: "M.Sc, PGT" },
  { name: "Dr. Nishchal Khanna", img: TeacherIcons.Faculty2, subject: "Physics", exp: "22+ years ( FIITJEE , Narayana, HOD of Allen, Kota)", qual: "M.Sc, PHD" },
  { name: "Vicky Kumar", img: TeacherIcons.Faculty3, subject: "Chemistry", exp: "9+ years (Ex-faculty Aakash)", qual: "M.Sc, PGT" },
  { name: "Mr. Sanjay Kumar", img: TeacherIcons.Faculty4, subject: "Chemistry", exp: "25+ years (Ex-faculty of VMC)", qual: "M.Sc, PGT" },
  { name: "Anuradha Agarwal", img: TeacherIcons.Faculty5, subject: "Biology", exp: "18+ years", qual: "M.Sc, B.Ed." }
];

const reviews = [
  { review: "The teachers are very supportive and explains concept clearly. The learning environment is also great", name: "Gudiya Singh", role: "Student" },
  { review: "The teachers are highly knowledgelable and explain concepts of Maths and Science in a very clear and simple way. My child has shown great improvement in understanding and confidence after joining.", name: "Shveta Bansal", role: "Parent" },
  { review: "I have been studying at this coaching institute for one year and It has been a great experince. I have improved a lot in my studies ....Highly recommended.", name: "Vikas Rana", role: "Student" }
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Best Coaching Institute in Gurugram for JEE, NEET & CBSE | The Learning Edges Academy</title>
        <meta name="description" content="The Learning Edges Academy is a leading coaching institute in Gurugram offering CBSE coaching for Classes 6-12, IIT JEE, NEET, Olympiads and board exam preparation with expert faculty and personalized mentorship." />
        <meta name="keywords" content="best coaching institute in Gurugram, JEE coaching Gurugram, NEET coaching Gurugram, CBSE tuition Gurgaon, IIT JEE classes Gurgaon, NEET preparation institute, coaching for class 11 and 12 Gurgaon, Olympiad coaching Gurgaon" />
        <link rel="canonical" href="https://thelearningedges.in/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Best Coaching Institute in Gurugram | The Learning Edges Academy" />
        <meta property="og:description" content="Join Gurugram's trusted coaching institute for JEE, NEET, CBSE Boards and Olympiad preparation." />
        <meta property="og:url" content="https://thelearningedges.in/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Learning Edges Academy" />
        <meta name="twitter:description" content="Best coaching institute in Gurugram for JEE, NEET & CBSE preparation." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "The Learning Edges Academy",
            url: "https://thelearningedges.in",
            logo: "https://thelearningedges.in/logo.png",
            description: "Coaching institute in Gurugram for CBSE, IIT JEE, NEET and Olympiad preparation.",
            telephone: "+91 9911115947",
            address: {
              "@type": "PostalAddress",
              streetAddress: "SCF 26, Basement, Huda Market, Urban Estate, Sector 4",
              addressLocality: "Gurugram",
              addressRegion: "Haryana",
              postalCode: "122001",
              addressCountry: "IN"
            },
            areaServed: "Gurugram"
          })}
        </script>
      </Helmet>

      <section className="mt-15 relative overflow-hidden bg-[linear-gradient(180deg,oklch(0.99_0.01_260),oklch(0.96_0.025_262))] grid lg:grid-cols-2 gap-16 py-12 lg:py-24 px-4 lg:px-16">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-[#1B1F66]">
            <Sparkles className="h-3.5 w-3.5 text-[#F0532B]" />
            Admissions Open · 2026 Batch
          </div>

          <h1 className="max-w-175 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-2px] text-[#1B1F66]">
            Best Coaching Institute in Gurugram for{" "}
            <span className="bg-[linear-gradient(135deg,oklch(0.28_0.12_262),oklch(0.7_0.18_50))] bg-clip-text text-transparent">
              CBSE, JEE & NEET Preparation
            </span>
          </h1>
          <p className="max-w-155 text-lg text-gray-500">The Learning Edges Academy offers expert coaching for Classes 6–12, IIT JEE, NEET, Olympiads and CBSE board exams in Gurugram with experienced faculty and personalized mentorship.</p>

          <div className="my-4 flex flex-wrap gap-4">
            <NavLink to="/courses" className="flex items-center gap-2 font-medium text-sm text-white py-4 px-8 rounded-xl bg-[#1B1F66] border border-transparent hover:opacity-90 transition duration-300">
              Explore Courses <ArrowRight className="h-4 w-4" />
            </NavLink>
            <NavLink to="/contact" className="font-medium text-sm text-[#1B1F66] py-4 px-8 rounded-xl bg-white border border-gray-200 hover:bg-transparent hover:border-[#1B1F66] transition duration-300">
              Book Free Demo Class
            </NavLink>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              ["200+", "Students"],
              ["100%", "Success"],
              ["5+", "Faculty"],
            ].map(([number, label]) => (
              <div key={label}>
                <p className="text-3xl font-bold text-[#1B1F66]">{number}</p>
                <p className="text-xs uppercase text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative self-start md:p-8 lg:p-0">
          <img src={LandingImg} alt="Students studying for IIT JEE and NEET at The Learning Edges Academy in Gurugram" className="w-full object-cover rounded-4xl border border-white shadow-2xl"/>

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden lg:block absolute -left-8 top-15 rounded-2xl border border-gray-200 bg-white/40 p-4 shadow-xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <p className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,oklch(0.74_0.17_55),oklch(0.65_0.2_35))] text-white">
                <Trophy className="h-5 w-5" />
              </p>
              <div>
                <p className="text-sm font-bold text-[#1B1F66]">AIR 287</p>
                <p className="text-xs text-gray-500">JEE Advanced 2024</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden lg:block absolute -right-8 bottom-15 rounded-2xl border border-gray-200 bg-white/40 p-4 shadow-xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <p className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1B1F66] text-white">
                <Users className="h-5 w-5" />
              </p>
              <div>
                <p className="text-sm font-bold text-[#1B1F66]">98.4%</p>
                <p className="text-xs text-gray-500">Boards Topper</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="flex flex-col items-center gap-8 py-12 lg:py-24 px-4 lg:px-16">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase text-[#F0532B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F0532B]" /> Programs
          </div>
          <h2 className="text-2xl md:text-5xl text-[#1B1F66] text-center font-semibold">Courses Designed for Excellence</h2>
          <p className="text-lg text-gray-500">Structured learning paths for every academic stage — from concept building to competitive mastery.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div key={c.title} className="group flex flex-col gap-4 rounded-3xl p-6 border border-gray-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl transition duration-300">
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-blue-50 text-[#1B1F66] group-hover:bg-[linear-gradient(135deg,oklch(0.74_0.17_55),oklch(0.65_0.2_35))] group-hover:text-white transition duration-300">
                  <c.icon className="h-7 w-7" />
                </div>
                <span className="rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase text-[#F0532B]">{c.tag}</span>
              </div>

              <h3 className="text-lg font-bold text-[#1B1F66]">{c.title}</h3>
              <p className="text-sm text-gray-500">{c.desc}</p>

              <NavLink to="/courses" className="flex items-center gap-1 text-sm font-semibold text-[#1B1F66] transition hover:text-[#F0532B]">
                Learn more <ArrowRight className="h-4 w-4" />
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="flex flex-col items-center gap-8 py-12 lg:py-24 px-4 lg:px-16 bg-blue-50">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase text-[#F0532B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F0532B]" /> Why Choose Us
          </div>
          <h2 className="text-2xl md:text-5xl text-[#1B1F66] text-center font-semibold">The Learning Edges Difference</h2>
          <p className="text-lg text-gray-500">Six pillars that make us Gurgaon's most trusted coaching institute.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((w) => (
            <div key={w.title} className="group flex gap-4 rounded-3xl p-6 border border-gray-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-[linear-gradient(135deg,oklch(0.28_0.12_262),oklch(0.7_0.18_50))] flex items-center justify-center shrink-0">
                <w.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl text-[#1B1F66] font-semibold">{w.title}</h4>
                <p className="text-gray-500">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Results */}
      <section className="flex flex-col items-center gap-8 py-12 lg:py-24 px-4 lg:px-16">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase text-[#F0532B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F0532B]" /> Our Results
          </div>
          <h2 className="text-2xl md:text-5xl text-[#1B1F66] text-center font-semibold">Stories of Success</h2>
          <p className="text-lg text-gray-500">Real students. Real outcomes. Every year, our students top boards and crack the toughest exams.</p>
        </div>

        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((topper)=>(
            <StudentCard {...topper} key={topper.name} />
          ))}
        </div>

        <NavLink to="/results" className="flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium bg-[#1B1F66] text-white shadow-sm hover:bg-[#1B1F66]/90 hover:scale-102 transition duration-300">
          View All Results <ArrowRight className="h-4 w-4" />
        </NavLink>
      </section>

      <Faculty badge="Our Mentors" heading="Learn From the Best" description="Faculty drawn from IITs, AIIMS and top universities — passionate teachers first." faculty={faculty} />

      <Review reviews={reviews} />

      {/* CTA Section */}
      <section className="flex flex-col gap-8 py-12 lg:py-24 px-4 lg:px-16 bg-blue-50">
        <div className="relative flex flex-col items-center gap-4 overflow-hidden rounded-3xl bg-[linear-gradient(135deg,oklch(0.28_0.12_262)_0%,oklch(0.35_0.14_270)_50%,oklch(0.45_0.16_280)_100%)] p-10 md:p-16 text-center text-white shadow-xl">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold z-1">Start Your Success Journey Today</h2>
          <p className="text-lg opacity-80 z-1">Join 200+ students who chose The Learning Edges for their academic transformation.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <NavLink to="/courses" className="font-medium text-sm py-4 px-8 rounded-xl border border-transparent bg-[linear-gradient(135deg,oklch(0.74_0.17_55),oklch(0.65_0.2_35))] shadow-[0_12px_30px_-10px_oklch(0.7_0.18_50/0.45)] text-white hover:scale-105 transition duration-300">Join Now</NavLink>
            <NavLink to="/contact" className="font-medium text-sm py-4 px-8 rounded-xl bg-white/10 backdrop-blur-2xl border border-gray-200 hover:bg-white hover:text-[#1B1F66] transition duration-300">Talk to Counselor</NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home