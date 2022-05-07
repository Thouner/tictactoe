let fields = [];
let currentShape = '';
let cubeCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function renderStartHeadline() {
    document.getElementById('headLine').innerHTML = `click to <span>start</span> the game`;
}


function renderSelectHeadline() {
    document.getElementById('headLine').innerHTML = `Who starts <span>?</span>`;
}


function renderPlayerHeadline() {
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
    document.getElementById('cube-11').firstElementChild.classList.add('half-beforeright');
    document.getElementById('cube-12').firstElementChild.classList.add('half-T-top');
    document.getElementById('cube-13').firstElementChild.classList.add('half-beforeleft');
    document.getElementById('cube-15').firstElementChild.classList.add('halfvertikalaqua');
    document.getElementById('cube-18').firstElementChild.classList.add('half-beforebottum');

    document.getElementById('cube-22').firstElementChild.classList.add('half-beforetop');
    document.getElementById('cube-25').firstElementChild.classList.add('halfvertikalaqua');
    document.getElementById('cube-28').firstElementChild.classList.add('half-beforebottum');

    document.getElementById('cube-31').firstElementChild.classList.add('half-left-bottum');
    document.getElementById('cube-32').firstElementChild.classList.add('halfaqua');
    document.getElementById('cube-33').firstElementChild.classList.add('half-beforeleft');
    document.getElementById('cube-34').firstElementChild.classList.add('halfvertikalaqua');
    document.getElementById('cube-37').firstElementChild.classList.add('half-left-top');
    document.getElementById('cube-38').firstElementChild.classList.add('halfaqua');
    document.getElementById('cube-39').firstElementChild.classList.add('half-beforeleft');


    document.getElementById('cube-41').firstElementChild.classList.add('half-beforeright');
    document.getElementById('cube-42').firstElementChild.classList.add('half-T-top');
    document.getElementById('cube-43').firstElementChild.classList.add('half-beforeleft');
    document.getElementById('cube-45').firstElementChild.classList.add('halfvertikalaqua');
    document.getElementById('cube-48').firstElementChild.classList.add('half-beforebottum');


    document.getElementById('cube-52').firstElementChild.classList.add('half-A-top');
    document.getElementById('cube-54').firstElementChild.classList.add('half-A-center-left');
    document.getElementById('cube-55').firstElementChild.classList.add('half-A-line');
    document.getElementById('cube-56').firstElementChild.classList.add('half-A-center-right');
    document.getElementById('cube-57').firstElementChild.classList.add('half-A-left');
    document.getElementById('cube-59').firstElementChild.classList.add('half-A-right');


    document.getElementById('cube-61').firstElementChild.classList.add('half-left-bottum');
    document.getElementById('cube-62').firstElementChild.classList.add('halfaqua');
    document.getElementById('cube-63').firstElementChild.classList.add('half-beforeleft');
    document.getElementById('cube-64').firstElementChild.classList.add('halfvertikalaqua');
    document.getElementById('cube-67').firstElementChild.classList.add('half-left-top');
    document.getElementById('cube-68').firstElementChild.classList.add('halfaqua');
    document.getElementById('cube-69').firstElementChild.classList.add('half-beforeleft');


    document.getElementById('cube-71').firstElementChild.classList.add('half-beforeright');
    document.getElementById('cube-72').firstElementChild.classList.add('half-T-top');
    document.getElementById('cube-73').firstElementChild.classList.add('half-beforeleft');
    document.getElementById('cube-75').firstElementChild.classList.add('halfvertikalaqua');
    document.getElementById('cube-78').firstElementChild.classList.add('half-beforebottum');

    document.getElementById('cube-81').firstElementChild.classList.add('top-leftO');
    document.getElementById('cube-82').firstElementChild.classList.add('top-centerO');
    document.getElementById('cube-83').firstElementChild.classList.add('top-rightO');
    document.getElementById('cube-84').firstElementChild.classList.add('left-centerO');
    document.getElementById('cube-85').firstElementChild.classList.add('center-centerO');
    document.getElementById('cube-86').firstElementChild.classList.add('right-centerO');
    document.getElementById('cube-87').firstElementChild.classList.add('bottum-leftO');
    document.getElementById('cube-88').firstElementChild.classList.add('bottum-centerO');
    document.getElementById('cube-89').firstElementChild.classList.add('bottum-rightO');

    document.getElementById('cube-91').firstElementChild.classList.add('half-left-bottum');
    document.getElementById('cube-92').firstElementChild.classList.add('halfaqua');
    document.getElementById('cube-93').firstElementChild.classList.add('half-beforeleft');
    document.getElementById('cube-94').firstElementChild.classList.add('half-T-left');
    document.getElementById('cube-95').firstElementChild.classList.add('half-beforeleft');
    document.getElementById('cube-97').firstElementChild.classList.add('half-left-top');
    document.getElementById('cube-98').firstElementChild.classList.add('halfaqua');
    document.getElementById('cube-99').firstElementChild.classList.add('half-beforeleft');

}


