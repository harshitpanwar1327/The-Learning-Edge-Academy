import { lazy } from "react";
import { Helmet } from "react-helmet-async";

const Hero = lazy(()=>import("../section/Hero"));

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | The Learning Edges Academy Gurugram</title>
        <meta name="description" content="Read the Privacy Policy of The Learning Edges Academy, Gurugram. Learn how we collect, use and protect student and parent information for our coaching services." />
        <meta name="keywords" content="privacy policy coaching institute, The Learning Edges Academy, Gurugram coaching institute privacy policy, student data policy" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.thelearningedges.in/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | The Learning Edges Academy" />
        <meta property="og:description" content="Learn how The Learning Edges Academy collects, uses and safeguards student information." />
        <meta property="og:url" content="https://www.thelearningedges.in/privacy-policy" />
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
              addressLocality: "Gurugram",
              addressRegion: "Haryana",
              postalCode: "122018",
              addressCountry: "IN"
            }
          })}
        </script>
      </Helmet>

      <Hero badge="Legal" title="Privacy Policy" description="Last updated on 11 May 2026. This Privacy Policy explains how The Learning Edges Academy in Gurugram collects, uses and protects student and parent information." />

      <section className="flex flex-col gap-8 py-12 lg:py-24 px-4 lg:px-16 max-w-7xl mx-auto">
        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>1. Introduction</h2>
          <p>The Learning Edges Academy ("we", "us", "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose and safeguard your information when you visit our website or enroll in our coaching programs.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>2. Information We Collect</h2>
          <p>We may collect personal information including your name, parent/guardian name, phone number, email address, postal address, school name, class, academic records, and payment details when you submit forms, register for a demo class or enroll in a program.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>3. How We Use Your Information</h2>
          <p>We use your information to: respond to inquiries, schedule demo classes, process admissions and fees, share academic progress, send important communications and improve our services. We do not sell or rent personal data to third parties.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>4. Cookies & Analytics</h2>
          <p>Our website uses cookies and similar technologies to remember preferences, analyze traffic and improve user experience. You can disable cookies through your browser settings.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>5. Data Sharing</h2>
          <p>We may share your information with trusted service providers (payment processors, cloud hosting, communication platforms) strictly to operate our services, or when required by law.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>6. Data Security</h2>
          <p>We implement reasonable physical, electronic and administrative safeguards to protect your information. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>7. Children's Privacy</h2>
          <p>For students under 18, all enrollment information must be provided with parent or guardian consent. We do not knowingly collect data from minors without such consent.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>8. Your Rights</h2>
          <p>You may request access, correction or deletion of your personal information by contacting us at <a href="mailto:hello@learningedge.in" target="_blank" rel="noopener noreferrer" className="text-[#F0532B]">hello@learningedge.in</a>. We will respond within a reasonable timeframe.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. The updated version will be posted on this page with a new "Last updated" date.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold text-[#1B1F66]'>10. Contact Us</h2>
          <div className="flex flex-col gap-1">
            <p>For questions about this Privacy Policy, contact us at:</p>
            <p>SCF 26, Basment, Huda Market, Urban Estate, Sector 4, Gurugram, Haryana 122001</p>
          </div>
          <div className="flex flex-col gap-1">
            <p>Email: <a href="mailto:hello@learningedge.in" target="_blank" rel="noopener noreferrer" className="text-[#F0532B]">hello@learningedge.in</a></p>
            <p>Phone: <a href="tel:+919911115947" className="text-[#F0532B]">+91 9911115947</a></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy