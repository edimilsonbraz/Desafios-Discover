const theme = document.querySelector('.light')
const Input = document.getElementById('theme')

Input.addEventListener('click', toggleTheme)

function toggleTheme() {
  theme.classList.toggle('dark')
}