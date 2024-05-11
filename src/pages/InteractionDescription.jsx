/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'
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

  // const RawData = `<p><b>Title</b> Abciximab / Dextran</p>
  // <p></p>
  // <p><b>Risk Rating</b> X: Avoid combination</p>
  // <p><b>Summary</b> Dextran may enhance the anticoagulant effect of Abciximab. <b>Severity</b> Major <b>Onset</b> Rapid <b>Reliability Rating</b> Good </p>
  // <p><b>Patient Management</b> Do not use IV dextran before or during percutaneous coronary intervention (PCI) with abciximab. This combination is listed as a contraindication in the abciximab prescribing information.</p>
  // <p><b>Discussion</b> Eleven patients in the EPIC trial received IV dextran with abciximab. Five of these patients experienced major bleeding events and 4 experienced minor bleeding events compared with 0 of 5 placebo patients who received IV dextran without abciximab.<sup>1</sup><br><br>The abciximab prescribing information states that use of IV dextran before or during PCI with abciximab is contraindicated due to the increased risk of bleeding.<sup>2</sup><br><br>The mechanism of this interaction is likely due to additive bleeding risk.</p>
  // <p><b>Footnotes</b> </p>
  // <p>1. EPIC Investigators. Use of a monoclonal antibody directed against the platelet glycoprotein IIb/IIIa receptor in high-risk coronary angioplasty. <i>N Engl J Med</i>. 1994;330(14):956-961. <a target="_blank" href="https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&amp;db=pubmed&amp;dopt=Abstract&amp;list_uids=8121459">[PubMed 8121459]</a></p>
  // <p>2. Reopro (abciximab) [prescribing information]. Horsham, PA: Janssen Biotech, Inc; August 2019.</p>
  // <p></p>
  // <hr>
  // <span style="color: black; font-size: 80%; font-style: italic">© 2024 UpToDate, Inc. and its affiliates and/or licensors. All Rights Reserved.</span>`

  const parsedData = parse(describe, {
    replace: ({ name, children, prev }) => {
      if (name === 'b' && prev == null) {
        return <span className="block text-2xl font-poppins font-bold">{children[0]?.data}</span>
      }
    },
    depth: 2,
  })

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
            className={`${
              interaction && interaction.riskRating === 'A'
                ? 'bg-[#08FF08] '
                : '' || interaction.riskRating === 'B'
                ? 'bg-[#e0d649] '
                : '' || interaction.riskRating === 'C'
                ? 'bg-[#c96129] '
                : '' || interaction.riskRating === 'D'
                ? 'bg-[#ff0808] '
                : ''
            } font-bold text-lg font-poppins rounded-r-full p-1 text-center w-1/2  h-10 flex items-center justify-center`}>
            {interaction?.riskRating}
          </span>
        </div>
        <p className="font-poppins text-white text-xs leading-6 md:text-sm md:leading-7 my-4">
          {parsedData.map((item, index) => {
            if (index > 4) {
              return (
                <p key={index} className="my-4 font-poppins">
                  {item}
                </p>
              )
            }
          })}
        </p>
      </div>
      <div className="w-full hidden md:w-[40%] order-1 lg:order-2 md:flex md:justify-center">
        <img src={CHEMIST} alt="CHEMIST" className="object-cover" />
      </div>
    </div>
  )
}

export default InteractionDescription
