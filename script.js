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

  //KeyCodes
    //W - 87
    //A - 65
    //S - 83
    //D - 68

createBoard();

//pacman's starting position
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
    eatPowerPellets();

}

function pacdotEater() {
    if (squareArr[pacmanCurrentIndex].classList.contains("pac-dots")) {
        score++;
        scoreDisplay.innerHTML = score;
        squareArr[pacmanCurrentIndex].classList.remove("pac-dots");
        }
}

function eatPowerPellets() {
    //if pacman index contains power pellet class
    if(squareArr[pacmanCurrentIndex].classList.contains("power-pellets")) {
        score += 10;
        scoreDisplay.innerHTML = score;

        squareArr[pacmanCurrentIndex].classList.remove("power-pellets");

        ghosts.forEach(element => element.isScared = true);

        setTimeout(() => ghosts.forEach(element => element.isScared = false), 10000);
    }

}

document.addEventListener('keyup', gameControl);

//creating all the ghost elements and then placing them on the board
class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className;
        this.startIndex = startIndex;
        this.speed = speed;

        this.currentIndex = startIndex;
        this.isScared = false;
        this.timerId = NaN;
    }
}

ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
];

//adding the class names to each element
ghosts.forEach(element => {
    squareArr[element.startIndex].classList.add(element.className);
    squareArr[element.startIndex].classList.add('ghost');
});

//invoking the move ghosts function
ghosts.forEach(element => moveGhosts(element));

//moves
function moveGhosts(ghost) {
    const directions = [-1, +1, -width, +width];

    //generate random number
    let randomDirection = directions[Math.floor(Math.random() * directions.length)];
    
    ghost.timerId = setInterval(function() {
        //if does not contain wall or another ghost
        if(!squareArr[ghost.currentIndex + randomDirection].classList.contains('ghost') &&
           !squareArr[ghost.currentIndex + randomDirection].classList.contains('wall')) 
        {
            squareArr[ghost.currentIndex].classList.remove(ghost.className);
            squareArr[ghost.currentIndex].classList.remove('ghost', 'scared-ghost');

            ghost.currentIndex += randomDirection;

            squareArr[ghost.currentIndex].classList.add(ghost.className);
            squareArr[ghost.currentIndex].classList.add('ghost');
        } else {
            randomDirection = directions[Math.floor(Math.random() * directions.length)];
        }

        if(ghost.isScared){
            squareArr[ghost.currentIndex].classList.add('scared-ghost');
        }

        if(ghost.isScared && squareArr[ghost.currentIndex].classList.contains("pacman")) {

            //remove class names
            squareArr[ghost.currentIndex].classList.remove("ghost", ghost.className, "scared-ghost");

            //send it back
            ghost.currentIndex = ghost.startIndex;

            //add class names back in
            squareArr[ghost.currentIndex].classList.add("ghost", ghost.className);

            score += 100;
            scoreDisplay.innerHTML = score;
        }
    
    }, ghost.speed);
}

function gameOver() {
    if(squareArr[pacmanCurrentIndex].classList.contains("ghost") 
        && !squareArr[pacmanCurrentIndex].classList.contains('scared-ghost')) {
    //foreach ghost stop it moving
    ghosts.forEach(element => {
        clearInterval(ghost.timerId);
    });

    //remove eventlistener for key press

    //alert user game over

    }
    //if square w/ pacman has a ghost and it is NOT scared


    //reset?
}
