var generateBtn = document.querySelector("#generate"); // DON'T TOUCH // 

var specialCharacters = ("!#$%&'()*+,-./:;<=>?@[]^_`{|}~");
var numbersList = ("1234567890");
var uppercaseList = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var lowercaseList = ("abcdefghijklmnopqrstuvwxyz");

function askHowManyCharacters() {
  var numberOfCharacters = window.prompt("How many characters would you like the password to be? Can be between 8-128 characters?");
  console.log(numberOfCharacters);
  return numberOfCharacters;
}

function askNumbersAllowed() {
  var numbersAllowed = window.confirm("Would you like to use numbers?");
  console.log(numbersAllowed);
  return numbersAllowed;
}

function askLowercaseAllowed() {
  var lowercaseAllowed = window.confirm("Would you like to use lowercase letters?");
  console.log(lowercaseAllowed);
  return lowercaseAllowed;
}

function askUppercaseAllowed() {
  var uppercaseAllowed = window.confirm("Would you like to use uppercase characters?");
  console.log(uppercaseAllowed);
  return uppercaseAllowed;
}

function askSpecialCharsAllowed() {
  var specialCharsAllowed = window.confirm("Would you like to use special characters?");
  console.log(specialCharsAllowed);
  return specialCharsAllowed;
}

// Seems like this code will somehow help create a password that is x number of characters long
// for (var i = 0; i < 5; i++) {
//   console.log("This is the current value of i: " + i + ".");
// }

function generatePassword(){
  var finalPassword = "";
  var numberOfCharacters = askHowManyCharacters();
  var numbersAllowed = askNumbersAllowed();
  var lowercaseAllowed = askLowercaseAllowed();
  var uppercaseAllowed = askUppercaseAllowed();
  var specialCharsAllowed = askSpecialCharsAllowed();
  validation(numberOfCharacters, numbersAllowed, specialCharsAllowed, lowercaseAllowed, uppercaseAllowed);
  return finalPassword;
}

function validation(numberOfCharacters, numbersAllowed, specialCharsAllowed, lowercaseAllowed, uppercaseAllowed) {
  window.confirm("Are these correct?");
  if (numberOfCharacters >= 8 || numberOfCharacters <= 128) {
    if (numberOfCharacters === true || specialCharsAllowed === true || lowercaseAllowed === true || uppercaseAllowed === true) {
    }
    buildPassword();
  }
}

// The job of this function is to pick one random element out of ANY array we give to it
// function getRandomValue(arr){
//   var result = arr[Math.floor(Math.random() * arr.length)];
//   return result;
// }

// if (this) {then do this} else { do this }

// JavaScipt string methods??
function buildPassword(numbersAllowed, specialCharsAllowed, lowercaseAllowed, uppercaseAllowed) {
  var allCharacters = ""
  if (numbersAllowed === true) { allCharacters = allCharacters.concat(numbersList) } // What is concat??
  if (specialCharsAllowed === true) { allCharacters = allCharacters.concat(specialCharsAllowed) }
  if (lowercaseAllowed === true) { allCharacters = allCharacters.concat(lowercaseAllowed) }
  if (uppercaseAllowed === true) { allCharacters = allCharacters.concat(uppercaseAllowed) }
  console.log(allCharacters);
}

// Write password to the #password input
function writePassword() { // DON'T TOUCH
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // DON'T TOUCH 
