// HTML checkbox watchers
const upperCheckbox = document.querySelector("#uppercase");
const lowerCheckbox = document.querySelector("#lowercase");
const specCheckbox = document.querySelector("#specialchar");
const numCheckbox = document.querySelector("#numeric");

// character set arrays 
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 

var userChoice = window.prompt("Choose a password length:");

  if (!userChoice) {
    return;
  }
    else if (userChoice < 8 || userChoice > 128) {
        window.alert("password must be between 8 and 128 characters long.");
        return;
  }
    else {
  };

  var passChar = [];
// ifs to determine character set used based on user supplied checkboxes. 

  if (upperCheckbox.checked && lowerCheckbox.checked && specCheckbox.checked && numCheckbox.checked) {
  window.alert("At least one character type must be used to generate a password.");
  return;
  }

  else if (upperCheckbox.checked && lowerCheckbox.checked && specCheckbox.checked) {
    passChar = Array.from(numeric);
  }

  else if (upperCheckbox.checked && lowerCheckbox.checked && numCheckbox.checked) {
    passChar = Array.from(special);
  }

  else if (upperCheckbox.checked && specCheckbox.checked && numCheckbox.checked) {
    passChar = Array.from(lowercase);
  }

  else if (lowerCheckbox.checked && specCheckbox.checked && numCheckbox.checked) {
    passChar = Array.from(uppercase);
  }

  else if (upperCheckbox.checked && lowerCheckbox.checked) {
    passChar = Array.from(special.concat(numeric));
  }

  else if (upperCheckbox.checked && specCheckbox.checked) {
    passChar = Array.from(lowercase.concat(numeric));
  }

  else if (upperCheckbox.checked && numCheckbox.checked) {
    passChar = Array.from(lowercase.concat(special));
  }

  else if (lowerCheckbox.checked && specCheckbox.checked) {
    passChar = Array.from(uppercase.concat(numeric));
  }

  else if (lowerCheckbox.checked && numCheckbox.checked) {
    passChar = Array.from(uppercase.concat(special));
  }

  else if (numCheckbox.checked && specCheckbox.checked) {
    passChar = Array.from(uppercase.concat(lowercase));
  }

  else if (upperCheckbox.checked) {
    passChar = Array.from(lowercase.concat(numeric,special));
  }

  else if (lowerCheckbox.checked) {
    passChar = Array.from(uppercase.concat(numeric,special));
  }

  else if (specCheckbox.checked) {
    passChar = Array.from(uppercase.concat(lowercase,numeric));
  }

  else if (numCheckbox.checked) {
    passChar = Array.from(uppercase.concat(lowercase,special));
  }

  else {
    passChar = Array.from(uppercase.concat(lowercase,numeric,special));
  };

console.log(passChar.length);

// loop for randomly assign values for an array of equal length as the user specified. 

var passwordArray = [];

for (var i=0; i < userChoice; i++) {

  var index = Math.floor(Math.random() * passChar.length);

  var characterChoice = passChar[index];

  passwordArray.push(characterChoice); 
   
  };

var password = passwordArray.join("");

document.getElementById("password").innerHTML = password;

console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);

