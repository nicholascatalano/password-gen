// Assignment code here
var numbers = ["1234567890"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialChar = [" !#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

function generatePassword() {
  var password = "";
  var passwordAmount = "";
  var passwordLength = prompt(
    "Please input the number of characters you would like your password to be, between 8 - 128."
  );
  passwordLength = parseInt(passwordLength);
  if (passwordLength < 8) {
    alert("Password must be between 8-128!");
    return;
  }

  if (passwordLength > 128) {
    alert("Password must be between 8-128!");
    return;
  }

  var lowerCaseOption = confirm("Would you like to include lowercase letters?");
  // 1. Prompt the user for the password criteria
  //    a. Password length 8 >= 128
  //    b. Lowercase, uppercase, numbers, special characters
  // 2. Confirm input
  // 3. Generate password
  // 4. Display password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
