import { lazy } from "react"

const Hero = lazy(()=>import("../section/Hero"));

const Courses = () => {
  return (
    <>
      <Hero badge="Contact" title="Our Courses" description="Structured learning paths for every academic stage — from foundation through JEE & NEET mastery." />
    </>
  )
}

export default Courses