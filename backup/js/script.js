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


function displayRow1T() {
    document.getElementById('cube-11').firstElementChild.classList.add('half-beforeright');
    document.getElementById('cube-12').firstElementChild.classList.add('half-T-top');
    document.getElementById('cube-13').firstElementChild.classList.add('half-beforeleft');
    document.getElementById('cube-15').firstElementChild.classList.add('halfvertikalaqua');
    document.getElementById('cube-18').firstElementChild.classList.add('half-beforebottum');
}


function displayRow1I() {
    document.getElementById('cube-22').firstElementChild.classList.add('half-beforetop');
    document.getElementById('cube-25').firstElementChild.classList.add('halfvertikalaqua');
    document.getElementById('cube-28').firstElementChild.classList.add('half-beforebottum');
}


function displayRow1C() {
    document.getElementById('cube-31').firstElementChild.classList.add('half-left-bottum');
    document.getElementById('cube-32').firstElementChild.classList.add('halfaqua');
    document.getElementById('cube-33').firstElementChild.classList.add('half-beforeleft');
    document.getElementById('cube-34').firstElementChild.classList.add('halfvertikalaqua');
    document.getElementById('cube-37').firstElementChild.classList.add('half-left-top');
    document.getElementById('cube-38').firstElementChild.classList.add('halfaqua');
    document.getElementById('cube-39').firstElementChild.classList.add('half-beforeleft');
}


function displayRow2T() {
    document.getElementById('cube-41').firstElementChild.classList.add('half-beforeright');
    document.getElementById('cube-42').firstElementChild.classList.add('half-T-top');
    document.getElementById('cube-43').firstElementChild.classList.add('half-beforeleft');
    document.getElementById('cube-45').firstElementChild.classList.add('halfvertikalaqua');
    document.getElementById('cube-48').firstElementChild.classList.add('half-beforebottum');
}


function displayRow2A() {
    document.getElementById('cube-52').firstElementChild.classList.add('half-A-top');
    document.getElementById('cube-54').firstElementChild.classList.add('half-A-center-left');
    document.getElementById('cube-55').firstElementChild.classList.add('half-A-line');
    document.getElementById('cube-56').firstElementChild.classList.add('half-A-center-right');
    document.getElementById('cube-57').firstElementChild.classList.add('half-A-left');
    document.getElementById('cube-59').firstElementChild.classList.add('half-A-right');
}


function displayRow2C() {
    document.getElementById('cube-61').firstElementChild.classList.add('half-left-bottum');
    document.getElementById('cube-62').firstElementChild.classList.add('halfaqua');
    document.getElementById('cube-63').firstElementChild.classList.add('half-beforeleft');
    document.getElementById('cube-64').firstElementChild.classList.add('halfvertikalaqua');
    document.getElementById('cube-67').firstElementChild.classList.add('half-left-top');
    document.getElementById('cube-68').firstElementChild.classList.add('halfaqua');
    document.getElementById('cube-69').firstElementChild.classList.add('half-beforeleft');
}


function displayRow3T() {
    document.getElementById('cube-71').firstElementChild.classList.add('half-beforeright');
    document.getElementById('cube-72').firstElementChild.classList.add('half-T-top');
    document.getElementById('cube-73').firstElementChild.classList.add('half-beforeleft');
    document.getElementById('cube-75').firstElementChild.classList.add('halfvertikalaqua');
    document.getElementById('cube-78').firstElementChild.classList.add('half-beforebottum');
}


function displayRow3O() {
    document.getElementById('cube-81').firstElementChild.classList.add('top-leftO');
    document.getElementById('cube-82').firstElementChild.classList.add('top-centerO');
    document.getElementById('cube-83').firstElementChild.classList.add('top-rightO');
    document.getElementById('cube-84').firstElementChild.classList.add('left-centerO');
    document.getElementById('cube-85').firstElementChild.classList.add('center-centerO');
    document.getElementById('cube-86').firstElementChild.classList.add('right-centerO');
    document.getElementById('cube-87').firstElementChild.classList.add('bottum-leftO');
    document.getElementById('cube-88').firstElementChild.classList.add('bottum-centerO');
    document.getElementById('cube-89').firstElementChild.classList.add('bottum-rightO');
}


