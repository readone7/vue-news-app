import axios from 'axios'

export {getSportStories, getTechStories, getFinanceStories, getAllStories}

function getTechStories () {
  const url = 'https://newsapi.org/v1/articles?source=ars-technica&apiKey=505e990842c74fefa86335ed203a0668'
  return axios.get(url).then(response => response.data)
}

function getSportStories () {
  const url = 'https://newsapi.org/v1/articles?source=fox-sports&apiKey=505e990842c74fefa86335ed203a0668'
  return axios.get(url).then(response => response.data)
}

function getFinanceStories () {
  const url = 'https://newsapi.org/v1/articles?source=bloomberg&apiKey=505e990842c74fefa86335ed203a0668'
  return axios.get(url).then(response => response.data)
}

function getAllStories () {
  const url = 'https://newsapi.org/v1/articles?source=reuters&sortBy=latest&apiKey=505e990842c74fefa86335ed203a0668'
  return axios.get(url).then(response => response.data)
}
