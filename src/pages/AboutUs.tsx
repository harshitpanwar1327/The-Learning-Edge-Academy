import { Eye, Heart, Lightbulb, Target, Users, Award } from "lucide-react"
import { lazy } from "react"
import * as Icons from '../assets/teachers'
import DirectorImg from '../assets/Director.jpg'
import { Helmet } from "react-helmet-async"

const Hero = lazy(()=>import("../section/Hero"));
const Faculty = lazy(()=>import("../section/Faculty"));

const vision = [
  { icon: Target, title: "Our Mission", desc: "To make excellence accessible by combining personalized mentorship with proven academic frameworks." },
  { icon: Eye, title: "Our Vision", desc: "To become India's most trusted home for ambitious learners who dream of IITs, AIIMS and beyond." },
  { icon: Heart, title: "Our Values", desc: "Integrity, empathy, discipline and the joy of learning — woven into every classroom." }
];

const methodology = [
  { icon: Lightbulb, title: "Concept First", desc: "Build deep understanding before solving." },
  { icon: Users, title: "Small Batches", desc: "18–22 students for true mentorship." },
  { icon: Target, title: "Practice & Test", desc: "DPPs and weekly tests calibrate progress." },
  { icon: Award, title: "Mentor & Reflect", desc: "1:1 reviews keep momentum compounding." }
];

const timeline = [
  { year: "2010", title: "Founded in Gurugram", desc: "Started with a single classroom and 18 students in Sector 47, Gurgaon." },
  { year: "2014", title: "First JEE Topper", desc: "Our first AIR under 1000 in JEE Advanced — a defining moment." },
  { year: "2017", title: "NEET Wing Launched", desc: "Expanded into medical entrance with a dedicated biology faculty team." },
  { year: "2020", title: "Online & Offline Coaching Expansiong", desc: "Pioneered blended online + offline classes during the pandemic." },
  { year: "2024", title: "5000+ Alumni Strong", desc: "Crossed 5000 students mentored with 95% selection rate." },
];

const faculty = [
  { name: "Ashish Sir", img: Icons.Faculty1, subject: "Maths", exp: "27+ years", qual: "M.Sc, PGT" },
  { name: "Dr. Nishchal Khanna", img: Icons.Faculty1, subject: "Physics", exp: "25+ years", qual: "M.Sc, PHD" },
  { name: "Vichy Sir", img: Icons.Faculty1, subject: "Physics", exp: "15+ years", qual: "M.Sc, PGT" },
  { name: "Mr. Sanjay Kumar", img: Icons.Faculty1, subject: "Chemistry", exp: "25+ years", qual: "M.Sc, PGT" },
  { name: "Pooja Gupta", img: Icons.Faculty1, subject: "Biology", exp: "15+ years", qual: "M.Sc, PGT" }
];

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About The Learning Edges Academy | Best Coaching Institute in Gurugram</title>
        <meta name="description" content="Learn about The Learning Edges Academy, a trusted coaching institute in Gurugram for IIT JEE, NEET and CBSE preparation with experienced faculty, personalized mentorship and over 15 years of excellence." />
        <meta name="keywords" content="about The Learning Edges Academy, coaching institute Gurugram, JEE coaching Gurgaon, NEET coaching institute Gurgaon, CBSE coaching Haryana, IIT JEE faculty Gurugram" />
        <link rel="canonical" href="https://thelearningedges.in/about" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About The Learning Edges Academy" />
        <meta property="og:description" content="15+ years of academic excellence in IIT JEE, NEET and CBSE coaching in Gurugram." />
        <meta property="og:url" content="https://thelearningedges.in/about" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "The Learning Edges Academy",
            url: "https://thelearningedges.in",
            logo: "https://thelearningedges.in/logo.png",
            description: "Leading coaching institute in Gurugram for IIT JEE, NEET, Olympiads and CBSE preparation.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "SCF 26, Basement, Huda Market, Urban Estate, Sector 4",
              addressLocality: "Gurugram",
              addressRegion: "Haryana",
              postalCode: "122001",
              addressCountry: "IN"
            },
            telephone: "+91 9911115947"
          })}
        </script>
      </Helmet>

      <Hero badge="About Us" title="About The Learning Edges Academy – Trusted Coaching Institute in Gurugram" description="The Learning Edges Academy was born from a simple belief — that personalized, rigorous mentoring can transform any motivated student into a high achiever." />

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-12 lg:py-24 px-4 lg:px-16">
        {vision.map((b) => (
          <div key={b.title} className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition duration-300">
            <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-[linear-gradient(135deg,oklch(0.28_0.12_262),oklch(0.7_0.18_50))] text-white shadow-md">
              <b.icon className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-[#1B1F66]">{b.title}</h3>
              <p className="text-gray-500">{b.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Founder's Note */}
      <section className="grid lg:grid-cols-2 gap-10 py-12 lg:py-24 px-4 lg:px-16 bg-blue-50">
        <img src={DirectorImg} alt="Ashish Shah Founder of The Learning Edges Academy Gurugram" loading="lazy" className="h-full w-full object-cover rounded-4xl shadow-2xl"/>

        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase text-[#F0532B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F0532B]" /> Founder&apos;s Note
          </div>

          <h2 className="text-2xl md:text-5xl text-[#1B1F66] font-semibold">"We don't just teach. We mentor for life."</h2>
          <p className="text-lg text-gray-500">When I started The Learning Edges in 2010, I wanted to build a place where every student felt seen — where academic ambition met personal care. Fifteen years later, that same philosophy guides every classroom, every test review, every parent meeting.</p>
          <p className="text-lg text-gray-500">If your child is ready to grow, we are ready to walk that path with them.</p>

          <div>
            <h4 className="font-bold text-[#1B1F66]">Mr. Ashish Shah</h4>
            <p className="text-sm text-gray-500">Founder & Director</p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="flex flex-col items-center gap-8 py-12 lg:py-24 px-4 lg:px-16">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase text-[#F0532B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F0532B]" /> Methodology
          </div>
          <h2 className="text-2xl md:text-5xl text-[#1B1F66] text-center font-semibold">Our Teaching Methodology for JEE, NEET & CBSE Students</h2>
          <p className="text-lg text-gray-500">A proven 4-step framework refined over 15 years and 5000+ students.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((s, i) => (
            <div key={s.title} className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition duration-300">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-orange-100 text-[#F0532B]">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-center gap-2">
                <span className="text-xs font-semibold uppercase text-[#F0532B]">Step 0{i + 1}</span>
                <h4 className="font-bold text-[#1B1F66]">{s.title}</h4>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="flex flex-col gap-8 pt-12 lg:pt-24 px-4 lg:px-16 bg-blue-50">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase text-[#F0532B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F0532B]" /> Journey
          </div>
          <h2 className="text-2xl md:text-5xl text-[#1B1F66] text-center font-semibold">Milestones That Define Us</h2>
        </div>

        <div className="mt-4 relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2" />
          {timeline.map((t, i) => (
            <div key={t.year} className={`relative md:grid md:grid-cols-2 md:gap-8 ${i%2===0 ? "" : "md:[&>*:first-child]:order-2"}`}>
              <div className={`mb-8 pl-12 md:pl-0 ${i%2===0?"md:text-right md:pr-8":"md:pl-8"}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[#F0532B] ring-4 ring-orange-200" />
                <h3 className="text-[#F0532B] font-bold text-lg">{t.year}</h3>
                <h4 className="font-bold text-[#1B1F66] text-lg">{t.title}</h4>
                <p className="text-sm text-gray-500">{t.desc}</p>
              </div>
              <div />
            </div>
          ))}
        </div>
      </section>
      
      <Faculty badge="Faculty" heading="Meet Our Expert Faculty" faculty={faculty} />
    </>
  )
}

export default AboutUs