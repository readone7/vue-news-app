import axios from 'axios'

const BASE_URL = 'https://newsapi.org'

export {getSportStories, getTechStories, getFinanceStories, getAllStories}

function getTechStories () {
  const url = '${BASE_URL}/v1/articles?source=techcrunch&apiKey=505e990842c74fefa86335ed203a0668'
  return axios.get(url).then(response => response.data)
}

function getSportStories () {
  const url = '${BASE_URL}/v1/articles?source=fox-sports&apiKey=505e990842c74fefa86335ed203a0668'
  return axios.get(url).then(response => response.data)
}

function getFinanceStories () {
  const url = '${BASE_URL}/v1/articles?source=bloomberg&apiKey=505e990842c74fefa86335ed203a0668'
  return axios.get(url).then(response => response.data)
}

function getAllStories () {
  const url = '${BASE_URL}/v1/articles?source=reuters&sortBy=latest&apiKey=505e990842c74fefa86335ed203a0668'
  return axios.get(url).then(response => response.data)
}
