//creating the grid
const width = 28;
const squares = width * width;

const grid = document.querySelector(".grid");
const scoreDisplay = document.getElementById("score");
let squareArr = [];
let direction = 1;
let score = 0;

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]

function createBoard() {
    for(let i = 0; i < layout.length; i++) {
        const div = document.createElement('div');
        grid.appendChild(div);
        squareArr.push(div);
        //have to apply the class based on the number

        switch(layout[i]){
            case 0:
                //pac-dots
                squareArr[i].classList.add('pac-dots'); 
                break;
            case 1:
                squareArr[i].classList.add('wall'); 
                break;
            case 2: 
                squareArr[i].classList.add('ghost-lair');
                break;
            case 3:
                squareArr[i].classList.add('power-pellets');
                break;
            case 4:
                squareArr[i].classList.add('empty');
                break;
        }
    }
}
  //28 * 28 = 784
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

createBoard();

let pacmanCurrentIndex = 500;
squareArr[pacmanCurrentIndex].classList.add('pacman');

function gameControl(e){
    squareArr[pacmanCurrentIndex].classList.remove('pacman');
    switch(e.keyCode) {
        case 87:
            //w - up
            //check the square directly above the current index
            if (!squareArr[pacmanCurrentIndex - width].classList.contains('wall') &&
                pacmanCurrentIndex - width >= 0) 
                pacmanCurrentIndex -=width;
            break;

        case 65:
            //a - left
            if (!squareArr[pacmanCurrentIndex - 1].classList.contains('wall') &&
                pacmanCurrentIndex % width !== 0) 
                pacmanCurrentIndex -=1;
            if(pacmanCurrentIndex === 364) pacmanCurrentIndex = 391;
            break;

        case 83:
            //s - down
            if (!squareArr[pacmanCurrentIndex + width].classList.contains('wall') &&
                !squareArr[pacmanCurrentIndex + width].classList.contains('ghost-lair') &&
                pacmanCurrentIndex + width < width * width) 
                pacmanCurrentIndex += width;
            break;

        case 68:
            //d - right
            if (!squareArr[pacmanCurrentIndex + 1].classList.contains('wall') &&
                pacmanCurrentIndex % width < width -1) 
                pacmanCurrentIndex +=1;
            if(pacmanCurrentIndex === 391) pacmanCurrentIndex = 364;

            break;
    }
    squareArr[pacmanCurrentIndex].classList.add('pacman');
    pacdotEater();

}

function pacdotEater() {
    if (squareArr[pacmanCurrentIndex].classList.contains("pac-dots")) {
        score++;
        scoreDisplay.innerHTML = score;
        squareArr[pacmanCurrentIndex].classList.remove("pac-dots");
        }
}
//KeyCodes
    //W - 87
    //A - 65
    //S - 83
    //D - 68

    document.addEventListener('keyup', gameControl);
