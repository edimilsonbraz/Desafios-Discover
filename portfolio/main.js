const linksSocialMedia = {
  github: "edimilsonbraz",
  rocketseat: "edimilsonbraz",
  linkedin: "edimilsonbraz"
}

function getGitHubProfile() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then((response) => response.json())
    .then(data => {
      userName.textContent = data.name;
      userDescription.textContent = data.bio;
      
    })
}

const userRepos = document.querySelectorAll('#userRepos')
const language = document.querySelectorAll('#userLanguage')

function getGitHubRepositorios() {
  const projects = 'https://api.github.com/users/edimilsonbraz/repos';

  fetch(projects)
  .then((response) => response.json())
  .then(data => {
    const repoAll = data.length
    for(let i = 0; i <= repoAll; i++) {

      // alert(data[i].name)
      userRepos.textContent = data[i].name;
      language.textContent = data[i].language;
      // userDescriptRepos.textContent = data[i].description;
    }
  })


}


getGitHubProfile()
getGitHubRepositorios()