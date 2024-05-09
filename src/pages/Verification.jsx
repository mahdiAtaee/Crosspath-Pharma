import { VerificationCard } from '../components'

function Verification() {
  return (
    <div className="w-screen flex items-center justify-center flex-col mt-20">
      <p className="text-white font-bold text-xl md:text-2xl lg:text-3xl my-4 font-poppins">Mapping Verification</p>
      <VerificationCard />
    </div>
  )
}

export default Verification
