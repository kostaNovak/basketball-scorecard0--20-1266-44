let h_score = Number(document.getElementById("home-score").textContent)
let g_score = Number(document.getElementById("guest-score").textContent)



function addOne() {
  document.getElementById("home-score").textContent = h_score+=1
  if (h_score > g_score){
    document.getElementById("h-score").classList.add ("highlight")
    document.getElementById("g-score").classList.remove ("highlight")
  }else if (h_score == g_score) {
    document.getElementById("h-score").classList.remove("highlight")
    document.getElementById("g-score").classList.remove("highlight")
  }

}
function addTwo() {
  document.getElementById("home-score").textContent = h_score+=2
  if (h_score > g_score){
    document.getElementById("h-score").classList.add ("highlight")
    document.getElementById("g-score").classList.remove ("highlight")
  }else if (h_score == g_score){
    document.getElementById("h-score").classList.remove("highlight")
    document.getElementById("g-score").classList.remove("highlight")
  }
}
function addThree() {
  document.getElementById("home-score").textContent = h_score+=3
  if (h_score > g_score){
    document.getElementById("h-score").classList.add ("highlight")
    document.getElementById("g-score").classList.remove ("highlight")
  }else if (h_score == g_score){
    document.getElementById("h-score").classList.remove("highlight")
    document.getElementById("g-score").classList.remove("highlight")
  }
}


function addOne_G() {
  document.getElementById("guest-score").textContent = g_score+=1
  if (g_score > h_score){
    document.getElementById("g-score").classList.add ("highlight")
    document.getElementById("h-score").classList.remove ("highlight")
  }else if (h_score == g_score){
    document.getElementById("h-score").classList.remove("highlight")
    document.getElementById("g-score").classList.remove("highlight")
  }
}
function addTwo_G() {
  document.getElementById("guest-score").textContent = g_score+=2
  if (g_score > h_score){
    document.getElementById("g-score").classList.add ("highlight")
    document.getElementById("h-score").classList.remove ("highlight")
  }else if (h_score == g_score){
    document.getElementById("h-score").classList.remove("highlight")
    document.getElementById("g-score").classList.remove("highlight")
  }
}
function addThree_G() {
  document.getElementById("guest-score").textContent = g_score+=3
  if (g_score > h_score){
    document.getElementById("g-score").classList.add ("highlight")
    document.getElementById("h-score").classList.remove ("highlight")
  }else if (h_score == g_score){
    document.getElementById("h-score").classList.remove("highlight")
    document.getElementById("g-score").classList.remove("highlight")
  }
}

function newGame() {
  document.getElementById("home-score").textContent = 0
  document.getElementById("guest-score").textContent = 0
  h_score = 0
  g_score = 0
  document.getElementById("h-score").classList.remove ("highlight")
  document.getElementById("g-score").classList.remove ("highlight")

}
