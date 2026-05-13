interface FacultyData {
  name: string;
  img: string;
  subject: string;
  exp: string;
  qual: string;
}

interface FacultyProps {
  badge: string;
  heading: string;
  description?: string;
  faculty: FacultyData[];
}

const Faculty: React.FC<FacultyProps> = ({ badge, heading, description, faculty }) => {
  return (
    <section className="flex flex-col gap-8 py-12 lg:py-24 px-4 lg:px-16 bg-blue-50">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase text-[#F0532B]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F0532B]" /> {badge}
        </div>
        <h2 className="text-2xl md:text-5xl text-[#1B1F66] text-center font-semibold">{heading}</h2>
        {description &&
          <p className="text-lg text-gray-500">{description}</p>
        }
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculty.map((f) => (
          <div key={f.name} className="flex flex-col items-center gap-4 rounded-3xl p-6 border border-gray-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl transition duration-300">
            <div className="h-32 w-32 overflow-hidden rounded-full ring-4 ring-orange-200">
              <img src={f.img} alt={`${f.name} ${f.subject} faculty at The Learning Edges Academy`} loading="lazy" className="h-full w-full object-cover"/>
            </div>
            <div className="text-center">
            <h4 className="text-lg font-bold text-[#1B1F66]">{f.name}</h4>
            <p className="text-sm font-medium text-[#F0532B]">{f.subject}</p>
          </div>
          <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
            <span>{f.exp}</span>
            <span>•</span>
            <span>{f.qual}</span>
          </div>
        </div>
        ))}
      </div>
    </section>
  )
}

export default Faculty