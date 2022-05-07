let fields = [];
let currentShape = 'X';
let cubeCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function renderHeadline() {
    document.getElementById('headLine').innerHTML = `Player <span>${currentShape}</span>`;
}


function firstTimeCubesdisplay() {
    for (let n = 1; n < 10; n++) {
        document.getElementById(`cube-${n}1`).classList.add('animation-rotation');
        document.getElementById(`cube-${n}2`).classList.add('animation-rotation');
        document.getElementById(`cube-${n}3`).classList.add('animation-rotation');
        document.getElementById(`cube-${n}4`).classList.add('animation-rotation');
        document.getElementById(`cube-${n}5`).classList.add('animation-rotation');
        document.getElementById(`cube-${n}6`).classList.add('animation-rotation');
        document.getElementById(`cube-${n}7`).classList.add('animation-rotation');
        document.getElementById(`cube-${n}8`).classList.add('animation-rotation');
        document.getElementById(`cube-${n}9`).classList.add('animation-rotation');
    }
    displayTicTacToe();
}


function displayTicTacToe() {
    document.getElementById('cube-11').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-12').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-13').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-15').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-18').firstElementChild.classList.add('fullaqua');

    document.getElementById('cube-22').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-25').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-28').firstElementChild.classList.add('fullaqua');

    document.getElementById('cube-31').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-32').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-33').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-34').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-37').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-38').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-39').firstElementChild.classList.add('fullaqua');


    document.getElementById('cube-41').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-42').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-43').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-45').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-48').firstElementChild.classList.add('fullaqua');



    document.getElementById('cube-61').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-62').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-63').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-64').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-67').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-68').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-69').firstElementChild.classList.add('fullaqua');


    document.getElementById('cube-71').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-72').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-73').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-75').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-78').firstElementChild.classList.add('fullaqua');



    document.getElementById('cube-91').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-92').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-93').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-94').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-95').firstElementChild.classList.add('halfaqua');
    document.getElementById('cube-96').firstElementChild.classList.add('halfaqua');
    document.getElementById('cube-97').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-98').firstElementChild.classList.add('fullaqua');
    document.getElementById('cube-99').firstElementChild.classList.add('fullaqua');
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
    renderHeadline();
    winCheckingX();
    winCheckingO();
}


function winCheckingX() {
    if (fields[1] == 'X' && fields[2] == 'X' && fields[3] == 'X') {
        winnerDisplay(1, 2, 3, 'X');
        console.log('X winning');
    }
    if (fields[4] == 'X' && fields[5] == 'X' && fields[6] == 'X') {
        winnerDisplay(4, 5, 6, 'X');
        console.log('X winning');
    }
    if (fields[7] == 'X' && fields[8] == 'X' && fields[9] == 'X') {
        winnerDisplay(7, 8, 9, 'X');
        console.log('X winning');
    }
    if (fields[1] == 'X' && fields[4] == 'X' && fields[7] == 'X') {
        winnerDisplay(1, 4, 7, 'X');
        console.log('X winning');
    }
    if (fields[2] == 'X' && fields[5] == 'X' && fields[8] == 'X') {
        winnerDisplay(2, 5, 8, 'X');
        console.log('X winning');
    }
    if (fields[3] == 'X' && fields[6] == 'X' && fields[9] == 'X') {
        winnerDisplay(3, 6, 9, 'X');
        console.log('X winning');
    }
    if (fields[1] == 'X' && fields[5] == 'X' && fields[9] == 'X') {
        winnerDisplay(1, 5, 9, 'X');
        console.log('X winning');
    }
    if (fields[3] == 'X' && fields[5] == 'X' && fields[7] == 'X') {
        winnerDisplay(3, 5, 7, 'X');
        console.log('X winning');
    }
}


function winCheckingO() {
    if (fields[1] == 'O' && fields[2] == 'O' && fields[3] == 'O') {
        winnerDisplay(1, 2, 3, 'O');
        console.log('O winning');
    }
    if (fields[4] == 'O' && fields[5] == 'O' && fields[6] == 'O') {
        winnerDisplay(4, 5, 6);
        console.log('O winning');
    }
    if (fields[7] == 'O' && fields[8] == 'O' && fields[9] == 'O') {
        winnerDisplay(7, 8, 9, 'O');
        console.log('O winning');
    }
    if (fields[1] == 'O' && fields[4] == 'O' && fields[7] == 'O') {
        winnerDisplay(1, 4, 7, 'O');
        console.log('O winning');
    }
    if (fields[2] == 'O' && fields[5] == 'O' && fields[8] == 'O') {
        winnerDisplay(2, 5, 8, 'O');
        console.log('O winning');
    }
    if (fields[3] == 'O' && fields[6] == 'O' && fields[9] == 'O') {
        winnerDisplay(3, 6, 9, 'O');
        console.log('O winning');
    }
    if (fields[1] == 'O' && fields[5] == 'O' && fields[9] == 'O') {
        winnerDisplay(1, 5, 9, 'O');
        console.log('O winning');
    }
    if (fields[3] == 'O' && fields[5] == 'O' && fields[7] == 'O') {
        winnerDisplay(3, 5, 7, 'O');
        console.log('O winning');
    }
}


function winnerDisplay(first, secound, third, winner) {
    cubeCount.splice(cubeCount.indexOf(first), 1);
    cubeCount.splice(cubeCount.indexOf(secound), 1);
    cubeCount.splice(cubeCount.indexOf(third), 1);
    renderWinnerHeadline(winner);
    setTimeout(removeCubes, 1000);
}


function renderWinnerHeadline(winner) {
    document.getElementById('headLine').innerHTML = `Player <span>${winner}</span> wins`;
}


function removeCubes() {
    document.getElementById('firdthorzontalline').classList.remove('scale-in-hor-center');
    document.getElementById('secondhorzontalline').classList.remove('scale-in-hor-center');
    document.getElementById('firdtvertikalline').classList.remove('scale-in-ver-center');
    document.getElementById('secoundtvertikalline').classList.remove('scale-in-ver-center');

    document.getElementById('firdthorzontalline').classList.add('scale-out-horizontal');
    document.getElementById('secondhorzontalline').classList.add('scale-out-horizontal');
    document.getElementById('firdtvertikalline').classList.add('scale-out-vertical');
    document.getElementById('secoundtvertikalline').classList.add('scale-out-vertical');



    for (let i = 0; i < cubeCount.length; i++) {
        let n = cubeCount[i];


        for (let index = 0; index < document.getElementById('cube-11').children.length; index++) {

            document.getElementById(`cube-${n}1`).children[index].classList.add('animation-rotationopacity0');
            document.getElementById(`cube-${n}2`).children[index].classList.add('animation-rotationopacity0');
            document.getElementById(`cube-${n}3`).children[index].classList.add('animation-rotationopacity0');
            document.getElementById(`cube-${n}4`).children[index].classList.add('animation-rotationopacity0');
            document.getElementById(`cube-${n}5`).children[index].classList.add('animation-rotationopacity0');
            document.getElementById(`cube-${n}6`).children[index].classList.add('animation-rotationopacity0');
            document.getElementById(`cube-${n}7`).children[index].classList.add('animation-rotationopacity0');
            document.getElementById(`cube-${n}8`).children[index].classList.add('animation-rotationopacity0');
            document.getElementById(`cube-${n}9`).children[index].classList.add('animation-rotationopacity0');
        }
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