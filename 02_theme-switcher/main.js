const body = document.querySelector('body')
const Input = document.getElementById('theme')

Input.addEventListener('click', toggleTheme)

function toggleTheme() {
  // body.classList.toggle('dark')
  if(body.classList.contains('dark')) {
    body.classList.remove('dark')
    body.classList.add('light')
    localStorage.setItem('theme', 'light')
  }
  else{
    body.classList.remove('light')
    body.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
  document.getElementById('currentTheme').innerHTML = localStorage.theme;
}

body.classList.add(localStorage.getItem('theme'))
document.getElementById('currentTheme').innerHTML = localStorage.theme;

