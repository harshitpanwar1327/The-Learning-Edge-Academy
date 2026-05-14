import { lazy } from "react"
import * as Icons from '../assets/toppers'
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
  { name: "Rabani Marwah", img: Icons.Student1, course: "Maths 10th", score: "100%", year: "2025" },
  { name: "Aditya Agrawal", img: Icons.Student2, course: "Maths 10th", score: "100%", year: "2025" },
  { name: "Vidhi Bhardwaj", img: Icons.Student1, course: "Maths 10th", score: "99%", year: "2025" },
  { name: "Manya", img: Icons.Student2, course: "JEE-MAIN", score: "99.96%ile  AIR 2493", year: "2025" },
  { name: "Saksham", img: Icons.Student1, course: "JEE-MAIN", score: "99.8%ile  AIR 3269", year: "2025" },
  { name: "Arvin", img: Icons.Student2, course: "Physics 12th", score: "97%", year: "2025" },
  { name: "Mrridul", img: Icons.Student2, course: "Physics 12th", score: "98%", year: "2025" },
  { name: "Nakul", img: Icons.Student2, course: "JEE-MAIN", score: "99.9%ilt", year: "2025" },
  { name: "Sakshi", img: Icons.Student2, course: "JEE-MAIN", score: "97%ile", year: "2025" },
  { name: "Utkarsh", img: Icons.Student2, course: "JEE-MAIN", score: "98.2%ile", year: "2025" },
  { name: "Nimit", img: Icons.Student2, course: "Maths 10th", score: "100", year: "2025" },
  { name: "Natasha", img: Icons.Student2, course: "Maths 10th", score: "100", year: "2025" },
  { name: "Aayush", img: Icons.Student2, course: "Maths 10th", score: "99", year: "2025" },
  { name: "Riya Gupta", img: Icons.Student2, course: "Science 10th", score: "98", year: "2025" },
  { name: "Sumiya", img: Icons.Student2, course: "Maths 10th", score: "98", year: "2025" },
  { name: "Ranya", img: Icons.Student2, course: "Science 10th", score: "96", year: "2025" },
  { name: "Daksh", img: Icons.Student2, course: "Maths 10th", score: "97", year: "2025" },
  { name: "Avika", img: Icons.Student2, course: "Science 10th", score: "94", year: "2025" },
  { name: "Ujjwal", img: Icons.Student2, course: "Maths 10th", score: "91", year: "2025" },
  { name: "Sahil", img: Icons.Student2, course: "Maths 10th", score: "96", year: "2025" },
  { name: "Akanksha", img: Icons.Student2, course: "MAths 10th", score: "96", year: "2025" },
  { name: "Ara Joshi", img: Icons.Student2, course: "Maths 10th", score: "97", year: "2025" },
  { name: "Raghav", img: Icons.Student2, course: "Maths 10th", score: "95", year: "2025" },
  { name: "Akshay", img: Icons.Student2, course: "Science 10th", score: "94", year: "2025" },
  { name: "Jaya", img: Icons.Student2, course: "Maths 12th", score: "97", year: "2025" },
  { name: "Pratistha", img: Icons.Student2, course: "Maths 12th", score: "97", year: "2025" },
  { name: "Vidhi", img: Icons.Student2, course: "Maths 12th", score: "95", year: "2025" },
  { name: "Ankit", img: Icons.Student2, course: "Physics 12th", score: "91", year: "2025" },
  { name: "Aachal", img: Icons.Student2, course: "Physics 12th", score: "96", year: "2025" },
  { name: "Swati", img: Icons.Student2, course: "Maths 12th", score: "92", year: "2025" },
  { name: "Avni", img: Icons.Student2, course: "Maths 12th", score: "94", year: "2025" },
  { name: "Asmita Negi", img: Icons.Student2, course: "Maths 12th", score: "92", year: "2025" },
  { name: "Nikita", img: Icons.Student2, course: "Physics 12th", score: "89", year: "2025" },
  { name: "Dristi", img: Icons.Student2, course: "Chemistry 12th", score: "94", year: "2025" },
  { name: "Tushar", img: Icons.Student2, course: "Maths 12th", score: "93", year: "2025" },
  { name: "Nitin", img: Icons.Student2, course: "Maths 12th", score: "92", year: "2025" },
  { name: "Ashveen Sahni", img: Icons.Student2, course: "Chemistry 12th", score: "94", year: "2025" },
  { name: "Khushi", img: Icons.Student2, course: "Chemistry 12th", score: "85", year: "2025" },
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
          <h2 className="text-2xl md:text-5xl text-[#1B1F66] text-center font-semibold">Our 2024 Achievers</h2>
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