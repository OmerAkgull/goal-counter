let counterOne = 0;
let counterTwo = 0;

function myFirstFunction() {
  counterOne++;
  document.getElementById("counterOne").innerHTML = counterOne;
}

function mySecondFunction() {
  counterOne--;
  document.getElementById("counterOne").innerHTML = counterOne;
}

function myThirdFunction() {
  counterTwo++;
  document.getElementById("counterTwo").innerHTML = counterTwo;
}

function myFourthFunction() {
  counterTwo--;
  document.getElementById("counterTwo").innerHTML = counterTwo;
}
