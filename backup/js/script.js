let fields = [];
let currentShape = 'X';




function renderHeadline() {
    document.getElementById('headLine').innerHTML = `Player <span>${currentShape}</span>`;
}


function selectField(n) {
    if (currentShape == 'X') {
        chooseX(n);
        fields[n] = currentShape;
        currentShape = 'O';
    } else {
        chooseO(n);
        fields[n] = currentShape;
        currentShape = 'X';
    }
    document.getElementById(`selected${n}`).classList.add('d-none');
    winCheckingX();
    winCheckingO();
    renderHeadline();
}


function winCheckingX() {
    if (fields[1] == 'X' && fields[2] == 'X' && fields[3] == 'X') {
        winnerDisplay(1, 2, 3);
        console.log('X winning');
    }
    if (fields[4] == 'X' && fields[5] == 'X' && fields[6] == 'X') {
        winnerDisplay(4, 5, 6);
        console.log('X winning');
    }
    if (fields[7] == 'X' && fields[8] == 'X' && fields[9] == 'X') {
        winnerDisplay(7, 8, 9);
        console.log('X winning');
    }
    if (fields[1] == 'X' && fields[4] == 'X' && fields[7] == 'X') {
        winnerDisplay(1, 4, 7);
        console.log('X winning');
    }
    if (fields[2] == 'X' && fields[5] == 'X' && fields[8] == 'X') {
        winnerDisplay(2, 5, 8);
        console.log('X winning');
    }
    if (fields[3] == 'X' && fields[6] == 'X' && fields[9] == 'X') {
        winnerDisplay(3, 6, 9);
        console.log('X winning');
    }
    if (fields[1] == 'X' && fields[5] == 'X' && fields[9] == 'X') {
        winnerDisplay(1, 5, 9);
        console.log('X winning');
    }
    if (fields[3] == 'X' && fields[5] == 'X' && fields[7] == 'X') {
        winnerDisplay(3, 5, 7);
        console.log('X winning');
    }
}




function winCheckingO() {
    if (fields[1] == 'O' && fields[2] == 'O' && fields[3] == 'O') {
        winnerDisplay(1, 2, 3);
        console.log('O winning');
    }
    if (fields[4] == 'O' && fields[5] == 'O' && fields[6] == 'O') {
        winnerDisplay(4, 5, 6);
        console.log('O winning');
    }
    if (fields[7] == 'O' && fields[8] == 'O' && fields[9] == 'O') {
        winnerDisplay(7, 8, 9);
        console.log('O winning');
    }
    if (fields[1] == 'O' && fields[4] == 'O' && fields[7] == 'O') {
        winnerDisplay(1, 4, 7);
        console.log('O winning');
    }
    if (fields[2] == 'O' && fields[5] == 'O' && fields[8] == 'O') {
        winnerDisplay(2, 5, 8);
        console.log('O winning');
    }
    if (fields[3] == 'O' && fields[6] == 'O' && fields[9] == 'O') {
        winnerDisplay(3, 6, 9);
        console.log('O winning');
    }
    if (fields[1] == 'O' && fields[5] == 'O' && fields[9] == 'O') {
        winnerDisplay(1, 5, 9);
        console.log('O winning');
    }
    if (fields[3] == 'O' && fields[5] == 'O' && fields[7] == 'O') {
        winnerDisplay(3, 5, 7);
        console.log('O winning');
    }
}

let cubeCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function winnerDisplay(first, secound, third) {
    cubeCount.splice(cubeCount.indexOf(first), 1);
    cubeCount.splice(cubeCount.indexOf(secound), 1);
    cubeCount.splice(cubeCount.indexOf(third), 1);
    setTimeout(removeCubes, 1500);
}


