let hs = document.getElementById("homescore")
let gs = document.getElementById("guestscore")
let hscore = 0
let gscore = 0


function addscoreHome(scoreval){
    hscore+= scoreval
    hs.textContent = hscore
}

function addscoreGuest(scoreval){
    gscore+= scoreval
    gs.textContent = gscore
}

function resetall(){
    hscore = 0
    gscore = 0
    hs.textContent = hscore
    gs.textContent = gscore

}