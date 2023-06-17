
const upperCheckbox = document.querySelector("#uppercase");
const lowerCheckbox = document.querySelector("#lowercase");
const specCheckbox = document.querySelector("#specialchar");
const numCheckbox = document.querySelector("#numeric");

var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!","@","#","$","%","^","&","*","(",")","{","}",":","<",">","?","/",".",","];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 
  var userChoice = window.prompt("Choose a password length:");

  if (!userChoice) {
    return;
  
  } else if (userChoice < 8 || userChoice > 128) {
        window.alert("password must be between 8 and 128 characters long.");

  } else {
  };

  var passChar = [];

  if (upperCheckbox.checked && lowerCheckbox.checked && specCheckbox.checked && numCheckbox.checked) {
  window.alert("At least one character type must be used to generate a password.");
  return;
  }

  else if (upperCheckbox.checked && lowerCheckbox.checked && specCheckbox.checked) {
    passChar = Array.from(numeric);
    // localStorage.setItem("passChar",charset);
  }

  else if (upperCheckbox.checked && lowerCheckbox.checked && numCheckbox.checked) {
    passChar = Array.from(special);
    // localStorage.setItem("passChar",charset);
  }

  else if (upperCheckbox.checked && specCheckbox.checked && numCheckbox.checked) {
    passChar = Array.from(lowercase);
    // localStorage.setItem("passChar",charset);
  }

  else if (lowerCheckbox.checked && specCheckbox.checked && numCheckbox.checked) {
    passChar = Array.from(uppercase);
    // localStorage.setItem("passChar",charset);
  }

  else if (upperCheckbox.checked && lowerCheckbox.checked) {
    passChar = Array.from(special.concat(numeric));
    // localStorage.setItem("passChar",charset);
  }

  else if (upperCheckbox.checked && specCheckbox.checked) {
    passChar = Array.from(lowercase.concat(numeric));
    // localStorage.setItem("passChar",charset);
  }

  else if (upperCheckbox.checked && numCheckbox.checked) {
    passChar = Array.from(lowercase.concat(special));
    // localStorage.setItem("passChar",charset);
  }

  else if (lowerCheckbox.checked && specCheckbox.checked) {
    passChar = Array.from(uppercase.concat(numeric));
    // localStorage.setItem("passChar",charset);
  }

  else if (lowerCheckbox.checked && numCheckbox.checked) {
    passChar = Array.from(uppercase.concat(special));
    // localStorage.setItem("passChar",charset);
  }

  else if (numCheckbox.checked && specCheckbox.checked) {
    passChar = Array.from(uppercase.concat(lowercase));
    // localStorage.setItem("passChar",charset);
  }

  else if (upperCheckbox.checked) {
    passChar = Array.from(lowercase.concat(numeric,special));
    // localStorage.setItem("passChar",charset);
  }

  else if (lowerCheckbox.checked) {
    passChar = Array.from(uppercase.concat(numeric,special));
    // localStorage.setItem("passChar",charset);
  }

  else if (specCheckbox.checked) {
    passChar = Array.from(uppercase.concat(lowercase,numeric));
    // localStorage.setItem("passChar",charset);
  }

  else if (numCheckbox.checked) {
    passChar = Array.from(uppercase.concat(lowercase,special));
    // localStorage.setItem("passChar",charset);
  }

  else {
    passChar = Array.from(uppercase.concat(lowercase,numeric,special));
    // localStorage.setItem("passChar",charset);
  };
//console.log(charset);

console.log(passChar.length);

// var passwordText = document.querySelector("#password");

var passwordArray = [];

for (var i=0; i < userChoice; i++) {
  var index = Math.floor(Math.random() * passChar.length);
  var characterChoice = passChar[index];
  passwordArray.push(characterChoice); 
  console.log(passwordArray);   
  };

password = passwordArray.toString();
password = document.querySelector ("#password");

}
// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);

// should be - generate password calls a bunch of other functions which are already defined. 


// if statements for charset 


