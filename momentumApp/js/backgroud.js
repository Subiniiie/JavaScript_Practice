const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg"
]

const chosenImage = images[Math.floor(Math.random()*images.length)]

const bgImage = document.createElement("img")

const BG = "background"
bgImage.className = BG
bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage)