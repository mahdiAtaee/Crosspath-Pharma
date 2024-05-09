import WARNING from '../assets/warning.png'

function Calculate() {
  return (
    <div className="rounded-3xl w-full md:w-[60%] mt-8">
      <div className="bg-gray-500 backdrop-blur-2xl bg-opacity-50 flex p-2 rounded-t-3xl items-center justify-center gap-2">
        <img src={WARNING} alt="WARNING" className="text-white w-4 h-5" />
        <p className="text-white font-poppins text-sm">Interactions</p>
      </div>
      <div className="min-h-[30vw] drug-list-card rounded-b-3xl p-4 flex flex-col items-center gap-4">
        <div className="bg-gray rounded-2xl p-4 w-[95%] min-h-20 bg-[#0D0D12A8] flex flex-col items-center justify-between">
          <div className="w-full flex items-center justify-between">
            <span className="text-white">1</span>
            <div className="rounded-full flex items-center justify-center w-[80px]">
              <span className="bg-white font-bold text-sm font-poppins rounded-l-full p-1 text-center w-1/2">
                RISK
              </span>
              <span className="bg-[#08FF08] font-bold text-sm font-poppins rounded-r-full p-1 text-center w-1/2">
                A
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full my-4">
            <span className="text-white font-poppins text-sm">Acetaminophen</span>
            <span className="flex-1 h-1 bg-blue-500 w-6 mx-4 rounded-full" />
            <span className="text-white font-poppins text-sm cursor-pointer">CarBAMazepine</span>
          </div>
        </div>
        <div className="bg-gray rounded-2xl p-4 w-[95%] min-h-20 bg-[#0D0D12A8] flex flex-col items-center justify-between">
          <div className="w-full flex items-center justify-between">
            <span className="text-white">1</span>
            <div className="rounded-full flex items-center justify-center w-[80px]">
              <span className="bg-white font-bold text-sm font-poppins rounded-l-full p-1 text-center w-1/2">
                RISK
              </span>
              <span className="bg-[#FFFF08] font-bold text-sm font-poppins rounded-r-full p-1 text-center w-1/2">
                B
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full my-4">
            <span className="text-white font-poppins text-sm">Acetaminophen</span>
            <span className="flex-1 h-1 bg-blue-500 w-6 mx-4 rounded-full" />
            <span className="text-white font-poppins text-sm cursor-pointer">CarBAMazepine</span>
          </div>
        </div>
        <div className="bg-gray rounded-2xl p-4 w-[95%] min-h-20 bg-[#0D0D12A8] flex flex-col items-center justify-between">
          <div className="w-full flex items-center justify-between">
            <span className="text-white">1</span>
            <div className="rounded-full flex items-center justify-center w-[80px]">
              <span className="bg-white font-bold text-sm font-poppins rounded-l-full p-1 text-center w-1/2">
                RISK
              </span>
              <span className="bg-[#08FF08] font-bold text-sm font-poppins rounded-r-full p-1 text-center w-1/2">
                A
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full my-4">
            <span className="text-white font-poppins text-sm">Acetaminophen</span>
            <span className="flex-1 h-1 bg-blue-500 w-6 mx-4 rounded-full" />
            <span className="text-white font-poppins text-sm cursor-pointer">CarBAMazepine</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculate
