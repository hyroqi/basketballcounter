let homeEl = document.getElementById("homeEl")
let awayEl = document.getElementById("awayEl")

let homescore = 0
let awayscore = 0

function homeincrement1pt(){
    homescore += 1
    homeEl.textContent = homescore
    console.log(homescore)
}

function homeincrement2pt(){
    homescore += 2
    homeEl.textContent = homescore
    console.log(homescore)
}

function homeincrement3pt(){
    homescore += 3
    homeEl.textContent = homescore
    console.log(homescore)
}

function awayincrement1pt(){
    awayscore += 1
    awayEl.textContent = awayscore
    console.log(awayscore)
}

function awayincrement2pt(){
    awayscore += 2
    awayEl.textContent = awayscore
    console.log(awayscore)
}

function awayincrement3pt(){
    awayscore += 3
    awayEl.textContent = awayscore
    console.log(awayscore)
}