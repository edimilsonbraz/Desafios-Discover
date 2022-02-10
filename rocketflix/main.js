import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

const url = `${BASE_URL}550?api_key=${API_KEY}&${language}`
const urlImage = `${IMG_URL}`
const img = document.querySelector('.content img')

function getMoviesApi() {
  fetch(url)
  .then((response) => response.json())
  .then(data => {
    titleMovie.textContent = data.original_title
    textMovie.textContent = data.overview
    
    img.setAttribute('src',`${urlImage}` + data.poster_path)
  })
}

getMoviesApi()