/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CHEMIST from '../assets/Chemist.png'
import { GetInteractionDescription } from '../services/client'

function InteractionDescription() {
  const interaction = useSelector(
    (state) => state?.rootReducers?.DrugReducer?.interaction?.interaction[0],
  )

  const { interactionID } = useParams()
  const [describe, setdescribe] = useState('')

  useEffect(() => {
    GetInteractionDescription(interactionID).then((data) => setdescribe(data))
  }, [])

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-20">
      <div className="w-full md:w-[40%] order-2 lg:order-1">
        <p className="font-bold text-white text-xl md:text-3xl pb-4 font-poppins">
          {`${interaction?.name_1} / ${interaction?.name_2}`}
        </p>
        <div className="rounded-full flex items-center justify-center w-[100px]">
          <span className="bg-white font-bold text-lg font-poppins rounded-l-full p-1 text-center w-1/2  h-10 flex items-center justify-center">
            RISK
          </span>
          <span
            className={`${interaction
              && interaction.riskRating === 'A'
                ? 'bg-[#08FF08] '
                : '' || interaction.riskRating === 'B'
                ? 'bg-[#e0d649] '
                : '' || interaction.riskRating === 'C'
                ? 'bg-[#c96129] '
                : '' || interaction.riskRating === 'D'
                ? 'bg-[#ff0808] '
                : ''
            } " bg-[#08FF08] font-bold text-lg font-poppins rounded-r-full p-1 text-center w-1/2  h-10 flex items-center justify-center"`}>
            {interaction?.riskRating}
          </span>
        </div>
        <p className="font-poppins text-white text-xs leading-6 md:text-sm md:leading-7 my-4">
          {describe}
        </p>
        {/* <p className="font-poppins text-white text-xs leading-6 md:text-sm md:leading-7 my-4">
          <span className="block font-bold font-poppins">Patient Management </span>
          Monitor for decreased effects of acetaminophen as well as for evidence of hepatotoxicity
          (due to increased concentrations of acetaminophen metabolites) with concurrent use of
          carbamazepine. This is of particular concern in patients receiving high-dose or chronic
          acetaminophen.
        </p>
        <p className="font-poppins text-white text-xs leading-6 md:text-sm md:leading-7 my-4">
          <span className="block font-bold font-poppins">Discussion </span>
          Acetaminophen clearance was 1.5- to 1.6-fold higher with concurrent use of an
          enzyme-inducing antiseizure drug such as carbamazepine in two separate studies.1,2 Each
          study included 6 participants who were receiving an enzyme inducing antiseizure drug (3
          receiving carbamazepine alone or with phenytoin in one study,
        </p>
        <p className="font-poppins text-white text-xs leading-6 md:text-sm md:leading-7 my-4">
          <span className="block font-bold font-poppins">Footnotes </span>
          1. Perucca E, Richens A. Paracetamol disposition in normal subjects and in patients
          treated with antiepileptic drugs. Br J Clin Pharmacol. 1979;7(2):201-206.[PubMed 760753]
          2. Miners JO, Attwood J, Birkett DJ. Determinants of acetaminophen metabolism: effect of
          inducers and inhibitors of drug metabolism on acetaminophen&apos;s metabolic pathways.Clin
          Pharmacol Ther. 1984;35(4):480-486.[PubMed 6705446] 3. Prescott LF, Critchley JA,
          Balali-Mood M, Pentland B. Effects of microsomal enzyme
        </p> */}
      </div>
      <div className="w-full hidden md:w-[40%] order-1 lg:order-2 md:flex md:justify-center">
        <img src={CHEMIST} alt="CHEMIST" className="object-cover" />
      </div>
    </div>
  )
}

export default InteractionDescription
