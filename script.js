const columnLetters = ["a", "b", "c"];
const playField = document.querySelector("#board");

const columns = 3;
const rows = 3;

for (let i = 0; i < columnLetters.length; i++) {
  for (let j = 0; j < rows; j++) {
    const gridCell = document.createElement("div");
    gridCell.id = `${columnLetters[i]}-${j}`;
    gridCell.classList.add("cell");
    playField.appendChild(gridCell);
  }
}
