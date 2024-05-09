import { useNavigate } from 'react-router-dom'

function VerificationCard() {
  const navigation = useNavigate()
  const handleLogin = () => {
    navigation('/verification/result')
  }
  return (
    <div className="verify-card w-[80vw] md:w-[40vw] rounded-3xl min-h-[250px] p-4 text-center flex flex-col items-center justify-center">
      <p className="text-lg md:text-xl text-white mb-4 my-4 font-poppins">Please Enter Your ID</p>
      <input
        type="password"
        className="inline-block w-[90%] text-center rounded-lg bg-transparent border border-gray-400 outline-none p-4 h-10 text-gray-400"
        placeholder="123456"
      />
      <button
        type="button"
        onClick={() => handleLogin()}
        className="block py-1 px-4 md:py-2 md:px-8 mt-4 bg-[#0FA8E0] text-white rounded-full font-poppins text-sm md:text-lg">
        Login
      </button>
    </div>
  )
}

export default VerificationCard
