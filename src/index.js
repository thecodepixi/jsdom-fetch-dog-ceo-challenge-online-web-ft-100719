function fetchDogs(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => renderDogs(json.message))
}

function fetchBreeds(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => renderBreeds(json.message))
}

function renderDogs(json) {
  let dogsContainer = document.getElementById("dog-image-container")
  json.forEach( dog => {
    let imageLI = document.createElement("li")
    let newPic = document.createElement("img")
    newPic.src = dog 
    newPic.height = "500"
    imageLI.appendChild(newPic)
    dogsContainer.appendChild(imageLI)
  })
}

function renderBreeds(json) {
  let breedList = document.getElementById("dog-breeds")
  for (breed in json) {
    let li = document.createElement("li")
    li.innerText = breed 
    li.onclick = breedColorChange
    li.classList.add("breed")
    breedList.appendChild(li)
  }
}

function breedColorChange(){
  this.style.color = "red"
}

function filterBreeds(){
  document.getElementById("breed-dropdown").onchange = filter

  function filter(){
    let char = this.value 
    let breeds = document.getElementsByClassName("breed") 
    for(i = 0; i < breeds.length; i++) {
      if (breeds[i].innerText[0] !== char) {
        breeds[i].style.display = "none" 
      } else if (breeds[i].innerText[0] == char){
        breeds[i].style.display = "list-item"
      }
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  fetchDogs();
  fetchBreeds();
  filterBreeds();
})

