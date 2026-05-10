import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  heading: string;
  subHeading: string;
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ heading, subHeading, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-8 py-12 lg:py-24 px-4 lg:px-16">
      <div className="flex flex-col items-center gap-4">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-orange-500">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            {heading}
        </div>
        <h2 className="text-2xl md:text-5xl text-center font-semibold tracking-tight leading-[1.02] max-w-4xl">{subHeading}</h2>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 p-4 rounded-2xl cursor-pointer" onClick={() => toggleFAQ(index)}>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{faq.q}</h3>
              <ChevronDown size={18} className={`${openIndex===index ? 'rotate-180' : ''}`} />
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-y-auto"
                >
                  <div className="mt-2 text-sm text-gray-500">{faq.a}</div>
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;