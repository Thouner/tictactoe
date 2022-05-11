let fields = [];
let currentShape = '';
let cubeCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function renderStartHeadline() {
    document.getElementById('headLine').innerHTML = `click to <span>start</span> the game`;
}


function firstTimeCubesdisplay() {
    addCubeAnimation();
    displayTicTacToe();
}


function clickArea() {
    document.getElementById('renderselection').classList.remove('d-none');
}


function addCubeAnimation() {
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
}


function displayTicTacToe() {
    displayRow1T();
    displayRow1I();
    displayRow1C();
    displayRow2T();
    displayRow2A();
    displayRow2C();
    displayRow3T();
    displayRow3O();
    displayRow3E();
}


function renderSelection() {
    removeStartSelectionArea();
    removeCubeAnimation();
    removedisplayTicTacToe();
    setTimeout(add90DegAnimation, 1);
    renderSelectHeadline();
}


function removeStartSelectionArea() {
    document.getElementById('renderselection').classList.add('d-none');
}


function removeCubeAnimation() {
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
    }
}


function removedisplayTicTacToe() {
    removedisplayRow1T();
    removedisplayRow1I();
    removedisplayRow1C();
    removedisplayRow2T();
    removedisplayRow2A();
    removedisplayRow2C();
    removedisplayRow3T();
    removedisplayRow3O();
    removedisplayRow3E();
};


function add90DegAnimation() {
    adddisplayXleft();
    adddisplayOleft();
    add90DegdisplayRow1T();
    add90DegdisplayRow1I();
    add90DegdisplayRow1C();
    add90DegdisplayRow2T();
    add90DegdisplayRow2A();
    add90DegdisplayRow2C();
    add90DegdisplayRow3T();
    add90DegdisplayRow3O();
    add90DegdisplayRow3E();
    addCubeAnimation();
    setTimeout(removeTicTacToe, 1500);
};


function renderSelectHeadline() {
    document.getElementById('headLine').innerHTML = `Who starts <span>?</span>`;
}


function removeTicTacToe() {
    remove90DegdisplayRow1T();
    remove90DegdisplayRow1I();
    remove90DegdisplayRow1C();
    remove90DegdisplayRow2T();
    remove90DegdisplayRow2A();
    remove90DegdisplayRow2C();
    remove90DegdisplayRow3T();
    remove90DegdisplayRow3O();
    remove90DegdisplayRow3E();
    displaySelectXandO();
}


function displaySelectXandO() {
    document.getElementById('selectx').classList.remove('d-none');
    document.getElementById('selecto').classList.remove('d-none');
}


function selectShape(shape) {
    currentShape = shape;
    renderPlayerHeadline();
    removedisplayAeraSelectXandO();
    removedisplaySelectXandO()
    removeCubeAnimation();
    setTimeout(add90DegDiesplayXandO, 1);
    setTimeout(displaylines, 2300);
}


function renderPlayerHeadline() {
    document.getElementById('headLine').innerHTML = `Player <span>${currentShape}</span> Turn`;
}


function removedisplayAeraSelectXandO() {
    document.getElementById('selectx').classList.add('d-none');
    document.getElementById('selecto').classList.add('d-none');
}


function displaylines() {
    linesAnimatoinToggle();
    linesRemoveDnone();
    removeSelectfielsDnone();
    removeDelayFromCube();
    setTimeout(removeCubeAnimation, 1);
    removeCubeAnimation
}


function linesAnimatoinToggle() {
    document.getElementById('firdthorzontalline').classList.add('scale-in-hor-center');
    document.getElementById('secondhorzontalline').classList.add('scale-in-hor-center');
    document.getElementById('firdtvertikalline').classList.add('scale-in-ver-center');
    document.getElementById('secoundtvertikalline').classList.add('scale-in-ver-center');
    document.getElementById('firdthorzontalline').classList.remove('scale-out-horizontal');
    document.getElementById('secondhorzontalline').classList.remove('scale-out-horizontal');
    document.getElementById('firdtvertikalline').classList.remove('scale-out-vertical');
    document.getElementById('secoundtvertikalline').classList.remove('scale-out-vertical');
}


function linesRemoveDnone() {
    document.getElementById('firdthorzontalline').classList.remove('d-none');
    document.getElementById('secondhorzontalline').classList.remove('d-none');
    document.getElementById('firdtvertikalline').classList.remove('d-none');
    document.getElementById('secoundtvertikalline').classList.remove('d-none');
}


