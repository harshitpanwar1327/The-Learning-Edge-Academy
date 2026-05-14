import { lazy } from "react";
import { Helmet } from "react-helmet-async";

const Hero = lazy(()=>import("../section/Hero"));

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | The Learning Edges Academy Gurugram</title>
        <meta name="description" content="Read the Terms & Conditions of The Learning Edges Academy, Gurugram regarding admissions, fees, refunds, student conduct and coaching policies." />
        <meta name="keywords" content="terms and conditions coaching institute, refund policy coaching classes, The Learning Edges Academy terms, Gurugram coaching policies" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.thelearningedges.in/terms-and-conditions" />
        <meta property="og:title" content="Terms & Conditions | The Learning Edges Academy" />
        <meta property="og:description" content="Terms, admission policies, fee structure, refunds and code of conduct for students at The Learning Edges Academy." />
        <meta property="og:url" content="https://www.thelearningedges.in/terms-and-conditions" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "The Learning Edges Academy",
            url: "https://www.thelearningedges.in",
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
          })}
        </script>
      </Helmet>

      <Hero badge="Legal" title="Terms & Conditions" description="Last updated: 11 May, 2026" />

      <section className="flex flex-col gap-8 py-12 lg:py-24 px-4 lg:px-16 max-w-7xl mx-auto">
        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>1. Acceptance of Terms</h2>
          <p>By accessing this website or enrolling in any program offered by The Learning Edges Academy, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>2. Eligibility</h2>
          <p>Programs are offered to students of eligible age groups (Classes 6 to 12 and competitive exam aspirants). Enrollment for minors must be authorized by a parent or legal guardian.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>3. Admission & Enrollment</h2>
          <p>Admission is confirmed only upon completion of registration formalities and payment of applicable fees. The Academy reserves the right to accept or refuse admission at its discretion.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>4. Fees & Payments</h2>
          <p>All fees are payable in advance as per the schedule. Fees once paid are non-transferable. Refund eligibility is governed by our Refund Policy below.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>5. Refund Policy</h2>
          <p>A refund request may be made within 7 days of enrollment, subject to deduction of administrative charges and the cost of classes already attended. No refunds will be processed after this period.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>6. Code of Conduct</h2>
          <p>Students are expected to attend classes regularly, behave respectfully with faculty and peers, and abide by Academy rules. Misconduct may lead to disciplinary action including suspension or dismissal without refund.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>7. Use of Study Material</h2>
          <p>All study material, recorded lectures, tests and digital content provided are the intellectual property of The Learning Edges Academy. Sharing, reproducing or selling this material is strictly prohibited.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>8. Attendance & Performance</h2>
          <p>While we strive to deliver excellent results, individual outcomes depend on student effort, attendance and consistency. The Academy does not guarantee specific ranks, scores or selections.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>9. Cancellation by Academy</h2>
          <p>The Academy reserves the right to reschedule, modify or cancel any program, batch or class for operational reasons, with reasonable notice to enrolled students.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>10. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, The Learning Edges Academy shall not be liable for any indirect, incidental or consequential damages arising from the use of our services or website.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>11. Governing Law</h2>
          <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts at Gurgaon, Haryana.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>12. Contact Us</h2>
          <p>For questions regarding these Terms, write to <a href="mailto:ashishtle0105@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#F0532B]">ashishtle0105@gmail.com</a> or visit us at:</p>
          <div className="flex flex-col gap-1">
            <p>Address: <a href="https://maps.app.goo.gl/Z4wizfWmpQhLTLbc7" target="_blank" rel="noopener noreferrer" className="text-[#F0532B]">SCF 26, Basment, Huda Market, Urban Estate, Sector 4, Gurugram, Haryana 122001</a></p>
            <p>Phone: <a href="tel:+919911115947" className="text-[#F0532B]">+91 9911115947</a></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsAndConditions