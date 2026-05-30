import { lazy } from "react";
import { BookOpen, GraduationCap, Calculator, Beaker, Stethoscope, Check, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Element } from "react-scroll";

const Hero = lazy(()=>import("../section/Hero"));
const FAQ = lazy(()=>import("../section/FAQ"));

const programs = [
  {
    icon: BookOpen, color: "from-sky-400 to-sky-600", tag: "Foundation",
    title: "Foundation Program (6–8)",
    desc: "Concept-first learning that lights the spark of curiosity early.",
    subjects: ["Math", "Science", "Social Science", "English"],
    features: ["Concept building", "Olympiad preparation (NSO/IMO)", "Science & Math focus", "Activity-based learning"]
  },
  {
    icon: GraduationCap, color: "from-indigo-500 to-purple-600", tag: "Boards",
    title: "Board Preparation (9–10)",
    desc: "Master CBSE with NTSE foundation and exam strategy.",
    subjects: ["Math", "Science", "Social Science", "English"],
    features: ["CBSE preparation", "NTSE foundation", "Regular weekly tests", "Doubt clearing sessions"]
  },
  {
    icon: Calculator, color: "from-red-400 to-indigo-700", tag: "Sr. Sec",
    title: "Senior Secondary (11–12)",
    desc: "Streams aligned with competitive exam aspirations.",
    subjects: ["PCM", "PCB"],
    features: ["Stream-specialized teaching", "Board + competitive integration", "Advanced problem solving", "Career counseling"]
  },
  {
    icon: Beaker, color: "from-orange-500 to-rose-500", tag: "Engineering",
    title: "JEE Preparation",
    desc: "Crack JEE Main & Advanced with structured rigour.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    features: ["JEE Main + Advanced", "Daily Practice Problems", "All-India mock test series", "Previous year analysis"]
  },
  {
    icon: Stethoscope, color: "from-emerald-500 to-teal-600", tag: "Medical",
    title: "NEET Preparation",
    desc: "Built for the medical aspirant — depth, clarity, discipline.",
    subjects: ["Physics", "Chemistry", "Biology"],
    features: ["NCERT-focused mastery", "Biology specialization", "Bi-weekly test series", "NEET pattern revision"]
  },
];

const faqs = [
  {
    q: "Do you provide coaching for IIT JEE Main and Advanced?",
    a: "Yes, we provide structured coaching for IIT JEE Main and Advanced with concept-focused teaching, mock test series, doubt-solving sessions and previous year question analysis."
  },
  {
    q: "Is NEET coaching available for Class 11 and 12 students?",
    a: "Yes, our NEET coaching program is designed for Class 11 and 12 students with NCERT-focused preparation, Biology specialization and regular medical entrance test practice."
  },
  {
    q: "Do you provide coaching for CBSE board exams in Gurugram?",
    a: "Yes, we provide CBSE-focused coaching for Classes 9-12 with regular tests, revision sessions, concept clarity and exam preparation strategies."
  },
  {
    q: "Are study materials and test series included in the courses?",
    a: "Yes, all courses include printed study materials, DPPs, mock tests, revision sheets and performance analysis for students."
  },
  {
    q: "How are batches structured at The Learning Edge Academy?",
    a: "We maintain small batch sizes to ensure personalized attention, better interaction with faculty and focused academic mentoring for every student."
  },
  {
    q: "Do you offer free demo classes for NEET and JEE coaching?",
    a: "Yes, students can attend a free demo class before enrollment to experience our teaching methodology and classroom environment."
  },
  {
    q: "Why choose The Learning Edge Academy for coaching in Gurugram?",
    a: "The Learning Edge Academy is known for experienced faculty, personalized mentorship, structured test series, concept-based teaching and result-oriented preparation for board and competitive exams."
  }
];

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Coaching Courses in Gurugram | NEET, JEE & Classes 6-12</title>
        <meta name="description" content="Explore coaching courses at The Learning Edge Academy in Gurugram including NEET, IIT JEE, CBSE Classes 6-12, foundation programs and board preparation." />
        <meta name="keywords" content="NEET coaching Gurugram, JEE coaching Gurgaon, CBSE coaching classes, class 11 12 tuition, foundation coaching, IIT JEE preparation, best coaching institute in Gurugram" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.thelearningedgeas.in/courses" />
        <meta property="og:title" content="Courses | The Learning Edge Academy Gurugram" />
        <meta property="og:description" content="Structured coaching programs for Classes 6-12, NEET and IIT JEE aspirants in Gurugram." />
        <meta property="og:url" content="https://www.thelearningedges.in/courses" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: programs.map((program, index) => ({
              "@type": "Course",
              position: index + 1,
              name: program.title,
              description: program.desc,
              provider: {
                "@type": "EducationalOrganization",
                name: "The Learning Edge Academy",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Gurugram",
                  addressRegion: "Haryana",
                  addressCountry: "IN"
                }
              }
            }))
          })}
        </script>
      </Helmet>

      <Hero badge="Courses" title="Coaching Courses in Gurugram for NEET, JEE & Classes 6-12" description="Explore expert coaching programs for school students and competitive exams including NEET, IIT JEE, CBSE and foundation preparation." />

      <Element name='courses' className="flex flex-col gap-8 py-12 lg:py-24 px-4 lg:px-16">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase text-[#F0532B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F0532B]" /> Programs
          </div>
          <h2 className="text-2xl md:text-5xl text-center text-[#1B1F66] font-semibold tracking-tight">Choose Your Learning Path</h2>
          <p className="text-lg text-gray-500">Five focused programs — each crafted to meet students exactly where they are.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {programs.map((p) => (
            <div key={p.title} className="group relative flex flex-col overflow-hidden rounded-4xl border border-gray-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-2xl transition duration-300">
              <div className={`h-1.5 w-full bg-linear-to-r ${p.color}`}/>

              <div className="flex flex-col gap-6 p-6">
                <div className="flex items-start justify-between gap-6">
                  <div className={`h-12 w-12 flex items-center justify-center rounded-2xl bg-linear-to-br ${p.color} text-white shadow-lg group-hover:scale-110 transition duration-300`}>
                    <p.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase text-[#F0532B]">{p.tag}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-[#1B1F66]">{p.title}</h3>
                  <p className="text-gray-500">{p.desc}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-xs font-semibold uppercase text-gray-500">Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {p.subjects.map((s) => (
                      <span key={s} className="rounded-full bg-[#EEF2FF] px-4 py-2 text-xs font-medium text-[#1B1F66]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <hr className="text-gray-200" />

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase">
                    <Sparkles className="h-3 w-3 text-[#F0532B]" /> Highlights
                  </div>

                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-[#F0532B]"/>
                      <span className="text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Element>

      <FAQ faqs={faqs} />
    </>
  )
}

export default Courses