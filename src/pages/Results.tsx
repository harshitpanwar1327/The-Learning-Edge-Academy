import { lazy } from "react"
import * as TopperIcons from '../assets/toppers'
import { Helmet } from "react-helmet-async"

const Hero = lazy(()=>import("../section/Hero"));
const Review = lazy(()=>import("../section/Review"));
const StudentCard = lazy(()=>import("../components/StudentCard"));

const stats = [
  { value: 5000, suffix: "+", label: "Students Scored 90%+" },
  { value: 100, suffix: "%", label: "Average Pass Rate" },
  { value: 50, suffix: "+", label: "Board Exam Toppers" },
  { value: 10, suffix: "+", label: "Years of Excellence" }
]

const toppers = [
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
  },
  {
    name: "Arvin",
    grade: "Class 12th",
    subjects: [
      { name: "PCM", marks: "97%" },
      { name: "JEE-Mains", marks: "98.7%ile" },
    ],
    photo: TopperIcons.Arvin,
  },
  {
    name: "Rabani Marwah",
    grade: "Class 10th",
    subjects: [
      { name: "Math", marks: "100%" },
      { name: "Science", marks: "99%" },
    ],
    photo: TopperIcons.Rabani,
  },
  {
    name: "Aditya",
    grade: "Class 10th",
    subjects: [
      { name: "Math", marks: "100%" },
      { name: "Science", marks: "96%" },
    ],
    photo: TopperIcons.Aditya,
  },
  {
    name: "Vidhi",
    grade: "Class 10th",
    subjects: [
      { name: "Math", marks: "99%" },
      { name: "Science", marks: "99%" },
    ],
    photo: TopperIcons.Vidhi,
  },
];

const reviews = [
  { review: "I would highly recommend The Learning Edge Academy. Their way of teaching is amazing. They are very supportive, motivating, and always ready to solve doubts.", name: "Jagriti Madaan", role: "Student" },
  { review: "One of the best coaching for IIT-JEE. Ashish sir Maths is excellent-simple, clear and very effective. Highly recommended.", name: "Rabia Akhtar", role: "Student" },
  { review: "I have recently joined the academy and i have found myself imroving my maths already. ....Highly recommended", name: "Ashima Sharma", role: "Student" }
];

const Results = () => {
  return (
    <>
      <Helmet>
        <title>Student Results & Toppers | The Learning Edges Academy Gurugram</title>
        <meta name="description" content="Explore JEE, NEET and CBSE toppers from The Learning Edges Academy in Gurugram. Discover student achievements, board exam results and success stories." />
        <meta name="keywords" content="JEE toppers Gurugram, NEET results Gurgaon, CBSE toppers, coaching institute results, IIT JEE coaching results, NEET coaching results" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thelearningedges.in/results" />
        <meta property="og:title" content="Results & Toppers | The Learning Edges Academy" />
        <meta property="og:description" content="See student achievements, JEE & NEET results, board toppers and success stories from The Learning Edges Academy in Gurugram." />
        <meta property="og:url" content="https://thelearningedges.in/results" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "The Learning Edges Academy",
            url: "https://thelearningedges.in",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Gurugram",
              addressRegion: "Haryana",
              addressCountry: "IN"
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "500"
            }
          })}
        </script>
      </Helmet>

      <Hero badge="Results" title="JEE, NEET & Board Exam Results in Gurugram" description="Explore top results, student achievements and success stories from The Learning Edges Academy for IIT JEE, NEET and CBSE board examinations." />

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-12 lg:py-24 px-4 lg:px-16">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col gap-3 rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm hover:-translate-y-1 hover:shadow-2xl transition duration-300">
            <p className="bg-[linear-gradient(135deg,oklch(0.28_0.12_262),oklch(0.7_0.18_50))] bg-clip-text text-transparent text-4xl font-bold">{stat.value}{stat.suffix}</p>
            <p className="text-sm uppercase text-gray-500">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-8 py-12 lg:py-24 px-4 lg:px-16 bg-blue-50">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase text-[#F0532B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F0532B]" /> Toppers
          </div>
          <h2 className="text-2xl md:text-5xl text-[#1B1F66] text-center font-semibold">Top Performers from Our Coaching Classes in Gurugram</h2>
          <p className="text-lg text-gray-500">A glimpse of the students who turned ambition into achievement.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toppers.map((topper)=>(
            <StudentCard {...topper} />
          ))}
        </div>
      </section>

      <Review reviews={reviews} />
    </>
  )
}

export default Results