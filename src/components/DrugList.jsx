/* eslint-disable operator-linebreak */
import { useDispatch, useSelector } from 'react-redux'
import LIST from '../assets/list.png'
import { getDrugs, removeDrug } from '../redux/DrugReducer'

function DrugList() {
  const drugs = useSelector(getDrugs)
  const dispatch = useDispatch()
  const drugList =
    drugs &&
    Object.values(drugs).map((drug) => (
      <div
        key={drug?.id}
        className="bg-gray rounded-2xl p-4 w-[95%] md:w-[80%] h-20 bg-[#0D0D12A8] flex items-center justify-between">
        <span className="text-white font-poppins text-sm">{drug?.name}</span>
        <span
          className="text-white md:mr-4 font-poppins text-sm cursor-pointer"
          onClick={() => dispatch(removeDrug(drug?.id))}>
          X
        </span>
      </div>
    ))
  return (
    <div className="rounded-3xl w-full md:w-[40%] mt-1 md:mt-8 order-2 md:order-1 min-h-[30vh]">
      <div className="bg-gray-500 backdrop-blur-2xl bg-opacity-25 p-2 rounded-t-3xl items-center justify-center gap-2 hidden md:flex">
        <img src={LIST} alt="list" className="text-white w-4 h-5" />
        <p className="text-white font-poppins text-sm">Drug List</p>
      </div>
      <div className="min-h-[30vw] drug-list-card-sm md:drug-list-card rounded-3xl md:rounded-t-none md:rounded-b-3xl p-4 flex flex-col items-center gap-4">
        {drugList}
      </div>
    </div>
  )
}

export default DrugList