function renderSelection() {
    document.getElementById('renderselection').classList.add('d-none');
    removeAnimation();
    setTimeout(addAnimation, 1);
    renderSelectHeadline();
    document.getElementById('selectx').classList.remove('d-none');
    document.getElementById('selecto').classList.remove('d-none');
}


function selectShape(shape) {
    currentShape = shape;
    renderPlayerHeadline();
    document.getElementById('selectx').classList.add('d-none');
    document.getElementById('selecto').classList.add('d-none');
    for (let i = 1; i < 10; i++) {
        document.getElementById(`selected${i}`).classList.remove('d-none');
    }

}



function removeAnimation() {
    for (let n = 1; n < 10; n++) {

        document.getElementById(`cube-${n}1`).classList.remove('animation-rotation');
        document.getElementById(`cube-${n}2`).classList.remove('animation-rotation');
        document.getElementById(`cube-${n}3`).classList.remove('animation-rotation');
        document.getElementById(`cube-${n}4`).classList.remove('animation-rotation');
        document.getElementById(`cube-${n}5`).classList.remove('animation-rotation');
        document.getElementById(`cube-${n}6`).classList.remove('animation-rotation');
        document.getElementById(`cube-${n}7`).classList.remove('animation-rotation');
        document.getElementById(`cube-${n}8`).classList.remove('animation-rotation');
        document.getElementById(`cube-${n}9`).classList.remove('animation-rotation');


        document.getElementById('cube-11').firstElementChild.classList.remove('half-beforeright');
        document.getElementById('cube-12').firstElementChild.classList.remove('half-T-top');
        document.getElementById('cube-13').firstElementChild.classList.remove('half-beforeleft');
        document.getElementById('cube-15').firstElementChild.classList.remove('halfvertikalaqua');
        document.getElementById('cube-18').firstElementChild.classList.remove('half-beforebottum');

        document.getElementById('cube-22').firstElementChild.classList.remove('half-beforetop');
        document.getElementById('cube-25').firstElementChild.classList.remove('halfvertikalaqua');
        document.getElementById('cube-28').firstElementChild.classList.remove('half-beforebottum');

        document.getElementById('cube-31').firstElementChild.classList.remove('half-left-bottum');
        document.getElementById('cube-32').firstElementChild.classList.remove('halfaqua');
        document.getElementById('cube-33').firstElementChild.classList.remove('half-beforeleft');
        document.getElementById('cube-34').firstElementChild.classList.remove('halfvertikalaqua');
        document.getElementById('cube-37').firstElementChild.classList.remove('half-left-top');
        document.getElementById('cube-38').firstElementChild.classList.remove('halfaqua');
        document.getElementById('cube-39').firstElementChild.classList.remove('half-beforeleft');


        document.getElementById('cube-41').firstElementChild.classList.remove('half-beforeright');
        document.getElementById('cube-42').firstElementChild.classList.remove('half-T-top');
        document.getElementById('cube-43').firstElementChild.classList.remove('half-beforeleft');
        document.getElementById('cube-45').firstElementChild.classList.remove('halfvertikalaqua');
        document.getElementById('cube-48').firstElementChild.classList.remove('half-beforebottum');


        document.getElementById('cube-52').firstElementChild.classList.remove('half-A-top');
        document.getElementById('cube-54').firstElementChild.classList.remove('half-A-center-left');
        document.getElementById('cube-55').firstElementChild.classList.remove('half-A-line');
        document.getElementById('cube-56').firstElementChild.classList.remove('half-A-center-right');
        document.getElementById('cube-57').firstElementChild.classList.remove('half-A-left');
        document.getElementById('cube-59').firstElementChild.classList.remove('half-A-right');


        document.getElementById('cube-61').firstElementChild.classList.remove('half-left-bottum');
        document.getElementById('cube-62').firstElementChild.classList.remove('halfaqua');
        document.getElementById('cube-63').firstElementChild.classList.remove('half-beforeleft');
        document.getElementById('cube-64').firstElementChild.classList.remove('halfvertikalaqua');
        document.getElementById('cube-67').firstElementChild.classList.remove('half-left-top');
        document.getElementById('cube-68').firstElementChild.classList.remove('halfaqua');
        document.getElementById('cube-69').firstElementChild.classList.remove('half-beforeleft');


        document.getElementById('cube-71').firstElementChild.classList.remove('half-beforeright');
        document.getElementById('cube-72').firstElementChild.classList.remove('half-T-top');
        document.getElementById('cube-73').firstElementChild.classList.remove('half-beforeleft');
        document.getElementById('cube-75').firstElementChild.classList.remove('halfvertikalaqua');
        document.getElementById('cube-78').firstElementChild.classList.remove('half-beforebottum');

        document.getElementById('cube-81').firstElementChild.classList.remove('top-leftO');
        document.getElementById('cube-82').firstElementChild.classList.remove('top-centerO');
        document.getElementById('cube-83').firstElementChild.classList.remove('top-rightO');
        document.getElementById('cube-84').firstElementChild.classList.remove('left-centerO');
        document.getElementById('cube-85').firstElementChild.classList.remove('center-centerO');
        document.getElementById('cube-86').firstElementChild.classList.remove('right-centerO');
        document.getElementById('cube-87').firstElementChild.classList.remove('bottum-leftO');
        document.getElementById('cube-88').firstElementChild.classList.remove('bottum-centerO');
        document.getElementById('cube-89').firstElementChild.classList.remove('bottum-rightO');

        document.getElementById('cube-91').firstElementChild.classList.remove('half-left-bottum');
        document.getElementById('cube-92').firstElementChild.classList.remove('halfaqua');
        document.getElementById('cube-93').firstElementChild.classList.remove('half-beforeleft');
        document.getElementById('cube-94').firstElementChild.classList.remove('half-T-left');
        document.getElementById('cube-95').firstElementChild.classList.remove('half-beforeleft');
        document.getElementById('cube-97').firstElementChild.classList.remove('half-left-top');
        document.getElementById('cube-98').firstElementChild.classList.remove('halfaqua');
        document.getElementById('cube-99').firstElementChild.classList.remove('half-beforeleft');

    }
};

