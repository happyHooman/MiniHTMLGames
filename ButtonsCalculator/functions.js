var displayValue = document.getElementById("display");
var firstNumber, secondNumber;

function clickedOn(tasta){
    displayValue.value += tasta;
}

function addNumbers(){
    firstNumber = parseInt(displayValue.value);
    displayValue.value = 0;
}

function resultIs() {
    secondNumber = parseInt(displayValue.value);
    displayValue.value = firstNumber + secondNumber;
}