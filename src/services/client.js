import axios from 'axios'

axios.defaults.headers = { 'Access-Control-Allow-Origin': '*' }

export const CheckInteraction = async (globalIds) => {
  const { data } = await axios.post(
    'https://api.crosspathpharma.ir/check_interactions',
    JSON.stringify({
      global_ids: globalIds,
    }),
  )
  return data
}

export const GetDrugs = async (partialName) => {
  const { data } = await axios.get(
    `https://api.crosspathpharma.ir/autocomplete?partial_name=${partialName}`,
  )
  return data
}

export const GetInteractionDescription = async () => {
  const { data } = await axios.get('https://api.crosspathpharma.ir/interaction/2725.html')
  return data
}
