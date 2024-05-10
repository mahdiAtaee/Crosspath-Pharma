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

export const GetInteractionDescription = async (InteractionURL) => {
  const { data } = await axios.get(`https://crosspathpharma.ir/interactions/${InteractionURL}`, {
    headers: {
      'Access-Control-Allow-Origin': 'no-cors',
    },
  })
  return data
}
