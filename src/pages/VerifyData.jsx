import WARN from '../assets/polygonWarn.png'
import { Pagination } from '../components'

function VerifyData() {
  const handleNextPageClick = () => {}
  const handlePrevPageClick = () => {}
  const handlePageClick = () => {}

  return (
    <>
      <div className="rounded-3xl w-full md:w-[99%] mt-20">
        <div className="bg-gray-500 backdrop-blur-2xl bg-opacity-50 flex p-2 rounded-t-3xl items-center justify-center gap-2">
          <p className="text-white font-poppins text-lg lg:text-2xl">
            Verify This Data With Patience
          </p>
        </div>
        <div className="min-h-[80vw] drug-list-card rounded-b-3xl p-4 flex flex-col items-center gap-2">
          <div className="bg-gray rounded-3xl p-4 w-[99%] h-max md:h-10 bg-[#0D0D12A8] flex items-center justify-between">
            <span className="text-white">1</span>
            <span className="text-white font-poppins text-[0.7rem] md:text-sm pl-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
              hendrerit
            </span>
            <span className="text-white font-poppins text-lg w-[50px] h-[20px] cursor-pointer md:w-5 md:h-5">
              <img src={WARN} alt="warning" className="w-full h-full object-cover" />
            </span>
          </div>
          <div className="bg-gray rounded-3xl p-4 w-[99%] h-max md:h-10 bg-[#0D0D12A8] flex items-center justify-between">
            <span className="text-white">2</span>
            <span className="text-white font-poppins text-[0.7rem] md:text-sm pl-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
              hendrerit
            </span>
            <span className="text-white font-poppins text-sm cursor-pointer w-[50px] h-[20px] md:w-5 md:h-5">
              <img src={WARN} alt="warning" className="w-full h-full object-cover" />
            </span>
          </div>
          <div className="bg-gray rounded-3xl p-4 w-[99%] h-max md:h-10 bg-[#0D0D12A8] flex items-center justify-between">
            <span className="text-white">3</span>
            <span className="text-white font-poppins text-[0.7rem] md:text-sm  pl-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
              hendrerit
            </span>
            <span className="text-white font-poppins text-sm cursor-pointer w-[50px] h-[20px] md:w-5 md:h-5">
              <img src={WARN} alt="warning" className="w-full h-full object-cover" />
            </span>
          </div>
        </div>
      </div>
      <Pagination
        currentPage={1}
        totalPages={10}
        handleNextPageClick={handleNextPageClick}
        handlePrevPageClick={handlePrevPageClick}
        handlePageClick={handlePageClick}
      />
    </>
  )
}

export default VerifyData
