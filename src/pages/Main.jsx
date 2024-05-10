import { useEffect, useRef } from 'react'
import { Searchbar, MainTitle } from '../components/index'
import DURG from '../assets/drug.png'

function Main() {
  const divRef = useRef(null)

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' })
  })

  return (
    <div className="flex items-center flex-col" ref={divRef}>
      <MainTitle />
      <Searchbar />
      <div className="flex flex-col lg:flex-row items-center justify-center mt-8">
        <div className="w-full md:w-[50%] order-2 lg:order-1 text-center lg:text-left">
          <p className="font-bold text-white text-lg md:text-3xl pb-4 font-poppins">
            What is CrossPath Pharma?
          </p>
          <p className="font-poppins text-white text-sm leading-5 md:text-lg md:leading-7">
          CrossPath Pharma pioneers the integration of advanced Decision Support Systems (DSS) in healthcare, enhancing patient safety and reducing medication errors. Our technology streamlines drug interactions checks, dosage verification, and critical data analysis to support informed clinical decisions. We are dedicated to improving healthcare outcomes and operational efficiency in challenging environments.
          </p>
        </div>
        <div className="w-full md:w-[50%] order-1 lg:order-2 flex items-center justify-center">
          <img src={DURG} alt="drug" className="object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Main
