const screenDisplay= document.getElementById("screenDisplay");

function display (data){
    screenDisplay.value += data;
}

function calculate(){
    screenDisplay.value=eval(screenDisplay.value)
}

function clearScreen(){
    screenDisplay.value="";
}
