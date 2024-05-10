/* eslint-disable no-nested-ternary */
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { DrugList, MainTitle, Searchbar, Calculate } from '../components'
import GENE from '../assets/gene.png'
import { getInteraction } from '../redux/DrugReducer'
import useWindowDemision from '../services/useWindowDeminsions'

function CalculateInteractions() {
  const { interaction } = useSelector(getInteraction)
  const [showDrug, setShowDrug] = useState(false)
  const { width } = useWindowDemision()

  return (
    <div>
      <MainTitle />
      <Searchbar />
      <div className="flex flex-col lg:flex-row items-center justify-center mt-8 gap-5">
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
        {width < 775 ? (
          showDrug ? (
            <DrugList />
          ) : (
            <Calculate interaction={interaction} />
          )
        ) : (
          <>
            <DrugList />
            <Calculate interaction={interaction} />
          </>
        )}
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          type="button"
          className="bg-[#0FA8E0] text-white py-4 px-6 rounded-2xl custom-drop-shadow my-4 text-center flex items-center gap-2 justify-center">
          <img src={GENE} alt="vector" className="w-4 h-4" />
          <span>Calculate Interactions</span>
        </button>
      </div>
    </div>
  )
}

export default CalculateInteractions
