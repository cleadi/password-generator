var generateBtn = document.querySelector("#generate"); // DON'T TOUCH

var specialCharactersList = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbersList = "1234567890";
var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseList = "abcdefghijklmnopqrstuvwxyz";

var numbersAllowed;
var chosenCharacters;
var specialCharsAllowed;
var lowercaseAllowed;
var uppercaseAllowed;
var numberOfCharacters;
var finalPassword;

function generatePassword() {
  finalPassword;
  chosenCharacters = "";
  numberOfCharacters = parseInt(window.prompt("How many characters would you like the password to be? Can be between 8-128 characters?"));
  numbersAllowed = window.confirm("Would you like to use numbers?");
  lowercaseAllowed = window.confirm("Would you like to use lowercase letters?");
  uppercaseAllowed = window.confirm("Would you like to use uppercase characters?");
  specialCharsAllowed = window.confirm("Would you like to use special characters?");

  if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
    if (numbersAllowed === true || specialCharsAllowed === true || lowercaseAllowed === true || uppercaseAllowed === true) {
      getFinalCharactersAllowed();
      finalPassword = buildPassword();
    }
  } else {
    alert("Try again! Number of characters needs to be between 8 & 128."); // This doesn't work as it should
  }

  return finalPassword;
}

function buildPassword() {
  var pw = "";
  for (var i = 0; i < numberOfCharacters; i++) {
    pw += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
  }
  return pw;
}

function getFinalCharactersAllowed() {
  if (numbersAllowed === true) {
    chosenCharacters = chosenCharacters.concat(numbersList);
  }
  if (specialCharsAllowed === true) {
    chosenCharacters = chosenCharacters.concat(specialCharsAllowed);
  }
  if (lowercaseAllowed === true) {
    chosenCharacters = chosenCharacters.concat(lowercaseAllowed);
  }
  if (uppercaseAllowed === true) {
    chosenCharacters = chosenCharacters.concat(uppercaseAllowed);
  }
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
