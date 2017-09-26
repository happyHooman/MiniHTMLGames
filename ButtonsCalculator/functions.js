var displayValue = document.getElementById("display");
var firstNumber = 0,
    secondNumber = 0;

function clickedOn(tasta){
    if(displayValue.value==0){
        displayValue.value = tasta;
    }
    else {
        displayValue.value += tasta;
    }
}

function addNumbers(){
    firstNumber = parseInt(displayValue.value);
    displayValue.value = 0;
}

function resultIs() {
    secondNumber = parseInt(displayValue.value);
    displayValue.value = firstNumber + secondNumber;
}