import { VerificationCard } from '../components'

function Verification() {
  return (
    <div className="flex items-center justify-center flex-col mt-20 w-full">
      <p className="text-white font-bold text-lg md:text-2xl lg:text-3xl my-4 font-poppins">Mapping Verification</p>
      <VerificationCard />
    </div>
  )
}

export default Verification
