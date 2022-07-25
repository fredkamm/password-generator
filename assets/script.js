// Assignment Code
var generateBtn = document.querySelector('#generate');

// creating the function that generates the password
function generatePassword(){

  var password= '';
  var choices = [];

  //  variables for each character
  var upperCase = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l','m','n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
  var specialChars = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '}', '[', ']', '|', '/', ';', ':', '"', '<', '>', ',', '.', '?' ];
  var numberChars =['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  // prompt for the password length
  var passLength = prompt('enter desired password (min. 8 and a max of 128)');
  if (passLength < 8 || passLength > 128){
    alert("invalid password length, please try again");
    return "";
  }

  // confirming the char types
  if (confirm("do you want to include uppercase letters?")) {
    choices = choices.concat(upperCase);
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
  }
  if (confirm("do you want to include lowercase letters?")) {
    choices = choices.concat(lowerCase);
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
  }
  if (confirm("do you want to include numbers?")) {
    choices = choices.concat(numberChars);
    password += numberChars[Math.floor(Math.random()*numberChars.length)];
  }
  if (confirm("do you want to include special characters?")) {
    choices = choices.concat(specialChars);
    password += specialChars[Math.floor(Math.random()*specialChars.length)];
  }

  // notifying if they dont choosing anything they need to choose a character
  if (password.length === 0){
    alert('you must choose at least one character');
    return '';
  }
//  how to add the input length to the choices 
  while (password.length < passLength) {
    password += choices[Math.floor(Math.random()*choices.length)];
  }
  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Pseudocode

// The user wants to generate a random password
// The user will be asked how many characters they would like their password to be with a min of 8 and a max of 128.
// The computer will store the users input
// Next the user will be asked if they want numbers to be included in their password
// The computer will store the user input
// Next the user will be asked if they want UPPER case letters included in their password
// The computer will store the user input
// Next the user will be asked if they want LOWER case letters included in their password
// The computer will store the user input
// Next the user will be asked if they want to Special characters included in their password
// The computer will store the user input
// The computer will then take the users input and generate a random password that fits the users criteria
// The password will display in the box on the site.

