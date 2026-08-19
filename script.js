function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag da imagem
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-lightt.jpg")
  } else {
    // se tiver sem light mode, adicionar  a imagem normal
    img.setAttribute("src", "./assets/Andre.jpg")
  }
}

// if (html.classList.contains("light")) {
//   html.classList.remove("light")
//} else {
//   html.classList.add("light")
// }
