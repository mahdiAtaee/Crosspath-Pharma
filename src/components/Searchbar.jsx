/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PLUS from '../assets/plus.png'
import { AddDrug } from '../redux/DrugReducer'
import { GetDrugs } from '../services/client'

function Searchbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [isOpencombo, setIsOpencombo] = useState(false)
  const [searchResult, setSearchResult] = useState(null)

  axios.defaults.headers = { 'Access-Control-Allow-Origin': '*' }

  const handleAddDrug = (drug) => {
    dispatch(AddDrug(drug))
    navigate('/search/result')
    setIsOpencombo(false)
    setSearch('')
  }

  const handleAutoComplition = async (e) => {
    setSearch(e.target.value)
    const partialName = e.target.value
    const result = await GetDrugs(partialName)

    if (result) {
      setIsOpencombo(true)
      setSearchResult(result)
    }
  }
  const drugs = searchResult?.map((drug) => (
    <p
      key={drug?.id}
      className="py-2 cursor-pointer hover:bg-gray-200 p-1"
      onClick={() => handleAddDrug(drug)}>
      {drug.name}
    </p>
  ))
  return (
    <div className="flex items-center w-full justify-center relative">
      <input
        dir="ltr"
        type="search"
        placeholder="search: warfarin"
        value={search}
        onChange={(e) => handleAutoComplition(e)}
        className="rounded-full w-full h-12 bg-black bg-opacity-80 p-4 border-2 border-white font-poppins text-white"
      />
      <span className="absolute top-0 right-0 w-14 bg-[#0FA8E0] h-full rounded-r-full flex items-center justify-center cursor-pointer">
        <img src={PLUS} alt="plus" />
      </span>
      {isOpencombo && (
        <>
          <div
            className="bg-transparent fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-30"
            onClick={() => setIsOpencombo(false)}
          />
          <div className="w-full bg-white rounded-lg mt-2 p-4 z-50 absolute top-full">{drugs}</div>
        </>
      )}
    </div>
  )
}

export default Searchbar
