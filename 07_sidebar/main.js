const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar')

menu.onclick = () => {
  sidebar.classList.toggle('toggle')
}