function addAnimation() {

    document.getElementById(`cube-41`).firstElementChild.classList.add('top-leftX');
    document.getElementById(`cube-43`).firstElementChild.classList.add('top-rightX');
    document.getElementById(`cube-45`).firstElementChild.classList.add('center-centerX');
    document.getElementById(`cube-47`).firstElementChild.classList.add('bottum-leftX');
    document.getElementById(`cube-49`).firstElementChild.classList.add('bottum-rightX');

    document.getElementById(`cube-61`).firstElementChild.classList.add('top-leftO');
    document.getElementById(`cube-62`).firstElementChild.classList.add('top-centerO');
    document.getElementById(`cube-63`).firstElementChild.classList.add('top-rightO');
    document.getElementById(`cube-64`).firstElementChild.classList.add('left-centerO');
    document.getElementById(`cube-65`).firstElementChild.classList.add('center-centerO');
    document.getElementById(`cube-66`).firstElementChild.classList.add('right-centerO');
    document.getElementById(`cube-67`).firstElementChild.classList.add('bottum-leftO');
    document.getElementById(`cube-68`).firstElementChild.classList.add('bottum-centerO');
    document.getElementById(`cube-69`).firstElementChild.classList.add('bottum-rightO');




    document.getElementById('cube-11').children[2].classList.add('half-beforebottum');
    document.getElementById('cube-12').children[2].classList.add('half-T-left');
    document.getElementById('cube-13').children[2].classList.add('half-beforetop');
    document.getElementById('cube-15').children[2].classList.add('halfaqua');
    document.getElementById('cube-18').children[2].classList.add('half-beforeleft');

    document.getElementById('cube-22').children[2].classList.add('half-beforeright');
    document.getElementById('cube-25').children[2].classList.add('halfaqua');
    document.getElementById('cube-28').children[2].classList.add('half-beforeleft');

    document.getElementById('cube-31').children[2].classList.add('half-left-top');
    document.getElementById('cube-32').children[2].classList.add('halfvertikalaqua');
    document.getElementById('cube-33').children[2].classList.add('half-beforetop');
    document.getElementById('cube-34').children[2].classList.add('halfaqua');
    document.getElementById('cube-37').children[2].classList.add('half-right-bottum');
    document.getElementById('cube-38').children[2].classList.add('halfvertikalaqua');
    document.getElementById('cube-39').children[2].classList.add('half-beforetop');


    document.getElementById('cube-41').children[2].classList.add('half-beforebottum');
    document.getElementById('cube-42').children[2].classList.add('half-T-left');
    document.getElementById('cube-43').children[2].classList.add('half-beforetop');
    document.getElementById('cube-45').children[2].classList.add('halfaqua');
    document.getElementById('cube-48').children[2].classList.add('half-beforeleft');


    document.getElementById('cube-52').children[2].classList.add('half-A-top');
    document.getElementById('cube-54').children[2].classList.add('half-A-center-left');
    document.getElementById('cube-55').children[2].classList.add('half-A-line');
    document.getElementById('cube-56').children[2].classList.add('half-A-center-right');
    document.getElementById('cube-57').children[2].classList.add('half-A-left');
    document.getElementById('cube-59').children[2].classList.add('half-A-right');


    document.getElementById('cube-61').children[2].classList.add('half-left-top');
    document.getElementById('cube-62').children[2].classList.add('halfvertikalaqua');
    document.getElementById('cube-63').children[2].classList.add('half-beforetop');
    document.getElementById('cube-64').children[2].classList.add('halfaqua');
    document.getElementById('cube-67').children[2].classList.add('half-right-bottum');
    document.getElementById('cube-68').children[2].classList.add('halfvertikalaqua');
    document.getElementById('cube-69').children[2].classList.add('half-beforetop');


    document.getElementById('cube-71').children[2].classList.add('half-beforebottum');
    document.getElementById('cube-72').children[2].classList.add('half-T-left');
    document.getElementById('cube-73').children[2].classList.add('half-beforetop');
    document.getElementById('cube-75').children[2].classList.add('halfaqua');
    document.getElementById('cube-78').children[2].classList.add('half-beforeleft');

    document.getElementById('cube-81').children[2].classList.add('bottum-leftO');
    document.getElementById('cube-82').children[2].classList.add('left-centerO');
    document.getElementById('cube-83').children[2].classList.add('top-leftO');
    document.getElementById('cube-84').children[2].classList.add('bottum-centerO');
    document.getElementById('cube-85').children[2].classList.add('center-centerO');
    document.getElementById('cube-86').children[2].classList.add('top-centerO');
    document.getElementById('cube-87').children[2].classList.add('bottum-rightO');
    document.getElementById('cube-88').children[2].classList.add('right-centerO');
    document.getElementById('cube-89').children[2].classList.add('top-rightO');

    document.getElementById('cube-91').children[2].classList.add('half-left-top');
    document.getElementById('cube-92').children[2].classList.add('halfvertikalaqua');
    document.getElementById('cube-93').children[2].classList.add('half-beforetop');
    document.getElementById('cube-94').children[2].classList.add('half-T-right');
    document.getElementById('cube-95').children[2].classList.add('half-beforetop');
    document.getElementById('cube-97').children[2].classList.add('half-right-bottum');
    document.getElementById('cube-98').children[2].classList.add('halfvertikalaqua');
    document.getElementById('cube-99').children[2].classList.add('half-beforetop');

    for (let n = 1; n < 10; n++) {

        document.getElementById(`cube-${n}2`).classList.add('animation-rotation');
        document.getElementById(`cube-${n}3`).classList.add('animation-rotation');
        document.getElementById(`cube-${n}4`).classList.add('animation-rotation');
        document.getElementById(`cube-${n}1`).classList.add('animation-rotation');
        document.getElementById(`cube-${n}5`).classList.add('animation-rotation');
        document.getElementById(`cube-${n}6`).classList.add('animation-rotation');
        document.getElementById(`cube-${n}7`).classList.add('animation-rotation');
        document.getElementById(`cube-${n}8`).classList.add('animation-rotation');
        document.getElementById(`cube-${n}9`).classList.add('animation-rotation');
    }
    setTimeout(removeTicTacToe, 1500);
};


