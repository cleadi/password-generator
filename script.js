var generateBtn = document.querySelector("#generate"); // DON'T TOUCH

const allCharacters = [specialCharacters, numbersList, uppercaseList, lowercaseList];

// Use .charAt to parse the strings for characters to build the password??
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbersList = "1234567890";
var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseList = "abcdefghijklmnopqrstuvwxyz";

var numbersAllowed;
var lowercaseAllowed;
var uppercaseAllowed;
var specialCharsAllowed;

var numberOfCharacters;
var allowedCharacters;

var userInput = "";
var finalPassword = "";

function askHowManyCharacters() {
  numberOfCharacters = window.prompt("How many characters would you like the password to be? Can be between 8-128 characters?");
  if (userInput >= 8 && userInput <= 128) {
    numberOfCharacters === true;
  } else {
    alert("Try again! Number of characters needs to be between 8 & 128."); // This doesn't work as it should
  }
}

function askNumbersAllowed() {
  numbersAllowed = window.confirm("Would you like to use numbers?");
  return numbersAllowed;
}

function askLowercaseAllowed() {
  lowercaseAllowed = window.confirm("Would you like to use lowercase letters?");
  return lowercaseAllowed;
}

function askUppercaseAllowed() {
  uppercaseAllowed = window.confirm("Would you like to use uppercase characters?");
  return uppercaseAllowed;
}

function askSpecialCharsAllowed() {
  specialCharsAllowed = window.confirm("Would you like to use special characters?");
  return specialCharsAllowed;
}

function genRandomChars() {
  for (var i =0; i < numberOfCharacters; i++) {
    numberOfCharacters += allowedCharacters [Math.floor(Math.random() * allowedCharacters.length)];
  }
}

function generatePassword() {
  numberOfCharacters = askHowManyCharacters();
  numbersAllowed = askNumbersAllowed();
  lowercaseAllowed = askLowercaseAllowed();
  uppercaseAllowed = askUppercaseAllowed();
  specialCharsAllowed = askSpecialCharsAllowed();
  validation(numberOfCharacters, numbersAllowed, specialCharsAllowed, lowercaseAllowed, uppercaseAllowed);
  return finalPassword;
}

function validation(numberOfCharacters, numbersAllowed, specialCharsAllowed, lowercaseAllowed, uppercaseAllowed) {
  window.confirm("Are these correct?");
    if (numberOfCharacters === true || specialCharsAllowed === true || lowercaseAllowed === true || uppercaseAllowed === true) {
    buildPassword();
  }
}

function buildPassword() {
  if (numbersAllowed === true) {
    allCharacters = allCharacters.concat(numbersList);
  }
  if (specialCharsAllowed === true) {
    allCharacters = allCharacters.concat(specialCharsAllowed);
  }
  if (lowercaseAllowed === true) {
    allCharacters = allCharacters.concat(lowercaseAllowed);
  }
  if (uppercaseAllowed === true) {
    allCharacters = allCharacters.concat(uppercaseAllowed);
  }
  genRandomChars(); // Or generatePassword??
}

// DON'T TOUCH
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// DON'T TOUCH 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
