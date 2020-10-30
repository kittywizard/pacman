//creating the grid
const squares = width * width;
const width = 28;

const layout = [];

const grid = document.querySelector(".grid");
let score = document.getElementById("score");

function createGrid() {
    for(let i = 0; i < squares; i++) {
        //create div element
        let div = document.createElement("div");

        grid.appendChild(div);
        //place it into the grid
    }
}

createGrid();