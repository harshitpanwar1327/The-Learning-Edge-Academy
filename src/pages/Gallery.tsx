import { useState, lazy } from "react";
import * as Icons from '../assets/gallery'
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Hero = lazy(()=>import("../section/Hero"));

const categories = ["All", "Classroom", "Infrastructure", "Events"];

const galleryItems = [
  { src: Icons.Events1, title: "Concept-Based Teaching in Action", cat: "Classroom" },
  { src: Icons.Events2, title: "Interactive Doubt Solving Session", cat: "Classroom" },
  { src: Icons.Events1, title: "Personal Attention for Every Student", cat: "Classroom" },
  { src: Icons.Events2, title: "Focused Classroom Learning", cat: "Classroom" },
  { src: Icons.Events1, title: "Modern Classroom Environment", cat: "Infrastructure" },
  { src: Icons.Events2, title: "Comfortable Learning Spaces", cat: "Infrastructure" },
  { src: Icons.Events1, title: "Well-Equipped Study Rooms", cat: "Infrastructure" },
  { src: Icons.Events2, title: "Reception", cat: "Infrastructure" },
  { src: Icons.Events1, title: "Cyber Security Awareness", cat: "Events" },
  { src: Icons.Events2, title: "Student Engagement Activities", cat: "Events" },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = activeTab === "All" ? galleryItems : galleryItems.filter(i => i.cat === activeTab);

  return (
    <>
      <Helmet>
        <title>Gallery | The Learning Edges Academy Gurugram</title>
        <meta name="description" content="Explore classroom sessions, infrastructure, student activities and campus life at The Learning Edges Academy in Gurugram for NEET, JEE and school coaching." />
        <meta name="keywords" content="coaching institute gallery Gurugram, NEET coaching classroom, JEE coaching institute Gurgaon, classroom photos, coaching campus images" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.thelearningedges.in/gallery" />
        <meta property="og:title" content="Gallery | The Learning Edges Academy" />
        <meta property="og:description" content="See our classrooms, events and student learning environment in Gurugram." />
        <meta property="og:url" content="https://www.thelearningedges.in/gallery" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "The Learning Edges Academy Gallery",
            description: "Gallery showcasing classrooms, infrastructure and student events at The Learning Edges Academy in Gurugram.",
            url: "https://www.thelearningedges.in/gallery",
            image: galleryItems.map((item) => item.src),
          })}
        </script>
      </Helmet>

      <Hero badge="Gallery" title="Gallery of The Learning Edges Academy in Gurugram" description="Explore classrooms, infrastructure, student activities and learning experiences at The Learning Edges Academy for NEET, JEE and school coaching." />

      <section className="flex flex-col items-center gap-8 py-12 lg:py-24 px-4 lg:px-16">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button key={c} onClick={()=>setActiveTab(c)} className={`rounded-full px-4 py-2 text-sm font-medium border transition duration-300 ${activeTab === c ? "border-transparent bg-[#1B1F66] text-white" : "border-gray-200 bg-white text-[#1B1F66] hover:bg-gray-100"}`}>{c}</button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item, index) => (
              <motion.div key={index} className="group relative rounded-xl overflow-hidden shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] cursor-pointer" onClick={()=>setLightbox(item.src)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <img src={item.src} alt={`${item.title} at The Learning Edges Academy coaching institute in Gurugram`} className="w-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-linear-to-t from-[hsl(215_30%_15%)]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-white/70 text-xs">{item.cat}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-[hsl(215_30%_15%)]/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={()=>setLightbox(null)}
          >
            <X className="absolute top-6 right-6 text-white h-5 w-5 cursor-pointer hover:scale-105 transition duration-300" onClick={()=>setLightbox(null)} />
            <motion.img src={lightbox.replace("w=600&h=400", "w=1200&h=800")} alt="The Learning Edges Academy Gurugram gallery image" className="max-w-full max-h-[85vh] rounded-xl shadow-[0_12px_40px_-10px_hsl(215_85%_45%/0.18)]" onClick={(e)=>e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Gallery