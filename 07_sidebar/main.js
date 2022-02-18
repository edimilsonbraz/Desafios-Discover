const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar')
const body = document.querySelector('body')
const modeSwtich = document.querySelector('.toggle-switch')
console.log(modeSwtich)

menu.onclick = () => {
  sidebar.classList.toggle('toggle')
}

modeSwtich.addEventListener('click', () => {
  body.classList.toggle("dark")
})