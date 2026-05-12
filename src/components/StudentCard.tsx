import { Trophy } from "lucide-react"

interface StudentCardProps {
  name: string;
  img: string;
  course: string;
  score: string;
  year: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ name, img, course, score, year }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl transition duration-300">
      <div className="relative aspect-4/3">
        <img src={img} alt={`${name} ${course} topper from The Learning Edges Academy Gurugram`} loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-102"/>
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-linear-to-r from-[#F59E0B] to-[#F97316] px-4 py-2 text-xs font-bold text-white shadow-lg">
          <Trophy className="h-3.5 w-3.5" />{score}
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#1B1F66] shadow-sm">{year}</div>
      </div>
      <div className="p-5">
        <h4 className="text-xl font-bold text-[#1B1F66]">{name}</h4>
        <p className="text-sm text-gray-500">{course}</p>
      </div>
    </div>
  )
}

export default StudentCard