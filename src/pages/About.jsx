import { useEffect, useRef } from 'react'
import DOCTOR from '../assets/Doctor.png'

function About() {
  const divRef = useRef()

  useEffect(() => divRef.current.scrollIntoView({ behavior: 'smooth' }))

  return (
    <div
      ref={divRef}
      className="flex flex-col lg:flex-row items-center justify-center mt-20 order-1 md:order-2">
      <div className="w-full md:w-[40%] order-2 lg:order-1">
        <p className="font-bold text-white text-center md:text-left text-xl md:text-3xl pb-4 font-poppins">
          Safely calculate medication interactions on our intuitive website
        </p>
        <p className="font-poppins text-white text-xs leading-6 md:text-sm md:leading-7 text-center md:text-left">
        CrossPath Pharma is at the forefront of integrating advanced Decision Support Systems (DSS) into healthcare practices, 
        aiming to enhance patient safety and improve clinical outcomes. Our technology specializes in automated drug interaction checks,
         dosage verification, and feature extraction to minimize prescription errors and reduce medication risks. By leveraging real-time data and analytics,
          CrossPath Pharma supports healthcare professionals in making accurate, informed decisions that significantly lower the incidence of medication errors 
          and clinical burnout. We are committed to driving innovation in healthcare, ensuring cost-effectiveness, and improving patient care, particularly under 
          challenging conditions like crises and sanctions. At CrossPath Pharma, we transform data into decisions, fostering a safer, more efficient healthcare environment.
        </p>
      </div>
      <div className="w-full md:w-[40%] order-2 md:order-1 lg:order-2 md:flex md:justify-center">
        <img src={DOCTOR} alt="drug" className="object-cover" />
      </div>
    </div>
  )
}

export default About
