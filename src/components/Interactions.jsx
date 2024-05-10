import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addInteraction } from '../redux/DrugReducer'
import GENE from '../assets/gene.png'
import { CheckInteraction } from '../services/client'

function Interactions({ drugs }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleCalculateInteractions = async () => {
    const globalIds = drugs && Object.values(drugs).map((drug) => drug.globalId)
    axios.defaults.headers = { 'Access-Control-Allow-Origin': '*' }
    axios.defaults.headers = { 'Content-Type': 'application/json' }

    const data = await CheckInteraction(globalIds)

    if (data) {
      dispatch(addInteraction(data))
      navigate('/calculate')
    }
  }

  return (
    <div className="w-full md:w-[60%] flex flex-col justify-center items-center order-1 md:order-2 mb-8">
      <p className="font-bold text-white text-center text-xl md:text-2xl pb-4 font-poppins hidden md:block">
        Find The Intercations Now !
      </p>
      <button
        type="button"
        onClick={handleCalculateInteractions}
        className="bg-[#0FA8E0] text-white py-4 px-6 rounded-2xl custom-drop-shadow my-1 md:my-4 text-center flex items-center gap-2 justify-center">
        <img src={GENE} alt="vector" className="w-4 h-4" />
        <span>Calculate Interactions</span>
      </button>
      <p className="font-poppins text-white text-sm leading-6 md:text-md md:leading-7 text-center hidden md:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
        hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices
        mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare
        leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante
        fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut
        diam condimentum, vel euismod erat placerat.
      </p>
    </div>
  )
}

export default Interactions
