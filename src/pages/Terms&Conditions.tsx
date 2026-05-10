import Hero from "../section/Hero"

const terms = [
  {
    title: "1. Acceptance of Terms",
    content:"By accessing this website or enrolling in any program offered by The Learning Edge Academy, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.",
  },
  {
    title: "2. Eligibility",
    content:"Programs are offered to students of eligible age groups (Classes 6 to 12 and competitive exam aspirants). Enrollment for minors must be authorized by a parent or legal guardian.",
  },
  {
    title: "3. Admission & Enrollment",
    content:"Admission is confirmed only upon completion of registration formalities and payment of applicable fees. The Academy reserves the right to accept or refuse admission at its discretion.",
  },
  {
    title: "4. Fees & Payments",
    content:"All fees are payable in advance as per the schedule. Fees once paid are non-transferable. Refund eligibility is governed by our Refund Policy below.",
  },
  {
    title: "5. Refund Policy",
    content:"A refund request may be made within 7 days of enrollment, subject to deduction of administrative charges and the cost of classes already attended. No refunds will be processed after this period.",
  },
  {
    title: "6. Code of Conduct",
    content:"Students are expected to attend classes regularly, behave respectfully with faculty and peers, and abide by Academy rules. Misconduct may lead to disciplinary action including suspension or dismissal without refund.",
  },
  {
    title: "7. Use of Study Material",
    content:"All study material, recorded lectures, tests and digital content provided are the intellectual property of The Learning Edge Academy. Sharing, reproducing or selling this material is strictly prohibited.",
  },
  {
    title: "8. Attendance & Performance",
    content:"While we strive to deliver excellent results, individual outcomes depend on student effort, attendance and consistency. The Academy does not guarantee specific ranks, scores or selections.",
  },
  {
    title: "9. Cancellation by Academy",
    content:"The Academy reserves the right to reschedule, modify or cancel any program, batch or class for operational reasons, with reasonable notice to enrolled students.",
  },
  {
    title: "10. Limitation of Liability",
    content:"To the fullest extent permitted by law, The Learning Edge Academy shall not be liable for any indirect, incidental or consequential damages arising from the use of our services or website.",
  },
  {
    title: "11. Governing Law",
    content:"These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts at Gurgaon, Haryana.",
  },
]

const TermsAndConditions = () => {
  return (
    <>
      <Hero badge="Legal" title="Terms & Conditions" description="Last updated: January 2026" />

      <section className="py-16">
        <div className="mx-auto max-w-5xl space-y-8 px-6 xl:px-0">
          {terms.map((item, i) => (
            <div key={i}>
              <h2 className="text-[28px] font-bold tracking-[-0.8px] text-[#162B6F]">{item.title}</h2>
              <p className="mt-4 text-[16px] leading-8 text-gray-600">{item.content}</p>
            </div>
          ))}

          <div>
            <h2 className="text-[28px] font-bold tracking-[-0.8px] text-[#162B6F]">12. Contact Us</h2>
            <div className="mt-4 space-y-3 text-[16px] leading-8 text-gray-600">
              <p>For questions regarding these Terms, write to hello@learningedge.in or visit us at:</p>
              <p>The Learning Edge Academy <br />Sector 47, Sohna Road, Gurgaon <br /> Haryana 122018</p>
              <p>Phone: +91 98100 12345</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsAndConditions