/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
const initState = {
  drugs: {},
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
    default:
      return state
  }
}

export const getDrugs = (state) => state?.rootReducers?.DrugReducer?.drugs

export const AddDrug = (drug) => ({
  type: 'drugs/addDrug',
  payload: drug,
})

export default DrugReducer
