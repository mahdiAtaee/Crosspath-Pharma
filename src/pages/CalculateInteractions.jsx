import { DrugList, MainTitle, Searchbar, Calculate } from '../components'
import GENE from '../assets/gene.png'

function CalculateInteractions() {
  return (
    <div>
      <MainTitle />
      <Searchbar />
      <div className="flex flex-col lg:flex-row items-center justify-center mt-8 gap-5">
        <DrugList />
        <Calculate />
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