function displayRow3E() {
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


function removedisplayRow1T() {
    document.getElementById('cube-11').firstElementChild.classList.remove('half-beforeright');
    document.getElementById('cube-12').firstElementChild.classList.remove('half-T-top');
    document.getElementById('cube-13').firstElementChild.classList.remove('half-beforeleft');
    document.getElementById('cube-15').firstElementChild.classList.remove('halfvertikalaqua');
    document.getElementById('cube-18').firstElementChild.classList.remove('half-beforebottum');
}


function removedisplayRow1I() {
    document.getElementById('cube-22').firstElementChild.classList.remove('half-beforetop');
    document.getElementById('cube-25').firstElementChild.classList.remove('halfvertikalaqua');
    document.getElementById('cube-28').firstElementChild.classList.remove('half-beforebottum');
}


function removedisplayRow1C() {
    document.getElementById('cube-31').firstElementChild.classList.remove('half-left-bottum');
    document.getElementById('cube-32').firstElementChild.classList.remove('halfaqua');
    document.getElementById('cube-33').firstElementChild.classList.remove('half-beforeleft');
    document.getElementById('cube-34').firstElementChild.classList.remove('halfvertikalaqua');
    document.getElementById('cube-37').firstElementChild.classList.remove('half-left-top');
    document.getElementById('cube-38').firstElementChild.classList.remove('halfaqua');
    document.getElementById('cube-39').firstElementChild.classList.remove('half-beforeleft');
}


function removedisplayRow2T() {
    document.getElementById('cube-41').firstElementChild.classList.remove('half-beforeright');
    document.getElementById('cube-42').firstElementChild.classList.remove('half-T-top');
    document.getElementById('cube-43').firstElementChild.classList.remove('half-beforeleft');
    document.getElementById('cube-45').firstElementChild.classList.remove('halfvertikalaqua');
    document.getElementById('cube-48').firstElementChild.classList.remove('half-beforebottum');
}


function removedisplayRow2A() {
    document.getElementById('cube-52').firstElementChild.classList.remove('half-A-top');
    document.getElementById('cube-54').firstElementChild.classList.remove('half-A-center-left');
    document.getElementById('cube-55').firstElementChild.classList.remove('half-A-line');
    document.getElementById('cube-56').firstElementChild.classList.remove('half-A-center-right');
    document.getElementById('cube-57').firstElementChild.classList.remove('half-A-left');
    document.getElementById('cube-59').firstElementChild.classList.remove('half-A-right');
}


function removedisplayRow2C() {
    document.getElementById('cube-61').firstElementChild.classList.remove('half-left-bottum');
    document.getElementById('cube-62').firstElementChild.classList.remove('halfaqua');
    document.getElementById('cube-63').firstElementChild.classList.remove('half-beforeleft');
    document.getElementById('cube-64').firstElementChild.classList.remove('halfvertikalaqua');
    document.getElementById('cube-67').firstElementChild.classList.remove('half-left-top');
    document.getElementById('cube-68').firstElementChild.classList.remove('halfaqua');
    document.getElementById('cube-69').firstElementChild.classList.remove('half-beforeleft');
}


function removedisplayRow3T() {
    document.getElementById('cube-71').firstElementChild.classList.remove('half-beforeright');
    document.getElementById('cube-72').firstElementChild.classList.remove('half-T-top');
    document.getElementById('cube-73').firstElementChild.classList.remove('half-beforeleft');
    document.getElementById('cube-75').firstElementChild.classList.remove('halfvertikalaqua');
    document.getElementById('cube-78').firstElementChild.classList.remove('half-beforebottum');
}


function removedisplayRow3O() {
    document.getElementById('cube-81').firstElementChild.classList.remove('top-leftO');
    document.getElementById('cube-82').firstElementChild.classList.remove('top-centerO');
    document.getElementById('cube-83').firstElementChild.classList.remove('top-rightO');
    document.getElementById('cube-84').firstElementChild.classList.remove('left-centerO');
    document.getElementById('cube-85').firstElementChild.classList.remove('center-centerO');
    document.getElementById('cube-86').firstElementChild.classList.remove('right-centerO');
    document.getElementById('cube-87').firstElementChild.classList.remove('bottum-leftO');
    document.getElementById('cube-88').firstElementChild.classList.remove('bottum-centerO');
    document.getElementById('cube-89').firstElementChild.classList.remove('bottum-rightO');
}


function removedisplayRow3E() {
    document.getElementById('cube-91').firstElementChild.classList.remove('half-left-bottum');
    document.getElementById('cube-92').firstElementChild.classList.remove('halfaqua');
    document.getElementById('cube-93').firstElementChild.classList.remove('half-beforeleft');
    document.getElementById('cube-94').firstElementChild.classList.remove('half-T-left');
    document.getElementById('cube-95').firstElementChild.classList.remove('half-beforeleft');
    document.getElementById('cube-97').firstElementChild.classList.remove('half-left-top');
    document.getElementById('cube-98').firstElementChild.classList.remove('halfaqua');
    document.getElementById('cube-99').firstElementChild.classList.remove('half-beforeleft');

}



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


function adddisplayXleft() {
    document.getElementById(`cube-41`).firstElementChild.classList.add('top-leftX');
    document.getElementById(`cube-43`).firstElementChild.classList.add('top-rightX');
    document.getElementById(`cube-45`).firstElementChild.classList.add('center-centerX');
    document.getElementById(`cube-47`).firstElementChild.classList.add('bottum-leftX');
    document.getElementById(`cube-49`).firstElementChild.classList.add('bottum-rightX');
}


function adddisplayOleft() {
    document.getElementById(`cube-61`).firstElementChild.classList.add('top-leftO');
    document.getElementById(`cube-62`).firstElementChild.classList.add('top-centerO');
    document.getElementById(`cube-63`).firstElementChild.classList.add('top-rightO');
    document.getElementById(`cube-64`).firstElementChild.classList.add('left-centerO');
    document.getElementById(`cube-65`).firstElementChild.classList.add('center-centerO');
    document.getElementById(`cube-66`).firstElementChild.classList.add('right-centerO');
    document.getElementById(`cube-67`).firstElementChild.classList.add('bottum-leftO');
    document.getElementById(`cube-68`).firstElementChild.classList.add('bottum-centerO');
    document.getElementById(`cube-69`).firstElementChild.classList.add('bottum-rightO');
}


function add90DegdisplayRow1T() {
    document.getElementById('cube-11').children[2].classList.add('half-beforebottum');
    document.getElementById('cube-12').children[2].classList.add('half-T-left');
    document.getElementById('cube-13').children[2].classList.add('half-beforetop');
    document.getElementById('cube-15').children[2].classList.add('halfaqua');
    document.getElementById('cube-18').children[2].classList.add('half-beforeleft');
}


function add90DegdisplayRow1I() {
    document.getElementById('cube-22').children[2].classList.add('half-beforeright');
    document.getElementById('cube-25').children[2].classList.add('halfaqua');
    document.getElementById('cube-28').children[2].classList.add('half-beforeleft');
}


function add90DegdisplayRow1C() {
    document.getElementById('cube-31').children[2].classList.add('half-left-top');
    document.getElementById('cube-32').children[2].classList.add('halfvertikalaqua');
    document.getElementById('cube-33').children[2].classList.add('half-beforetop');
    document.getElementById('cube-34').children[2].classList.add('halfaqua');
    document.getElementById('cube-37').children[2].classList.add('half-right-bottum');
    document.getElementById('cube-38').children[2].classList.add('halfvertikalaqua');
    document.getElementById('cube-39').children[2].classList.add('half-beforetop');
}


function add90DegdisplayRow2T() {
    document.getElementById('cube-41').children[2].classList.add('half-beforebottum');
    document.getElementById('cube-42').children[2].classList.add('half-T-left');
    document.getElementById('cube-43').children[2].classList.add('half-beforetop');
    document.getElementById('cube-45').children[2].classList.add('halfaqua');
    document.getElementById('cube-48').children[2].classList.add('half-beforeleft');
}


function add90DegdisplayRow2A() {
    document.getElementById('cube-52').children[2].classList.add('half-rotatA-top');
    document.getElementById('cube-54').children[2].classList.add('half-rotatA-left-center');
    document.getElementById('cube-55').children[2].classList.add('half-rotateA-line');
    document.getElementById('cube-56').children[2].classList.add('half-rotatA-right-center');
    document.getElementById('cube-57').children[2].classList.add('half-rotatA-left');
    document.getElementById('cube-59').children[2].classList.add('half-rotatA-right');
}


function add90DegdisplayRow2C() {
    document.getElementById('cube-61').children[2].classList.add('half-left-top');
    document.getElementById('cube-62').children[2].classList.add('halfvertikalaqua');
    document.getElementById('cube-63').children[2].classList.add('half-beforetop');
    document.getElementById('cube-64').children[2].classList.add('halfaqua');
    document.getElementById('cube-67').children[2].classList.add('half-right-bottum');
    document.getElementById('cube-68').children[2].classList.add('halfvertikalaqua');
    document.getElementById('cube-69').children[2].classList.add('half-beforetop');
}


function add90DegdisplayRow3T() {
    document.getElementById('cube-71').children[2].classList.add('half-beforebottum');
    document.getElementById('cube-72').children[2].classList.add('half-T-left');
    document.getElementById('cube-73').children[2].classList.add('half-beforetop');
    document.getElementById('cube-75').children[2].classList.add('halfaqua');
    document.getElementById('cube-78').children[2].classList.add('half-beforeleft');
}


function add90DegdisplayRow3O() {
    document.getElementById('cube-81').children[2].classList.add('bottum-leftO');
    document.getElementById('cube-82').children[2].classList.add('left-centerO');
    document.getElementById('cube-83').children[2].classList.add('top-leftO');
    document.getElementById('cube-84').children[2].classList.add('bottum-centerO');
    document.getElementById('cube-85').children[2].classList.add('center-centerO');
    document.getElementById('cube-86').children[2].classList.add('top-centerO');
    document.getElementById('cube-87').children[2].classList.add('bottum-rightO');
    document.getElementById('cube-88').children[2].classList.add('right-centerO');
    document.getElementById('cube-89').children[2].classList.add('top-rightO');
}


function add90DegdisplayRow3E() {
    document.getElementById('cube-91').children[2].classList.add('half-left-top');
    document.getElementById('cube-92').children[2].classList.add('halfvertikalaqua');
    document.getElementById('cube-93').children[2].classList.add('half-beforetop');
    document.getElementById('cube-94').children[2].classList.add('half-T-right');
    document.getElementById('cube-95').children[2].classList.add('half-beforetop');
    document.getElementById('cube-97').children[2].classList.add('half-right-bottum');
    document.getElementById('cube-98').children[2].classList.add('halfvertikalaqua');
    document.getElementById('cube-99').children[2].classList.add('half-beforetop');
}


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


function remove90DegdisplayRow1T() {
    document.getElementById('cube-11').children[2].classList.remove('half-beforebottum');
    document.getElementById('cube-12').children[2].classList.remove('half-T-left');
    document.getElementById('cube-13').children[2].classList.remove('half-beforetop');
    document.getElementById('cube-15').children[2].classList.remove('halfaqua');
    document.getElementById('cube-18').children[2].classList.remove('half-beforeleft');
}


function remove90DegdisplayRow1I() {
    document.getElementById('cube-22').children[2].classList.remove('half-beforeright');
    document.getElementById('cube-25').children[2].classList.remove('halfaqua');
    document.getElementById('cube-28').children[2].classList.remove('half-beforeleft');
}


function remove90DegdisplayRow1C() {
    document.getElementById('cube-31').children[2].classList.remove('half-left-top');
    document.getElementById('cube-32').children[2].classList.remove('halfvertikalaqua');
    document.getElementById('cube-33').children[2].classList.remove('half-beforetop');
    document.getElementById('cube-34').children[2].classList.remove('halfaqua');
    document.getElementById('cube-37').children[2].classList.remove('half-right-bottum');
    document.getElementById('cube-38').children[2].classList.remove('halfvertikalaqua');
    document.getElementById('cube-39').children[2].classList.remove('half-beforetop');
}


function remove90DegdisplayRow2T() {
    document.getElementById('cube-41').children[2].classList.remove('half-beforebottum');
    document.getElementById('cube-42').children[2].classList.remove('half-T-left');
    document.getElementById('cube-43').children[2].classList.remove('half-beforetop');
    document.getElementById('cube-45').children[2].classList.remove('halfaqua');
    document.getElementById('cube-48').children[2].classList.remove('half-beforeleft');
}


function remove90DegdisplayRow2A() {
    document.getElementById('cube-52').children[2].classList.remove('half-rotatA-top');
    document.getElementById('cube-54').children[2].classList.remove('half-rotatA-left-center');
    document.getElementById('cube-55').children[2].classList.remove('half-rotateA-line');
    document.getElementById('cube-56').children[2].classList.remove('half-rotatA-right-center');
    document.getElementById('cube-57').children[2].classList.remove('half-rotatA-left');
    document.getElementById('cube-59').children[2].classList.remove('half-rotatA-right');
}


function remove90DegdisplayRow2C() {
    document.getElementById('cube-61').children[2].classList.remove('half-left-top');
    document.getElementById('cube-62').children[2].classList.remove('halfvertikalaqua');
    document.getElementById('cube-63').children[2].classList.remove('half-beforetop');
    document.getElementById('cube-64').children[2].classList.remove('halfaqua');
    document.getElementById('cube-67').children[2].classList.remove('half-right-bottum');
    document.getElementById('cube-68').children[2].classList.remove('halfvertikalaqua');
    document.getElementById('cube-69').children[2].classList.remove('half-beforetop');
}


function remove90DegdisplayRow3T() {
    document.getElementById('cube-71').children[2].classList.remove('half-beforebottum');
    document.getElementById('cube-72').children[2].classList.remove('half-T-left');
    document.getElementById('cube-73').children[2].classList.remove('half-beforetop');
    document.getElementById('cube-75').children[2].classList.remove('halfaqua');
    document.getElementById('cube-78').children[2].classList.remove('half-beforeleft');
}


function remove90DegdisplayRow3O() {
    document.getElementById('cube-81').children[2].classList.remove('bottum-leftO');
    document.getElementById('cube-82').children[2].classList.remove('left-centerO');
    document.getElementById('cube-83').children[2].classList.remove('top-leftO');
    document.getElementById('cube-84').children[2].classList.remove('bottum-centerO');
    document.getElementById('cube-85').children[2].classList.remove('center-centerO');
    document.getElementById('cube-86').children[2].classList.remove('top-centerO');
    document.getElementById('cube-87').children[2].classList.remove('bottum-rightO');
    document.getElementById('cube-88').children[2].classList.remove('right-centerO');
    document.getElementById('cube-89').children[2].classList.remove('top-rightO');
}


function remove90DegdisplayRow3E() {
    document.getElementById('cube-91').children[2].classList.remove('half-left-top');
    document.getElementById('cube-92').children[2].classList.remove('halfvertikalaqua');
    document.getElementById('cube-93').children[2].classList.remove('half-beforetop');
    document.getElementById('cube-94').children[2].classList.remove('half-T-right');
    document.getElementById('cube-95').children[2].classList.remove('half-beforetop');
    document.getElementById('cube-97').children[2].classList.remove('half-right-bottum');
    document.getElementById('cube-98').children[2].classList.remove('halfvertikalaqua');
    document.getElementById('cube-99').children[2].classList.remove('half-beforetop');
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
    document.getElementById('headLine').innerHTML = `Player <span>${currentShape}</span>`;
}


function removedisplayAeraSelectXandO() {
    document.getElementById('selectx').classList.add('d-none');
    document.getElementById('selecto').classList.add('d-none');
}


function displaylines() {
    linesRemoveDnone();
    removeSelectfielsDnone();
    removeDelayFromCube();
    setTimeout(removeCubeAnimation, 1);
    removeCubeAnimation
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


function adds90DegDisplayXleft() {
    document.getElementById(`cube-41`).children[2].classList.add('bottum-leftX');
    document.getElementById(`cube-43`).children[2].classList.add('top-leftX');
    document.getElementById(`cube-45`).children[2].classList.add('center-centerX');
    document.getElementById(`cube-47`).children[2].classList.add('bottum-rightX');
    document.getElementById(`cube-49`).children[2].classList.add('top-rightX');
}


function adds90DegDisplayOleft() {
    document.getElementById(`cube-63`).children[2].classList.add('top-leftO');
    document.getElementById(`cube-66`).children[2].classList.add('top-centerO');
    document.getElementById(`cube-69`).children[2].classList.add('top-rightO');
    document.getElementById(`cube-62`).children[2].classList.add('left-centerO');
    document.getElementById(`cube-65`).children[2].classList.add('center-centerO');
    document.getElementById(`cube-68`).children[2].classList.add('right-centerO');
    document.getElementById(`cube-61`).children[2].classList.add('bottum-leftO');
    document.getElementById(`cube-64`).children[2].classList.add('bottum-centerO');
    document.getElementById(`cube-67`).children[2].classList.add('bottum-rightO');
}


function removeTicTacToeAgain() {
    removes90DegDisplayXleft();
    removes90DegDisplayOleft();
}


function removes90DegDisplayXleft() {
    document.getElementById(`cube-41`).children[2].classList.remove('bottum-leftX');
    document.getElementById(`cube-43`).children[2].classList.remove('top-leftX');
    document.getElementById(`cube-45`).children[2].classList.remove('center-centerX');
    document.getElementById(`cube-47`).children[2].classList.remove('bottum-rightX');
    document.getElementById(`cube-49`).children[2].classList.remove('top-rightX');
}


function removes90DegDisplayOleft() {
    document.getElementById(`cube-63`).children[2].classList.remove('top-leftO');
    document.getElementById(`cube-66`).children[2].classList.remove('top-centerO');
    document.getElementById(`cube-69`).children[2].classList.remove('top-rightO');
    document.getElementById(`cube-62`).children[2].classList.remove('left-centerO');
    document.getElementById(`cube-65`).children[2].classList.remove('center-centerO');
    document.getElementById(`cube-68`).children[2].classList.remove('right-centerO');
    document.getElementById(`cube-61`).children[2].classList.remove('bottum-leftO');
    document.getElementById(`cube-64`).children[2].classList.remove('bottum-centerO');
    document.getElementById(`cube-67`).children[2].classList.remove('bottum-rightO');
}


function selectField(n) {
    checkForNextPlayer(n);
    removeSelectAreaForChoose(n);
    renderPlayerHeadline();
    winCheckingX();
    winCheckingO();
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


function winCheckingX() {
    if (fields[1] == 'X' && fields[2] == 'X' && fields[3] == 'X') {
        winnerDisplay(1, 2, 3, 'X');
    }
    if (fields[4] == 'X' && fields[5] == 'X' && fields[6] == 'X') {
        winnerDisplay(4, 5, 6, 'X');
    }
    if (fields[7] == 'X' && fields[8] == 'X' && fields[9] == 'X') {
        winnerDisplay(7, 8, 9, 'X');
    }
    if (fields[1] == 'X' && fields[4] == 'X' && fields[7] == 'X') {
        winnerDisplay(1, 4, 7, 'X');
    }
    if (fields[2] == 'X' && fields[5] == 'X' && fields[8] == 'X') {
        winnerDisplay(2, 5, 8, 'X');
    }
    if (fields[3] == 'X' && fields[6] == 'X' && fields[9] == 'X') {
        winnerDisplay(3, 6, 9, 'X');
    }
    if (fields[1] == 'X' && fields[5] == 'X' && fields[9] == 'X') {
        winnerDisplay(1, 5, 9, 'X');
    }
    if (fields[3] == 'X' && fields[5] == 'X' && fields[7] == 'X') {
        winnerDisplay(3, 5, 7, 'X');
    }
}


function winCheckingO() {
    if (fields[1] == 'O' && fields[2] == 'O' && fields[3] == 'O') {
        winnerDisplay(1, 2, 3, 'O');
    }
    if (fields[4] == 'O' && fields[5] == 'O' && fields[6] == 'O') {
        winnerDisplay(4, 5, 6, 'O');
    }
    if (fields[7] == 'O' && fields[8] == 'O' && fields[9] == 'O') {
        winnerDisplay(7, 8, 9, 'O');
    }
    if (fields[1] == 'O' && fields[4] == 'O' && fields[7] == 'O') {
        winnerDisplay(1, 4, 7, 'O');
    }
    if (fields[2] == 'O' && fields[5] == 'O' && fields[8] == 'O') {
        winnerDisplay(2, 5, 8, 'O');
    }
    if (fields[3] == 'O' && fields[6] == 'O' && fields[9] == 'O') {
        winnerDisplay(3, 6, 9, 'O');
    }
    if (fields[1] == 'O' && fields[5] == 'O' && fields[9] == 'O') {
        winnerDisplay(1, 5, 9, 'O');
    }
    if (fields[3] == 'O' && fields[5] == 'O' && fields[7] == 'O') {
        winnerDisplay(3, 5, 7, 'O');
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
    removeLines();
    removeUnusedDice();
    setTimeout(restartGameArea, 2000);
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
    document.getElementById('headLine').innerHTML += `
    <br>
    click to <span>restart</span> the game
    `;
    document.getElementById('restart').classList.remove('d-none')
}

function restartSartGame() {
    document.getElementById('restart').classList.add('d-none')

    setTimeout(renderCubeArea, 2700);
    setTimeout(addCubeAnimation, 2700);
    setTimeout(addXandO, 2700);
    setTimeout(displaySelectXandO, 2700);
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



function renderCubeArea() {
    document.getElementById('cubeArea').innerHTML = `
    <div class="cube top0 left0  delay-01" id="cube-11">
    <div class="top "></div>
    <div class="bottom"></div>
    <div class="front "></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="right"></div>
</div>
<div class="cube top0 left80 delay-02" id="cube-12">
    <div class="top"></div>
    <div class="bottom"></div>
    <div class="front "></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="right"></div>
</div>
<div class="cube top0  left160 delay-03" id="cube-13">
    <div class="top "></div>
    <div class="bottom"></div>
    <div class="front"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="right"></div>
</div>
<div class="cube top80  left0 delay-02" id="cube-14">
    <div class="top"></div>
    <div class="bottom"></div>
    <div class="front"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="right"></div>
</div>
<div class="cube top80 left80 delay-03" id="cube-15">
    <div class="top "></div>
    <div class="bottom"></div>
    <div class="front"></div>
    <div class=" back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top80 left160  delay-04" id="cube-16">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top160 left0  delay-03" id="cube-17">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top160 left80  delay-04" id="cube-18">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top160 left160  delay-05" id="cube-19">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top0 left240 delay-04" id="cube-21">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top0 left320 delay-05" id="cube-22">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top0 left400 delay-06" id="cube-23">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top80 left240 delay-05" id="cube-24">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top80 left320 delay-06" id="cube-25">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top80 left400 delay-07" id="cube-26">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top160 left240 delay-06" id="cube-27">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top160 left320 delay-07" id="cube-28">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top160 left400 delay-08" id="cube-29">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top0 left480 delay-07" id="cube-31">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top0 left560 delay-08" id="cube-32">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top0 left640 delay-09" id="cube-33">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top80 left480 delay-08" id="cube-34">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top80 left560 delay-09" id="cube-35">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top80 left640 delay-10" id="cube-36">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top160 left480 delay-09" id="cube-37">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top160 left560 delay-10" id="cube-38">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top160 left640 delay-11" id="cube-39">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top240 left0 delay-04" id="cube-41">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top240 left80 delay-05" id="cube-42">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top240 left160 delay-06" id="cube-43">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top320 left0 delay-05" id="cube-44">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top320 left80 delay-06" id="cube-45">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top320 left160 delay-07" id="cube-46">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top400 left0 delay-06" id="cube-47">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top400 left80 delay-07" id="cube-48">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top400 left160 delay-08" id="cube-49">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top240 left240 delay-07" id="cube-51">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top240 left320 delay-08" id="cube-52">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top240 left400 delay-09" id="cube-53">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top320 left240 delay-08" id="cube-54">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top320 left320 delay-09" id="cube-55">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top320 left400 delay-10" id="cube-56">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top400 left240 delay-09" id="cube-57">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top400 left320 delay-10" id="cube-58">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top400 left400 delay-11" id="cube-59">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top240 left480 delay-10" id="cube-61">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top240 left560 delay-11" id="cube-62">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top240 left640 delay-12" id="cube-63">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top320 left480 delay-11" id="cube-64">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top320 left560 delay-12" id="cube-65">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top320 left640 delay-13" id="cube-66">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top400 left480 delay-12" id="cube-67">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top400 left560 delay-13" id="cube-68">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top400 left640 delay-14" id="cube-69">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top480 left0 delay-07" id="cube-71">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top480 left80 delay-08" id="cube-72">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top480 left160 delay-09" id="cube-73">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top560 left0 delay-08" id="cube-74">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top560 left80 delay-09" id="cube-75">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top560 left160 delay-10" id="cube-76">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top640 left0 delay-09" id="cube-77">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top640 left80 delay-10" id="cube-78">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top640 left160 delay-11" id="cube-79">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top480 left240 delay-10" id="cube-81">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top480 left320 delay-11" id="cube-82">
    <div class="top"></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top480 left400 delay-12" id="cube-83">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top560 left240 delay-12" id="cube-84">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top560 left320 delay-13" id="cube-85">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top560 left400 delay-14" id="cube-86">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top640 left240 delay-13" id="cube-87">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top640 left320 delay-14" id="cube-88">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top640 left400 delay-15" id="cube-89">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top480 left480 delay-13" id="cube-91">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top480 left560 delay-14" id="cube-92">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top480 left640 delay-15" id="cube-93">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top560 left480 delay-14" id="cube-94">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top560 left560 delay-15" id="cube-95">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top560 left640 delay-16" id="cube-96">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top640 left480 delay-15" id="cube-97">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top640 left560 delay-16" id="cube-98">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
<div class="cube top640 left640 delay-17" id="cube-99">
    <div class="top "></div>
    <div class="bottom "></div>
    <div class="front "></div>
    <div class="back "></div>
    <div class="left "></div>
    <div class="right "></div>
</div>
    `;
}