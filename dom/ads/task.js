const listOfRotatorCases = Array.from(document.querySelectorAll('span.rotator__case'));
const listOfRotatorCasesLength = listOfRotatorCases.length;

function isActiveRotator(element, index, array) {
    return element.classList.contains('rotator__case_active');
};

function setNewRotatorIndex(currentRotator) {
    return (currentRotator === listOfRotatorCasesLength - 1) ? 0 : ++currentRotator;
}

function rotatorClassChange(rotator) {
    rotator.classList.toggle('rotator__case_active');
}

function newSetInterval(speed) {
    let rotatorNewSetInterval = setInterval(function () {
        
        let currentRotator = listOfRotatorCases.findIndex(isActiveRotator);
        let newRotator = setNewRotatorIndex(currentRotator);
        rotatorClassChange(listOfRotatorCases[currentRotator]);
        rotatorClassChange(listOfRotatorCases[newRotator]);


        clearInterval(rotatorNewSetInterval);
        newSetInterval(listOfRotatorCases[setNewRotatorIndex(newRotator)].dataset.speed);
    }, speed)
}


newSetInterval(document.querySelector('span.rotator__case_active').dataset.speed);