function removeSelectfielsDnone() {
    for (let i = 1; i < 10; i++) {
        document.getElementById(`selected${i}`).classList.remove('d-none');
    }
}


function removeDelayFromCube() {
    for (let i = 1; i < 10; i++) {
        for (let n = 1; n < 10; n++) {
            document.getElementById(`cube-${i}${n}`).classList.remove('delay-01', 'delay-02', 'delay-03', 'delay-04', 'delay-05', 'delay-06', 'delay-07', 'delay-08', 'delay-09', 'delay-10', 'delay-11', 'delay-12', 'delay-13', 'delay-14', 'delay-15', 'delay-16', 'delay-17');
        }
    }
}


function removedisplaySelectXandO() {
    removeDisplayXleft();
    removeDisplayOleft();
}


function removeDisplayXleft() {
    document.getElementById(`cube-41`).firstElementChild.classList.remove('top-leftX');
    document.getElementById(`cube-43`).firstElementChild.classList.remove('top-rightX');
    document.getElementById(`cube-45`).firstElementChild.classList.remove('center-centerX');
    document.getElementById(`cube-47`).firstElementChild.classList.remove('bottum-leftX');
    document.getElementById(`cube-49`).firstElementChild.classList.remove('bottum-rightX');
}


function removeDisplayOleft() {
    document.getElementById(`cube-61`).firstElementChild.classList.remove('top-leftO');
    document.getElementById(`cube-62`).firstElementChild.classList.remove('top-centerO');
    document.getElementById(`cube-63`).firstElementChild.classList.remove('top-rightO');
    document.getElementById(`cube-64`).firstElementChild.classList.remove('left-centerO');
    document.getElementById(`cube-65`).firstElementChild.classList.remove('center-centerO');
    document.getElementById(`cube-66`).firstElementChild.classList.remove('right-centerO');
    document.getElementById(`cube-67`).firstElementChild.classList.remove('bottum-leftO');
    document.getElementById(`cube-68`).firstElementChild.classList.remove('bottum-centerO');
    document.getElementById(`cube-69`).firstElementChild.classList.remove('bottum-rightO');
}


function add90DegDiesplayXandO() {
    adds90DegDisplayXleft();
    adds90DegDisplayOleft();
    addCubeAnimation();
    setTimeout(removeTicTacToeAgain, 1500);
}


function removeTicTacToeAgain() {
    removes90DegDisplayXleft();
    removes90DegDisplayOleft();
}


function selectField(n) {
    checkForNextPlayer(n);
    removeSelectAreaForChoose(n);
    renderPlayerHeadline();
    winCheckingX();
    winCheckingO();
    checkDraw();
}


function checkForNextPlayer(n) {
    if (currentShape == 'X') {
        chooseX(n);
        fields[n] = currentShape;
        currentShape = 'O';
    } else {
        chooseO(n);
        fields[n] = currentShape;
        currentShape = 'X';
    }
}


function removeSelectAreaForChoose(n) {
    document.getElementById(`selected${n}`).classList.add('d-none');
}


function checkDraw() {
    if (fields[1] && fields[2] && fields[3] && fields[4] && fields[5] && fields[6] && fields[7] && fields[8] && fields[9]) {
        if (!winCheckingX || !winCheckingO) {
            displayDraw();
        }
    }
}


function displayDraw() {
    renderDrawHeadline();
    removeLines();
    setTimeout(restartGameArea, 2000);
}


function renderDrawHeadline() {
    document.getElementById('headLine').innerHTML = `<span>nobody</span> won`;
}


function winCheckingX() {
    if (fields[1] == 'X' && fields[2] == 'X' && fields[3] == 'X') { winnerDisplay(1, 2, 3, 'X'); }
    if (fields[4] == 'X' && fields[5] == 'X' && fields[6] == 'X') { winnerDisplay(4, 5, 6, 'X'); }
    if (fields[7] == 'X' && fields[8] == 'X' && fields[9] == 'X') { winnerDisplay(7, 8, 9, 'X'); }
    if (fields[1] == 'X' && fields[4] == 'X' && fields[7] == 'X') { winnerDisplay(1, 4, 7, 'X'); }
    if (fields[2] == 'X' && fields[5] == 'X' && fields[8] == 'X') { winnerDisplay(2, 5, 8, 'X'); }
    if (fields[3] == 'X' && fields[6] == 'X' && fields[9] == 'X') { winnerDisplay(3, 6, 9, 'X'); }
    if (fields[1] == 'X' && fields[5] == 'X' && fields[9] == 'X') { winnerDisplay(1, 5, 9, 'X'); }
    if (fields[3] == 'X' && fields[5] == 'X' && fields[7] == 'X') { winnerDisplay(3, 5, 7, 'X'); }
}


