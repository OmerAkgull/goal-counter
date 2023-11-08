let counterOne = 0;
let counterTwo = 0;
let teamOne = "Team One";
let teamTwo = "Team Two";

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

function myFifthFunction() {
  document.getElementById("counterOne").innerHTML = prompt(
    "How many goals has your team scored?"
  );
}

function mySixthFunction() {
  document.getElementById("counterTwo").innerHTML = prompt(
    "How many goals has your team scored?"
  );
}

function mySeventhFunction() {
  document.getElementById("teamOne").innerHTML = prompt(
    "What is the name of your team?"
  );
}

function myEighthFunction() {
  document.getElementById("teamTwo").innerHTML = prompt(
    "What is the name of your team?"
  );
}
