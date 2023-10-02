const buttons = document.querySelectorAll(".navlink")
const characters = document.querySelectorAll(".character")
const player = document.getElementById("audioplayer")

player.volume = 0.1
player.src = "src/tracks/defaultSong.mp3"
player.autoplay = true

playerControls()

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    unSelectButton()
    unSelectCharacter()

    button.classList.add("active")
    characters[index].classList.add("active")

    player.src = `src/tracks/${index}.mp3`
  })
})

function unSelectCharacter() {
  const activeCharacter = document.querySelector(".character.active")
  activeCharacter.classList.remove("active")
}

function unSelectButton() {
  const activeButton = document.querySelector(".navlink.active")
  activeButton.classList.remove("active")
}

function playerControls() {
  document.addEventListener("keypress", (event) => {
    if (event.key == " ") {
      if (player.paused) {
        player.play()
      } else {
        player.pause()
      }
    } else if (event.key == "s") {
      player.volume = player.volume - 0.05
    } else if (event.key == "w") {
      player.volume = player.volume + 0.05
    }
  })
}
