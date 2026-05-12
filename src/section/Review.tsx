import { Quote, Star } from "lucide-react";

interface ReviewItems {
  review: string;
  name: string;
  role: string;
}

interface ReviewProps {
  reviews: ReviewItems[]
}

const Review: React.FC<ReviewProps> = ({ reviews }) => {
  return (
    <section className="flex flex-col gap-8 py-12 lg:py-24 px-4 lg:px-16">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase text-[#F0532B]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#F0532B]" /> Parent Voices
        </div>
        <h2 className="text-2xl md:text-5xl text-[#1B1F66] text-center font-semibold">Trusted by Parents</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <div key={i} className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-xl transition duration-300">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-orange-100 text-[#F0532B]">
              <Quote className="h-6 w-6" />
            </div>
            <p className="text-gray-500">"{review.review}"</p>
            <div className="flex items-center gap-1 text-[#F0532B]">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-current"/>
              ))}
            </div>
            <div>
              <h4 className="font-semibold text-[#1B1F66]">{review.name}</h4>
              <p className="text-sm text-gray-500">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Review