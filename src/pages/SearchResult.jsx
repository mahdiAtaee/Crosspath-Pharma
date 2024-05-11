import { useState } from 'react'
import { DrugList, MainTitle, Searchbar, Interactions, Calculate } from '../components'

function SearchResult() {
  const [showDrug, setShowDrug] = useState(true)

  return (
    <div>
      <MainTitle />
      <Searchbar />
      <div className="flex flex-col lg:flex-row items-center justify-center mt-8 md:gap-20">
        <div className="w-[85%] h-16 md:hidden bg-gray-700 bg-opacity-100 rounded-3xl py-4 px-6 flex items-center justify-center order-2">
          <span
            className={`${
              showDrug
                ? 'bg-[#0D0D12A8] text-white py-2 px-4 font-poppins font-bold text-sm rounded-full'
                : 'text-white py-2 px-4 font-poppins font-bold text-sm'
            }`}
            onClick={() => setShowDrug(true)}>
            Drug List
          </span>
          <span
            className={`${
              !showDrug
                ? 'bg-[#0D0D12A8] text-white py-2 px-4 font-poppins font-bold text-sm rounded-full'
                : 'text-white py-2 px-4 font-poppins font-bold text-sm'
            }`}
            onClick={() => setShowDrug(false)}>
            Interaction
          </span>
        </div>
        {showDrug ? <DrugList /> : <Calculate />}
        <Interactions />
      </div>
    </div>
  )
}

export default SearchResult
