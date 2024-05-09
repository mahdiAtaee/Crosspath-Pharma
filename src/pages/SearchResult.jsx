import { useSelector } from 'react-redux'
import { DrugList, MainTitle, Searchbar, Interactions } from '../components'
import { getDrugs } from '../redux/DrugReducer'

function SearchResult() {
  const drugs = useSelector(getDrugs)
  console.log(drugs)
  return (
    <div>
      <MainTitle />
      <Searchbar />
      <div className="flex flex-col lg:flex-row items-center justify-center mt-8 md:gap-20">
        <div className="w-[80%] h-16 md:hidden bg-gray-700 bg-opacity-100 rounded-3xl py-4 px-6 flex items-center justify-center order-2">
          <span className="bg-[#0D0D12A8] text-white py-2 px-4 font-poppins font-bold text-sm rounded-full text-center">
            Drug List
          </span>
          <span className="text-white py-2 px-4 font-poppins font-bold text-sm rounded-full">
            Interaction
          </span>
        </div>
        <DrugList drugs={drugs} />
        <Interactions drugs={drugs} />
      </div>
    </div>
  )
}

export default SearchResult
