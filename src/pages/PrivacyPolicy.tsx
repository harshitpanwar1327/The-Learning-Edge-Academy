import Hero from "../section/Hero"

const privacy = [
  {
    title: "1. Introduction",
    content:'The Learning Edge Academy ("we", "us", "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose and safeguard your information when you visit our website or enroll in our coaching programs.',
  },
  {
    title: "2. Information We Collect",
    content:"We may collect personal information including your name, parent/guardian name, phone number, email address, postal address, school name, class, academic records, and payment details when you submit forms, register for a demo class or enroll in a program.",
  },
  {
    title: "3. How We Use Your Information",
    content:"We use your information to: respond to inquiries, schedule demo classes, process admissions and fees, share academic progress, send important communications and improve our services. We do not sell or rent personal data to third parties.",
  },
  {
    title: "4. Cookies & Analytics",
    content:"Our website uses cookies and similar technologies to remember preferences, analyze traffic and improve user experience. You can disable cookies through your browser settings.",
  },
  {
    title: "5. Data Sharing",
    content:"We may share your information with trusted service providers (payment processors, cloud hosting, communication platforms) strictly to operate our services, or when required by law.",
  },
  {
    title: "6. Data Security",
    content:"We implement reasonable physical, electronic and administrative safeguards to protect your information. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "7. Children's Privacy",
    content:"For students under 18, all enrollment information must be provided with parent or guardian consent. We do not knowingly collect data from minors without such consent.",
  },
  {
    title: "8. Your Rights",
    content:"You may request access, correction or deletion of your personal information by contacting us at hello@learningedge.in. We will respond within a reasonable timeframe.",
  },
  {
    title: "9. Changes to This Policy",
    content:'We may update this Privacy Policy periodically. The updated version will be posted on this page with a new "Last updated" date.',
  },
]

const PrivacyPolicy = () => {
  return (
    <>
      <Hero badge="Legal" title="Privacy Policy" description="Last updated: January 2026" />

      <section className="py-16">
        <div className="mx-auto max-w-5xl space-y-8 px-6 xl:px-0">
          {privacy.map((item, i) => (
            <div key={i}>
              <h2 className="text-[28px] font-bold tracking-[-0.8px] text-[#162B6F]">{item.title}</h2>
              <p className="mt-4 text-[16px] leading-8 text-gray-600">{item.content}</p>
            </div>
          ))}

          <div>
            <h2 className="text-[28px] font-bold tracking-[-0.8px] text-[#162B6F]">10. Contact Us</h2>
            <div className="mt-4 space-y-3 text-[16px] leading-8 text-gray-600">
              <p>For questions about this Privacy Policy, contact us at:</p>
              <p>The Learning Edge Academy, Sector 47, Sohna Road, Gurgaon, Haryana 122018</p>
              <p>Email: hello@learningedge.in <br /> Phone: +91 98100 12345</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy