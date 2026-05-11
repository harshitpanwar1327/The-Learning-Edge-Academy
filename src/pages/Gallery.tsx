import { useState, lazy } from "react";
import g1 from "../assets/student-1.jpg";
import g2 from "../assets/student-2.jpg";
import { X } from "lucide-react";

const Hero = lazy(()=>import("../section/Hero"));

const items = [
  { src: g1, cat: "Classroom", h: "tall" },
  { src: g2, cat: "Award Ceremony" },
  { src: g1, cat: "Workshops", h: "tall" },
  { src: g2, cat: "Events" },
  { src: g1, cat: "Activities", h: "tall" },
  { src: g2, cat: "Classroom" },
  { src: g1, cat: "Classroom" },
  { src: g2, cat: "Events", h: "tall" },
  { src: g1, cat: "Workshops" },
];

const cats = ["All","Classroom","Events","Award Ceremony","Workshops","Activities"];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = active === "All" ? items : items.filter(i => i.cat === active);

  return (
    <>
      <Hero badge="Gallery" title="Moments From Our Campus" description="Classrooms, events and the everyday energy that makes The Learning Edges feel like home." />

      <section className="py-12">
        <div className="mx-auto max-w-350 px-6 xl:px-10">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {cats.map((c) => (
              <button key={c} onClick={()=>setActive(c)} className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${active === c ? "bg-[#162B6F] text-white shadow-lg" : "border border-gray-200 bg-white text-[#162B6F] hover:bg-[#EEF2FF]"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:balance]">
            {filtered.map((it, i) => (
              <button key={i} onClick={() => setLightbox(it.src)} className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[28px] shadow-xl">
                <img src={it.src} alt={it.cat} loading="lazy" className={`w-full object-cover transition-transform duration-500 group-hover:scale-102 ${it.h === "tall" ? "aspect-3/4" : "aspect-4/3"}`}/>
                <div className="absolute inset-0 flex items-end p-5 bg-linear-to-t from-[#162B6F]/80 via-[#162B6F]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-semibold text-white">
                    {it.cat}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-[#162B6F]/90 p-6 backdrop-blur-md" onClick={()=>setLightbox(null)}>
          <button className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 hover:bg-white/25" onClick={() => setLightbox(null)}>
            <X className="h-5 w-5" />
          </button>
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[90vw] rounded-[28px] shadow-2xl"/>
        </div>
      )}
    </>
  )
}

export default Gallery