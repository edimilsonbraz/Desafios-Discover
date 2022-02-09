import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

const url = `${BASE_URL}550?api_key=${API_KEY}`

fetch(url)
.then((response) => response.json())
.then(data => {
  contentImg.textContent = data.poster_path
  titleMovie.textContent = data.original_title
  textMovie.textContent = data.overview
})