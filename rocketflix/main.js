import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

// const url = `${BASE_URL}550?api_key=${API_KEY}&${language}`
const url = 'https://api.themoviedb.org/3/search/movie?api_key=f4c42d7f1d3d45b8375f9d29e4c9afbc&query=action'
const img = document.querySelector('.content img')
const button = document.querySelector('.btn')
const urlImage = `${IMG_URL}`

button.addEventListener('click', getMoviesApi)

const response = await fetch(url)
const data = await response.json()
const newData = data.results

function getMoviesApi() {
  newData.push(newData.splice(0,1)[0]); //muda a posição do index do array
  newData.forEach(result => {
    titleMovie.textContent = result.title
    textMovie.textContent = result.overview
    img.setAttribute('src',`${urlImage}` + result.poster_path)
  })
}




