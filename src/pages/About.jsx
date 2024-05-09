import DOCTOR from '../assets/Doctor.png'

function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-20 order-1 md:order-2">
      <div className="w-full md:w-[40%] order-2 lg:order-1">
        <p className="font-bold text-white text-center md:text-left text-xl md:text-3xl pb-4 font-poppins">
          Safely calculate medication interactions on our intuitive website
        </p>
        <p className="font-poppins text-white text-xs leading-6 md:text-sm md:leading-7 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
          hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
          ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
          auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque
          sagittis orci ut diam condimentum, vel euismod erat placerat.
        </p>
      </div>
      <div className="w-full md:w-[40%] order-2 md:order-1 lg:order-2 md:flex md:justify-center">
        <img src={DOCTOR} alt="drug" className="object-cover" />
      </div>
    </div>
  )
}

export default About
