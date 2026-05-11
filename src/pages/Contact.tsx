import { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react"
import { lazy } from "react"
import { toast } from "react-toastify";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/Firebase";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ClipLoader from "react-spinners/ClipLoader";
import { Helmet } from "react-helmet-async";

const Hero = lazy(()=>import("../section/Hero"));
const FAQ = lazy(()=>import("../section/FAQ"));

type FormData = {
  name: string;
  phone: string;
  schoolName: string;
  interestedProgram: string;
  message: string;
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    value: "SCF 26, Basment, Huda Market, Urban Estate, Sector 4, Gurugram, Haryana 122001",
    link: "https://maps.app.goo.gl/Z4wizfWmpQhLTLbc7"
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 9911115947",
    link: "tel:+919911115947"
  },
  {
    icon: Mail,
    title: "Email",
    value: "ashishtle0105@gmail.com",
    link: "mailto:ashishtle0105@gmail.com"
  }
]

const faqs = [
  {
    q: "How can I book a free demo class at The Learning Edges Academy?",
    a: "You can book a free demo class by filling out the contact form on this page or calling our counselors directly. Our team usually responds within 24 hours."
  },
  {
    q: "Where is The Learning Edges Academy located in Gurugram?",
    a: "The Learning Edges Academy is located at SCF 26, Basement, Huda Market, Urban Estate, Sector 4, Gurugram, Haryana 122001."
  },
  {
    q: "Do you provide coaching for NEET and IIT JEE preparation?",
    a: "Yes, we provide expert coaching for NEET, IIT JEE, foundation classes, board exams and Classes 6–12 with experienced faculty and structured study programs."
  },
  {
    q: "Which classes do you provide coaching for?",
    a: "We provide coaching for students from Classes 6 to 12 including CBSE preparation, foundation courses, NEET and IIT JEE preparation."
  },
  {
    q: "How can parents contact the institute for admission inquiries?",
    a: "Parents can contact us through the website contact form, phone call, WhatsApp or by visiting our Gurugram campus directly."
  },
  {
    q: "Do you provide personalized doubt support for students?",
    a: "Yes, we provide dedicated doubt-solving sessions, mentorship support and regular performance tracking for every student."
  },
  {
    q: "Is there a counseling session before admission?",
    a: "Yes, we provide academic counseling sessions to understand the student’s goals and recommend the best program accordingly."
  },
  {
    q: "Why choose The Learning Edges Academy in Gurugram?",
    a: "The Learning Edges Academy focuses on concept clarity, experienced faculty, personalized attention, regular tests and result-oriented preparation for school and competitive exams."
  }
];

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          email: user.email,
          name: data.name,
          phone: data.phone,
          school: data.schoolName || "Not provided",
          interestedProgram: data.interestedProgram || "Not provided",
          message: data.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      toast.success("Inquiry sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send inquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact The Learning Edges Academy | Best Coaching Institute in Gurugram</title>
        <meta name="description" content="Contact The Learning Edges Academy in Gurugram for NEET, JEE and Class 6-12 coaching. Book a free demo class, visit our institute or speak with our counselors today." />
        <meta name="keywords" content="contact coaching institute Gurugram, NEET coaching Gurugram, JEE coaching Gurgaon, tuition classes Gurugram, free demo coaching class" />
        <link rel="canonical" href="https://thelearningedges.in/contact" />
        <meta property="og:title" content="Contact The Learning Edges Academy" />
        <meta property="og:description" content="Book your free demo class for NEET, JEE and school coaching in Gurugram." />
        <meta property="og:url" content="https://thelearningedges.in/contact" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "The Learning Edges Academy",
            url: "https://thelearningedges.in",
            telephone: "+91 9911115947",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "SCF 26, Basement, Huda Market, Urban Estate, Sector 4",
              addressLocality: "Gurugram",
              addressRegion: "Haryana",
              postalCode: "122001",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "28.476057",
              longitude: "76.9993446",
            },
            openingHours: [
              "Mo-Sa 15:30-20:30",
              "Su 09:00-12:30"
            ]
          })}
        </script>
      </Helmet>

      <Hero badge="Contact" title="Contact The Learning Edges Academy in Gurugram" description="Book a free demo class for NEET, JEE and Classes 6-12 coaching in Gurugram. Visit our campus or talk to our academic counselors today." />

      <section className="flex flex-col lg:flex-row gap-8 py-12 lg:py-24 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-3/5 flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold">Book Your Free Demo Class</h2>
            <p className="text-sm text-gray-500">Fill the form — our team responds within 24 hours.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-xs text-gray-500">Full Name <span className="text-red-500">*</span></label>
              <input type="text" id="name" placeholder="e.g., Harshit Panwar" className="rounded-xl px-3 py-2 bg-gray-50 border border-gray-200 outline-none"
                {...register("name", {
                  required: "Full name is required",
                })}
              />
              {errors.name && (<p className="text-xs text-red-500">{errors.name.message}</p>)}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-xs text-gray-500">Phone Number <span className="text-red-500">*</span></label>
              <input id="phone" className="rounded-xl px-3 py-2 bg-gray-50 border border-gray-200 outline-none" type="tel" inputMode="numeric" maxLength={13} placeholder="+91 XXXXX XXXXX"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^(\+91[-\s]?)?[6-9]\d{9}$/,
                    message: "Enter a valid phone number"
                  }
                })}
              />
              {errors.phone && (<p className="text-red-500 text-xs">{errors.phone.message}</p>)}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="school" className="text-xs text-gray-500">School Name</label>
              <input id="school" className="rounded-xl px-3 py-2 bg-gray-50 border border-gray-200 outline-none" type="text" placeholder="e.g., Kendriya Vidyalaya"
                {...register("schoolName")}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="class" className="text-xs text-gray-500">Class</label>
              <select id="class" className="rounded-xl px-3 py-2 bg-gray-50 border border-gray-200 outline-none"
                {...register("interestedProgram")}
              >
                <option value="">Select Class</option>
                <option value="Foundation (6-8)">Foundation (6-8)</option>
                <option value="Boards (9-10)">Boards (9-10)</option>
                <option value="Senior Secondary (11-12)">Senior Secondary (11-12)</option>
                <option value="Jee Preparation">Jee Preparation</option>
                <option value="Neet Preparation">Neet Preparation</option>
              </select>
            </div>
            <div className="md:col-span-2 flex flex-col gap-1">
              <label htmlFor="message" className="text-xs text-gray-500">Message <span className="text-red-500">*</span></label>
              <textarea id="message" rows={4} className="rounded-xl px-3 py-2 bg-gray-50 border border-gray-200 outline-none" placeholder="Tell us about your requirements..."
                {...register("message", {
                  required: "Message is required",
                })}
              />
              {errors.message && (<p className="text-xs text-red-500">{errors.message.message}</p>)}
            </div>
            <button type="submit" className="md:col-span-2 w-full bg-[linear-gradient(135deg,oklch(0.74_0.17_55),oklch(0.65_0.2_35))] text-white font-medium flex items-center justify-center gap-2 p-3 rounded-xl hover:scale-102 transition duration-300" aria-label="Send Message">
              {loading ? <ClipLoader size={18} color="#ffffff" />: 'Request Free Demo'}
            </button>
          </div>
        </form>

        <div className="w-full lg:w-2/5 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-2xl border border-gray-200 shadow-md">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-90 transition duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[linear-gradient(135deg,oklch(0.28_0.12_262),oklch(0.7_0.18_50))] flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#1B1F66] font-semibold wrap-break-word">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.value}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14028.46347341674!2d76.9993446!3d28.476057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d175ff3a23c5f%3A0x835dc2ccd1401d2!2sThe%20Learning%20EDGE%20Academy!5e0!3m2!1sen!2sin!4v1778450522593!5m2!1sen!2sin"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          />

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md flex flex-col gap-4">
            <h3 className="font-semibold">Coaching Hours</h3>
            <div className="flex items-center justify-between gap-4 text-sm text-[hsl(215_15%_50%)]">
              <span>Monday – Sunday</span>
              <span className="text-black">9:00 AM – 9:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
    </>
  )
}

export default Contact