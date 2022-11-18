
let counter = 0
let homeCounter = document.getElementById("home-counter")
let guestCounter = document.getElementById("guest-counter")

function addone() {
    counter += 1
    homeCounter.textContent = counter
}

function addtwo() {
    counter += 2
    homeCounter.textContent = counter
}

function addthree() {
    counter += 3
    homeCounter.textContent = counter
}

function guestaddone() {
    counter += 1
    guestCounter.textContent = counter
}
function guestaddtwo() {
    counter += 2
    guestCounter.textContent = counter
}
function guestaddthree() {
    counter += 3
    guestCounter.textContent = counter
}

function newGame() {
    counter = 0
    guestCounter.textContent = counter
    homeCounter.textContent = counter
}





// function increment() {
//     count += 1
//     printCount.textContent = count
// }

{/* <button onclick="guestaddone()"> +1 </button>
<button onclick="guestaddtwo()"> +2 </button>
<button onclick="guestaddthree()"> +3 </button>       */}

