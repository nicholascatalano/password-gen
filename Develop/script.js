// Assignment code here
var numbers = ["1234567890"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialChar = [" !#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

function generatePassword() {
  var password = "";
  var passwordChoices = "";
  // initial prompt when you enter website
  var passwordLength = prompt(
    "Please input the number of characters you would like your password to be, between 8 - 128."
  );
  // passwordLength = parseInt(passwordLength);

  // error messages if user enters anything other than a number between 8-128

  if (passwordLength < 8) {
    alert("Password must be between 8-128!");
    return;
  }

  if (passwordLength > 128) {
    alert("Password must be between 8-128!");
    return;
  }

  // second prompt for lowercase letters

  var lowerCaseOption = confirm("Would you like to include lowercase letters?");
  if (lowerCaseOption) {
    // referenced mdn article on the use of += in order to add the option choice into the left var
    passwordChoices += lowerCaseOption;
  }

  // third prompt for uppercase letters
  var upperCaseOption = confirm("Would you like to include uppercase letters?");
  if (upperCaseOption) {
    passwordChoices += upperCaseOption;
  }

  // fourth prompt for numbers
  var numbersOption = confirm("Would you like to include numbers?");
  if (numbersOption) {
    passwordChoices += numbersOption;
  }

  // fifth prompt for special characters
  var specialCharOptions = confirm(
    "Would you like to include special characters?"
  );
  if (specialCharOptions) {
    passwordChoices += specialCharOptions;
  }

  // for loop to randomize password each time depending on password length
  for (var i = 0; i < passwordLength; i++) {
    password =
      passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
  }
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