function removeTicTacToe() {
    document.getElementById('cube-11').children[2].classList.remove('half-beforebottum');
    document.getElementById('cube-12').children[2].classList.remove('half-T-left');
    document.getElementById('cube-13').children[2].classList.remove('half-beforetop');
    document.getElementById('cube-15').children[2].classList.remove('halfaqua');
    document.getElementById('cube-18').children[2].classList.remove('half-beforeleft');

    document.getElementById('cube-22').children[2].classList.remove('half-beforeright');
    document.getElementById('cube-25').children[2].classList.remove('halfaqua');
    document.getElementById('cube-28').children[2].classList.remove('half-beforeleft');

    document.getElementById('cube-31').children[2].classList.remove('half-left-top');
    document.getElementById('cube-32').children[2].classList.remove('halfaqua');
    document.getElementById('cube-33').children[2].classList.remove('half-beforeleft');
    document.getElementById('cube-34').children[2].classList.remove('halfvertikalaqua');
    document.getElementById('cube-37').children[2].classList.remove('half-left-top');
    document.getElementById('cube-38').children[2].classList.remove('halfaqua');
    document.getElementById('cube-39').children[2].classList.remove('half-beforeleft');


    document.getElementById('cube-41').children[2].classList.remove('half-beforebottum');
    document.getElementById('cube-42').children[2].classList.remove('half-T-left');
    document.getElementById('cube-43').children[2].classList.remove('half-beforetop');
    document.getElementById('cube-45').children[2].classList.remove('halfaqua');
    document.getElementById('cube-48').children[2].classList.remove('half-beforeleft');


    document.getElementById('cube-52').children[2].classList.remove('half-A-top');
    document.getElementById('cube-54').children[2].classList.remove('half-A-center-left');
    document.getElementById('cube-55').children[2].classList.remove('half-A-line');
    document.getElementById('cube-56').children[2].classList.remove('half-A-center-right');
    document.getElementById('cube-57').children[2].classList.remove('half-A-left');
    document.getElementById('cube-59').children[2].classList.remove('half-A-right');


    document.getElementById('cube-61').children[2].classList.remove('half-left-top');
    document.getElementById('cube-62').children[2].classList.remove('halfaqua');
    document.getElementById('cube-63').children[2].classList.remove('half-beforeleft');
    document.getElementById('cube-64').children[2].classList.remove('halfvertikalaqua');
    document.getElementById('cube-67').children[2].classList.remove('half-left-top');
    document.getElementById('cube-68').children[2].classList.remove('halfaqua');
    document.getElementById('cube-69').children[2].classList.remove('half-beforeleft');


    document.getElementById('cube-71').children[2].classList.remove('half-beforebottum');
    document.getElementById('cube-72').children[2].classList.remove('half-T-left');
    document.getElementById('cube-73').children[2].classList.remove('half-beforetop');
    document.getElementById('cube-75').children[2].classList.remove('halfaqua');
    document.getElementById('cube-78').children[2].classList.remove('half-beforeleft');

    document.getElementById('cube-81').children[2].classList.remove('top-leftO');
    document.getElementById('cube-82').children[2].classList.remove('top-centerO');
    document.getElementById('cube-83').children[2].classList.remove('top-rightO');
    document.getElementById('cube-84').children[2].classList.remove('left-centerO');
    document.getElementById('cube-85').children[2].classList.remove('center-centerO');
    document.getElementById('cube-86').children[2].classList.remove('right-centerO');
    document.getElementById('cube-87').children[2].classList.remove('bottum-leftO');
    document.getElementById('cube-88').children[2].classList.remove('bottum-centerO');
    document.getElementById('cube-89').children[2].classList.remove('bottum-rightO');

    document.getElementById('cube-91').children[2].classList.remove('half-left-top');
    document.getElementById('cube-92').children[2].classList.remove('halfaqua');
    document.getElementById('cube-93').children[2].classList.remove('half-beforeleft');
    document.getElementById('cube-94').children[2].classList.remove('half-T-left');
    document.getElementById('cube-95').children[2].classList.remove('half-beforeleft');
    document.getElementById('cube-97').children[2].classList.remove('half-left-top');
    document.getElementById('cube-98').children[2].classList.remove('halfaqua');
    document.getElementById('cube-99').children[2].classList.remove('half-beforeleft');

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