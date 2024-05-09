/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
const initState = {
  drugs: {},
  interaction: {},
}

const DrugReducer = (state = initState, action) => {
  switch (action.type) {
    case 'drugs/addDrug':
      const drug = action.payload
      return {
        ...state,
        drugs: {
          ...state.drugs,
          [drug.id]: drug,
        },
      }
    case 'drugs/removeDrug':
      const drugId = action.payload
      const drugs = { ...state.drugs }
      delete drugs[drugId]
      return { ...state, drugs }
    case 'drugs/addInteraction':
      const interaction = action.payload
      return {
        ...state,
        interaction: { ...state.interaction, interaction },
      }
    default:
      return state
  }
}

export const getDrugs = (state) => state?.rootReducers?.DrugReducer?.drugs
export const getInteraction = (state) => state?.rootReducers?.DrugReducer?.interaction

export const AddDrug = (drug) => ({
  type: 'drugs/addDrug',
  payload: drug,
})

export const removeDrug = (drugId) => ({
  type: 'drugs/removeDrug',
  payload: drugId,
})

export const addInteraction = (interaction) => ({
  type: 'drugs/addInteraction',
  payload: interaction,
})

export default DrugReducer
