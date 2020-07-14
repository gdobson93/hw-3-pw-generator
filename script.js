// app will generate a new, secure password
// button click function to generate pw
// when btn clicked, prompt user with question
// - user selects if criteria is included
// - user is asked for pw length from 8 - 128
// - criteria uppercase, lowercase, number, and special characters
// after user answers promps, include criteria and generate pw and display on browser

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordGen = document.querySelector('#password');


// Click event
generateBtn.addEventListener("click", function () {
   
  //Prompt to get desired character length
  var charLength = prompt("How many characters would you like your new password to be? Pick a number between 8 and 128.");

  //Conditional for character length
  if ((charLength >= 8) && (charLength <= 128)) {

      //PW Generator variables
      var lowercase = "abcdefghijklmnopqrstuvwxyz";
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numbers = "0123456789";
      var special = "!@#$%^&*()";

      //create a blank string for new password generated;
      var newPw = "";

      //user selects what characters to use
      var genLowercase = confirm('Would you like to use lowercase letters?');
      var genUppercase = confirm('Would you like to use uppercase letters?');
      var genNumber = confirm('Would you like to use numbers?');
      var genSpecial = confirm('Would you like to use special characters?');

      //variables containing the PW Generator variables
      var allOptions = special + numbers + lowercase + uppercase;
      var option1 = special + numbers + lowercase;
      var option2 = special + numbers + uppercase;
      var option3 = special + lowercase + uppercase;
      var option4 = numbers + lowercase + uppercase;
      var option5 = special + numbers;
      var option6 = special + lowercase;
      var option7 = special + uppercase;
      var option8 = numbers + lowercase;
      var option9 = numbers + uppercase;
      var option10 = lowercase + uppercase;

      //create conditionals for possible user selections
      if ((genSpecial === true) && (genNumber === true) && (genLowercase === true) && (genUppercase === true)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * allOptions.length);
              newPw += allOptions.charAt(character, character + 1);
          }
      }
      else if ((genSpecial === true) && (genNumber === true) && (genLowercase === true) && (genUppercase === false)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * option1.length);
              newPw += option1.charAt(character, character + 1);
          }
      }
      else if ((genSpecial === true) && (genNumber === true) && (genLowercase === false) && (genUppercase === true)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * option2.length);
              newPw += option2.charAt(character, character + 1);
          }
      }
      else if ((genSpecial === true) && (genNumber === false) && (genLowercase === true) && (genUppercase === true)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * option3.length);
              newPw += option3.charAt(character, character + 1);
          }
      }
      else if ((genSpecial === false) && (genNumber === true) && (genLowercase === true) && (genUppercase === true)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * option4.length);
              newPw += option4.charAt(character, character + 1);
          }
      }
      else if ((genSpecial === true) && (genNumber === true) && (genLowercase === false) && (genUppercase === false)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * option5.length);
              newPw += option5.charAt(character, character + 1);
          }
      }
      else if ((genSpecial === true) && (genNumber === false) && (genLowercase === true) && (genUppercase === false)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * option6.length);
              newPw+= option6.charAt(character, character + 1);
          }
      }
      else if ((genSpecial === true) && (genNumber === false) && (genLowercase === false) && (genUppercase === true)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * option7.length);
              newPw += option7.charAt(character, character + 1);
          }
      }
      else if ((genSpecial === false) && (genNumber === true) && (genLowercase === true) && (genUppercase === false)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * option8.length);
              newPw += option8.charAt(character, character + 1);
          }
      }
      else if ((genSpecial === false) && (genNumber === true) && (genLowercase === false) && (genUppercase === true)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * option9.length);
              newPw += option9.charAt(character, character + 1);
          }
      }
      else if ((genSpecial === false) && (genNumber === false) && (genLowercase === true) && (genUppercase === true)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * option10.length);
              newPw += option10.charAt(character, character + 1);
          }
      }
      else if ((genSpecial === true) && (genNumber === false) && (genLowercase === false) && (genUppercase === false)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * symbols.length);
              newPw += symbols.charAt(character, character + 1);
          }
      }
      else if ((genSpecial === false) && (genNumber === true) && (genLowerCase === false) && (genUppercase === false)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * numbers.length);
              newPw += numbers.charAt(character, character + 1);
          }
      }
      else if ((genSpecial === false) && (genNumber === false) && (genLowercase === true) && (genUppercase === false)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * lowercase.length);
              newPw += lowercase.charAt(character, character + 1);
          }
      }
      else if ((genSpecial === false) && (genNumber === false) && (genLowercase === false) && (genUppercase === true)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * uppercase.length);
              newPw += uppercase.charAt(character, character + 1);
          }
      }

      //Generate new password into text area
      passwordGen.textContent = newPw;
  }

})
  
  


  





