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
          <p className="font-poppins text-white text-sm leading-6 md:text-lg md:leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
            ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
            auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
            maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque
            sagittis orci ut diam condimentum, vel euismod erat placerat.
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
