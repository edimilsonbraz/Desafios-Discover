import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

const url = `${BASE_URL}api_key=${API_KEY}&query=all&${language}`
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
    img.setAttribute('src',`${urlImage}` + result.poster_path)
    titleMovie.textContent = result.title
    textMovie.textContent = result.overview
    yearMovie.textContent = 'Ano: '+result.release_date.slice(0, 4)
    popularityMovie.textContent = 'Popularidade: '+result.popularity+' ⭐'
  })
}