function removeCubes() {
    for (let i = 0; i < cubeCount.length; i++) {
        let n = cubeCount[i];
        document.getElementById(`cube-${n}1`).classList.remove('animation-rotation');
        document.getElementById(`cube-${n}2`).classList.remove('animation-rotation');
        document.getElementById(`cube-${n}3`).classList.remove('animation-rotation');
        document.getElementById(`cube-${n}4`).classList.remove('animation-rotation');
        document.getElementById(`cube-${n}5`).classList.remove('animation-rotation');
        document.getElementById(`cube-${n}6`).classList.remove('animation-rotation');
        document.getElementById(`cube-${n}7`).classList.remove('animation-rotation');
        document.getElementById(`cube-${n}8`).classList.remove('animation-rotation');
        document.getElementById(`cube-${n}9`).classList.remove('animation-rotation');

        document.getElementById(`cube-${n}1`).classList.add('animation-rotationopacity0');
        document.getElementById(`cube-${n}2`).classList.add('animation-rotationopacity0');
        document.getElementById(`cube-${n}3`).classList.add('animation-rotationopacity0');
        document.getElementById(`cube-${n}4`).classList.add('animation-rotationopacity0');
        document.getElementById(`cube-${n}5`).classList.add('animation-rotationopacity0');
        document.getElementById(`cube-${n}6`).classList.add('animation-rotationopacity0');
        document.getElementById(`cube-${n}7`).classList.add('animation-rotationopacity0');
        document.getElementById(`cube-${n}8`).classList.add('animation-rotationopacity0');
        document.getElementById(`cube-${n}9`).classList.add('animation-rotationopacity0');
    }
}


function chooseX(n) {
    rotateCube(n);
    displayX(n);
}


function chooseO(n) {
    rotateCube(n);
    displayO(n);
}


function rotateCube(n) {
    document.getElementById(`cube-${n}1`).classList.add('delay-01', 'animation-rotation');
    document.getElementById(`cube-${n}2`).classList.add('delay-02', 'animation-rotation');
    document.getElementById(`cube-${n}3`).classList.add('delay-03', 'animation-rotation');
    document.getElementById(`cube-${n}4`).classList.add('delay-02', 'animation-rotation');
    document.getElementById(`cube-${n}5`).classList.add('delay-03', 'animation-rotation');
    document.getElementById(`cube-${n}6`).classList.add('delay-04', 'animation-rotation');
    document.getElementById(`cube-${n}7`).classList.add('delay-03', 'animation-rotation');
    document.getElementById(`cube-${n}8`).classList.add('delay-04', 'animation-rotation');
    document.getElementById(`cube-${n}9`).classList.add('delay-05', 'animation-rotation');
}


function displayX(n) {
    document.getElementById(`cube-${n}1`).firstElementChild.classList.add('top-leftX');
    document.getElementById(`cube-${n}3`).firstElementChild.classList.add('top-rightX');
    document.getElementById(`cube-${n}5`).firstElementChild.classList.add('center-centerX');
    document.getElementById(`cube-${n}7`).firstElementChild.classList.add('bottum-leftX');
    document.getElementById(`cube-${n}9`).firstElementChild.classList.add('bottum-rightX');
}


function displayO(n) {
    document.getElementById(`cube-${n}1`).firstElementChild.classList.add('top-leftO');
    document.getElementById(`cube-${n}2`).firstElementChild.classList.add('top-centerO');
    document.getElementById(`cube-${n}3`).firstElementChild.classList.add('top-rightO');
    document.getElementById(`cube-${n}4`).firstElementChild.classList.add('left-centerO');
    document.getElementById(`cube-${n}5`).firstElementChild.classList.add('center-centerO');
    document.getElementById(`cube-${n}6`).firstElementChild.classList.add('right-centerO');
    document.getElementById(`cube-${n}7`).firstElementChild.classList.add('bottum-leftO');
    document.getElementById(`cube-${n}8`).firstElementChild.classList.add('bottum-centerO');
    document.getElementById(`cube-${n}9`).firstElementChild.classList.add('bottum-rightO');
}