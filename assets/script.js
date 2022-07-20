// Assignment Code
var passLength

var upperCase = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l','m','n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var specialChars = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '}', '[', ']', '|', '/', ';', ':', '"', '<', '>', ',', '.', '?' ];

var numberChars =['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

var choices = [upperCase, lowerCase, specialChars, numberChars]

var passLength = window.prompt('how many characters would you like your password to be?');

var useNumbers = window.confirm('Do you want to include numbers? (Ok = yes)');

var useUpper = window.confirm('Do you want to include UPPER case letters?(Ok = yes)');

var useLower = window.confirm('Do you want to include LOWER case Leters?(Ok = yes)')

var useSpecial = window.confirm('Do you want to inlcude SPECIAL characters?(Ok = yes)');
    


var generateBtn = document.querySelector('#generate');

function generatePassword() {
  var password = 'password';
  // TODO: add code to generate the password here

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

