const log = console.log;
// const columnLetters = ["a", "b", "c"];
const playField = document.querySelector("#board");
const msg = document.getElementById("msg");
const CELLS = 9;


for (let i = 1; i <= CELLS; i++) {
  // for (let j = 1; j < rows; j++) {
    const gridCell = document.createElement("div");
    gridCell.id = `c${i}`;
    gridCell.setAttribute("data-empty","none");
    gridCell.classList.add("cell");
    playField.appendChild(gridCell);
    gridCell.addEventListener("click",checkCell )
  // }
}

log(playField)

let isPlayerOneTurn = true; 

function checkCell(e) {
  if(e.target.dataset.empty == 'none'){

    if(isPlayerOneTurn){
      e.target.innerText = "X"
      isPlayerOneTurn = false
    }else{
      e.target.innerText = "O"
      isPlayerOneTurn= true
    }
    e.target.dataset.empty = 'set';
  }

  
}
