function rotateCube(n) {
    chooseX(n);
}


function chooseX(n) {
    rotateX(n);
    displayX(n);
}

function rotateX(n) {
    document.getElementById(`cube-${n}1`).classList.add('delay-01', 'animation-rotation');

    document.getElementById(`cube-${n}2`).classList.add('delay-01', 'animation-rotation');

    document.getElementById(`cube-${n}3`).classList.add('delay-01', 'animation-rotation');


    document.getElementById(`cube-${n}4`).classList.add('delay-01', 'animation-rotation');

    document.getElementById(`cube-${n}5`).classList.add('delay-01', 'animation-rotation');

    document.getElementById(`cube-${n}6`).classList.add('delay-01', 'animation-rotation');


    document.getElementById(`cube-${n}7`).classList.add('delay-01', 'animation-rotation');

    document.getElementById(`cube-${n}8`).classList.add('delay-01', 'animation-rotation');

    document.getElementById(`cube-${n}9`).classList.add('delay-01', 'animation-rotation');
}

function displayX(n) {
    document.getElementById(`cube-${n}1`).firstElementChild.classList.add('top-leftX');


    document.getElementById(`cube-${n}3`).firstElementChild.classList.add('top-rightX');



    document.getElementById(`cube-${n}5`).firstElementChild.classList.add('center-centerX');



    document.getElementById(`cube-${n}7`).firstElementChild.classList.add('bottum-leftX');


    document.getElementById(`cube-${n}9`).firstElementChild.classList.add('bottum-rightX');
}



function chooseO(n) {
    document.getElementById(`cube-${n}1`).classList.add('delay-01', 'animation-rotation');
    document.getElementById(`cube-${n}1`).firstElementChild.classList.add('top-leftO');

    document.getElementById(`cube-${n}2`).classList.add('delay-02', 'animation-rotation');
    document.getElementById(`cube-${n}2`).firstElementChild.classList.add('top-centerO');

    document.getElementById(`cube-${n}3`).classList.add('delay-03', 'animation-rotation');
    document.getElementById(`cube-${n}3`).firstElementChild.classList.add('top-rightO');


    document.getElementById(`cube-${n}4`).classList.add('delay-02', 'animation-rotation');
    document.getElementById(`cube-${n}4`).firstElementChild.classList.add('left-centerO');

    document.getElementById(`cube-${n}5`).classList.add('delay-03', 'animation-rotation');
    document.getElementById(`cube-${n}5`).firstElementChild.classList.add('center-centerO');

    document.getElementById(`cube-${n}6`).classList.add('delay-04', 'animation-rotation');
    document.getElementById(`cube-${n}6`).firstElementChild.classList.add('right-centerO');


    document.getElementById(`cube-${n}7`).classList.add('delay-03', 'animation-rotation');
    document.getElementById(`cube-${n}7`).firstElementChild.classList.add('bottum-leftO');

    document.getElementById(`cube-${n}8`).classList.add('delay-04', 'animation-rotation');
    document.getElementById(`cube-${n}8`).firstElementChild.classList.add('bottum-centerO');

    document.getElementById(`cube-${n}9`).classList.add('delay-05', 'animation-rotation');
    document.getElementById(`cube-${n}9`).firstElementChild.classList.add('bottum-rightO');
}