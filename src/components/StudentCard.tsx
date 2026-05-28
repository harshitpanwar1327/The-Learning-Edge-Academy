interface SubjectsData {
  name: string,
  marks: string
}

interface StudentCardProps {
  name: string,
  grade: string,
  subjects: SubjectsData[],
  photo: string
}

const StudentCard: React.FC<StudentCardProps> = ({ name, grade, subjects, photo }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] flex flex-col items-center gap-4">
      <img src={photo} alt={`${name} topper from Omega Tutorials coaching in Gurugram`} className="w-24 h-32 rounded-full object-cover border-4 border-orange-100" />
        <div className="flex flex-col gap-1 text-center">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{grade}</p>
        </div>
        <div className="w-full space-y-2">
          {subjects.map((subject) => (
            <div key={subject.name} className="flex items-center justify-between rounded-full bg-orange-100 px-4 py-2 text-xs font-medium text-[#F0532B]">
              <span>{subject.name}</span>
              <span>{subject.marks}</span>
            </div>
          ))}
        </div>
    </div>
  )
}

export default StudentCard