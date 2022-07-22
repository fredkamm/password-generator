// Assignment Code/Variables
var generateBtn = document.querySelector('#generate');

var upperCase = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l','m','n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var specialChars = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '}', '[', ']', '|', '/', ';', ':', '"', '<', '>', ',', '.', '?' ];

var numberChars =['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

var allChars = [upperCase, lowerCase, specialChars, numberChars];
    
// password length
var passwordLength = 0;
window.prompt('How many characters would you like your password to be?(8-128)');
// help from TA Ben to get this alert right
// if user eneters number less than 8 or more than 128 they will be alerted 
if (passwordLength <= 7 || passwordLength > 128){
    window.alert('not a valid input');
}

//window confirms for the user
var useUpper = window.confirm('Do you want to include UPPER case letters?(Ok = yes)');
  
var useLower = window.confirm('Do you want to include LOWER case Leters?(Ok = yes)');
    
var useNumbers = window.confirm('Do you want to include numbers? (Ok = yes)');
    
var useSpecial = window.confirm('Do you want to inlcude SPECIAL characters?(Ok = yes)');

var choices = [useUpper, useLower, useNumbers, useSpecial];
   
function generatePassword() {
  var password = "";
  // TODO: add code to generate the password here
  for ( var i = 0; i <= passwordLength; i++){

  // generating random letters/numbers/specials
  // i feel like this is where you would include the passwordLength but im not sure how the code should be worded
    if(useUpper == true){
    password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
   }
    if(useLower == true){
    password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    if(useNumbers == true){
    password = password + numberChars[Math.floor(Math.random() * numberChars.length)];
    }
    if(useSpecial == true){
    password = password + specialChars[Math.floor(Math.random() * specialChars.length)];
    }
    return password;
  }

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