function winCheckingO() {
    if (fields[1] == 'O' && fields[2] == 'O' && fields[3] == 'O') { winnerDisplay(1, 2, 3, 'O'); }
    if (fields[4] == 'O' && fields[5] == 'O' && fields[6] == 'O') { winnerDisplay(4, 5, 6, 'O'); }
    if (fields[7] == 'O' && fields[8] == 'O' && fields[9] == 'O') { winnerDisplay(7, 8, 9, 'O'); }
    if (fields[1] == 'O' && fields[4] == 'O' && fields[7] == 'O') { winnerDisplay(1, 4, 7, 'O'); }
    if (fields[2] == 'O' && fields[5] == 'O' && fields[8] == 'O') { winnerDisplay(2, 5, 8, 'O'); }
    if (fields[3] == 'O' && fields[6] == 'O' && fields[9] == 'O') { winnerDisplay(3, 6, 9, 'O'); }
    if (fields[1] == 'O' && fields[5] == 'O' && fields[9] == 'O') { winnerDisplay(1, 5, 9, 'O'); }
    if (fields[3] == 'O' && fields[5] == 'O' && fields[7] == 'O') { winnerDisplay(3, 5, 7, 'O'); }
}


function winnerDisplay(first, secound, third, winner) {
    cubeCount.splice(cubeCount.indexOf(first), 1);
    cubeCount.splice(cubeCount.indexOf(secound), 1);
    cubeCount.splice(cubeCount.indexOf(third), 1);
    renderWinnerHeadline(winner);
    removeAllSelectAreaForChoose();
    setTimeout(removeCubes, 1000);
}


function renderWinnerHeadline(winner) {
    document.getElementById('headLine').innerHTML = `Player <span>${winner}</span> wins`;
}


function removeCubes() {
    removeLines();
    removeUnusedDice();
    setTimeout(restartGameArea, 2000);
}


function removeAllSelectAreaForChoose() {
    for (let n = 1; n < 10; n++) {
        document.getElementById(`selected${n}`).classList.add('d-none');
    }
}


function removeLines() {
    document.getElementById('firdthorzontalline').classList.remove('scale-in-hor-center');
    document.getElementById('secondhorzontalline').classList.remove('scale-in-hor-center');
    document.getElementById('firdtvertikalline').classList.remove('scale-in-ver-center');
    document.getElementById('secoundtvertikalline').classList.remove('scale-in-ver-center');
    document.getElementById('firdthorzontalline').classList.add('scale-out-horizontal');
    document.getElementById('secondhorzontalline').classList.add('scale-out-horizontal');
    document.getElementById('firdtvertikalline').classList.add('scale-out-vertical');
    document.getElementById('secoundtvertikalline').classList.add('scale-out-vertical');
}


function removeUnusedDice() {
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


function restartGameArea() {
    document.getElementById('headLine2').innerHTML = `
    click to <span>restart</span> the game
    `;
    document.getElementById('restart').classList.remove('d-none')
}

function restartSartGame() {
    removeAllDice();
    resetVarialbe();
    setTimeout(renderCubeArea, 2700);
    setTimeout(addCubeAnimation, 2700);
    setTimeout(addXandO, 2700);
    setTimeout(displaySelectXandO, 2700);
    setTimeout(renderSelectHeadline, 2700);
}


function resetVarialbe() {
    fields = [];
    currentShape = '';
    cubeCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    document.getElementById('headLine2').innerHTML = '';
    document.getElementById('restart').classList.add('d-none')
}


function removeAllDice() {
    for (let i = 1; i < 10; i++) {
        for (let n = 1; n < 10; n++) {
            document.getElementById(`cube-${i}${n}`).classList.add('animation-rotationopacity0')
        }
    }
}


function addXandO() {
    adddisplayXleft();
    adddisplayOleft();
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