const upperCheckbox = document.querySelector("#uppercase");
const lowerCheckbox = document.querySelector("#lowercase");
const specCheckbox = document.querySelector("#specialchar");
const numCheckbox = document.querySelector("#numeric");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
//generateBtn.addEventListener("click", getPasswordLength);
generateBtn.addEventListener("click", getPasswordCharacters);  

// function generatePassword() {
//   var passLength = getPasswordLength();
//   var passChars = getPasswordCharacters();

// }

function getPasswordLength() {
  var userChoice = window.prompt("Choose a password length:");

  if (!userChoice) {
    return;
  }

  if (userChoice < 8 || userChoice > 128) {
        window.alert("password must be between 8 and 128 characters long.");
        getPasswordLength() ;
  } 
  
  else {
    return;
  }

}

function getPasswordCharacters() {
  if (upperCheckbox.checked && lowerCheckbox.checked && specCheckbox.checked && numCheckbox.checked) {
    window.alert("At least one character type must be used to generate a password.");
    return;
  }

  else if (upperCheckbox.checked && lowerCheckbox.checked && specCheckbox.checked) {
    charaset = "0123456789";
  }

  else if (upperCheckbox.checked && lowerCheckbox.checked && numCheckbox.checked) {
    charaset = "!@#$%^&*(){}:<>?/.,";
  }

  else if (upperCheckbox.checked && specCheckbox.checked && numCheckbox.checked) {
    charaset = "abcdefghijklmnopqestuvwxyz";
  }

  else if (lowerCheckbox.checked && specCheckbox.checked && numCheckbox.checked) {
    charaset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  else if (upperCheckbox.checked && lowerCheckbox.checked) {
    charaset = "0123456789!@#$%^&*(){}:<>?/.,";
  }

  else if (upperCheckbox.checked && specCheckbox.checked) {
    charaset = "abcdefghijklmnopqestuvwxyz0123456789";
  }

  else if (upperCheckbox.checked && numCheckbox.checked) {
    charaset = "abcdefghijklmnopqestuvwxyz!@#$%^&*(){}:<>?/.,";
  }

  else if (lowerCheckbox.checked && specCheckbox.checked) {
    charaset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  }

  else if (lowerCheckbox.checked && numCheckbox.checked) {
    charaset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}:<>?/.,";
  }

  else if (numCheckbox.checked && specCheckbox.checked) {
    charaset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqestuvwxyz";
  }

  else if (upperCheckbox.checked) {
    charaset = "abcdefghijklmnopqestuvwxyz0123456789!@#$%^&*(){}:<>?/.,";
  }

  else if (lowerCheckbox.checked) {
    charaset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}:<>?/.,";
  }

  else if (specCheckbox.checked) {
    charaset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqestuvwxyz0123456789";
  }

  else if (numCheckbox.checked) {
    charaset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqestuvwxyz!@#$%^&*(){}:<>?/.,";
  }

  else {
    charaset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqestuvwxyz!@#$%^&*(){}:<>?/.,0123456789";
  }

  console.log(charaset);
}

getPasswordCharacters();
// should be - generate password calls a bunch of other functions which are already defined. 


// if statements for charset 


