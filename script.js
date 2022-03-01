const log = console.log;
// const columnLetters = ["a", "b", "c"];
const playField = document.querySelector("#board");
const msg = document.getElementById("msg");
const btnReset = document.getElementById("reset");
const CELLS = 9;
const MSG1 = "Player One Turn";
const MSG2 = "Player Two Turn";
let count = 9;
let resultToShow = document.querySelectorAll('.line');
// log(resultToShow)
for (let i = 1; i <= CELLS; i++) {
  // for (let j = 1; j < rows; j++) {
  const gridCell = document.createElement("div");
  gridCell.id = `c${i}`;
  gridCell.setAttribute("data-empty", "none");
  gridCell.classList.add("cell");
  // gridCell.textContent = count++;
  playField.appendChild(gridCell);
  gridCell.addEventListener("click", checkCell);
  // }
}

let divs = document.querySelectorAll(".cell");

// log(playField)

let isPlayerOneTurn = true;
let haveWinner = false;
function checkCell(e) {
  if (!haveWinner) {
    count--;
    if (e.target.dataset.empty == "none") {
      if (isPlayerOneTurn) {
        e.target.innerText = "X";
        e.target.classList.add("x");
        isPlayerOneTurn = false;
        msg.innerText = MSG2;
        if (checkWinner("X")) {
          // X player
          msg.innerText = "Player One is Winner";
          haveWinner = true;
        }
      } else {
        e.target.innerText = "O";
        e.target.classList.add("o");
        isPlayerOneTurn = true;
        msg.innerText = MSG1;
        if (checkWinner("O")) {
          // O player
          msg.innerText = "Player Two is Winner";
          haveWinner = true;
        }
      }
      e.target.dataset.empty = "set";
    }
    log(count)
    if( !haveWinner && count == 0){
      msg.textContent = 'Nobody is winner'
    }
  }
}

function checkWinner(player) {
  if (
    divs[0].textContent == player &&
    divs[1].textContent == player &&
    divs[2].textContent == player
  )
   { 
    resultToShow[0].classList.add('winner-line');
     return true;}
  if (
    divs[3].textContent == player &&
    divs[4].textContent == player &&
    divs[5].textContent == player
  )
  { 
    resultToShow[1].classList.add('winner-line');
     return true;}
  if (
    divs[6].textContent == player &&
    divs[7].textContent == player &&
    divs[8].textContent == player
  )
  { 
    resultToShow[2].classList.add('winner-line');
     return true;}

  if (
    divs[0].textContent == player &&
    divs[3].textContent == player &&
    divs[6].textContent == player
  )
  { 
    resultToShow[3].classList.add('winner-line');
     return true;}
  if (
    divs[1].textContent == player &&
    divs[4].textContent == player &&
    divs[7].textContent == player
  )
  { 
    resultToShow[4].classList.add('winner-line');
     return true;}
  if (
    divs[2].textContent == player &&
    divs[5].textContent == player &&
    divs[8].textContent == player
  )
  { 
    resultToShow[5].classList.add('winner-line');
     return true;}

  if (
    divs[0].textContent == player &&
    divs[4].textContent == player &&
    divs[8].textContent == player
  )
  { 
    resultToShow[6].classList.add('winner-line');
     return true;}
  if (
    divs[2].textContent == player &&
    divs[4].textContent == player &&
    divs[6].textContent == player
  )
  { 
    resultToShow[7].classList.add('winner-line');
     return true;}
}

btnReset.addEventListener("click", () => {
  isPlayerOneTurn = true;
  haveWinner = false;
  count = 9;
  for (let i = 0; i <= 8; i++) {
    divs[i].dataset.empty = "none";
    divs[i].classList.remove("x", "o");
    divs[i].textContent = "";
    msg.textContent = MSG1;
    resultToShow[i].classList.remove('winner-line');
  }
});
