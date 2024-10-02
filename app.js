// Assignment NO 10  STRING METHODS
// Question no 01
// Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");
// Question no 02
// Write a program to take a user input about his favorite mobile phone model and display the length of the string.
var favoritePhone = prompt("Enter your favorite mobile phone model:");
var lengthOfstring = favoritePhone.length;
alert("The length of the string is: " + lengthOfstring);
// Question no 03
// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in an alert.
var word = "Pakistani";
var indexofn = word.indexOf("n");
alert("The index of 'n' in the word 'Pakistani' is: " + indexofn);
// Question no 04
// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in an alert.
var word1 = "Hello World";
var lastindexofl = word1.lastIndexOf("l");
alert("The last index of 'l' in the word 'Hello World' is: " + lastindexofl);
// Question no 05
// Write a program to find the character at index 3 in the word “Pakistani” and display the result in an alert.
var word2 = "Pakistani";
var charAtIndex3 = word2.charAt(3);
alert("The character at index 3 in the word 'Pakistani' is: " + charAtIndex3);
// Question no 06
// 6. Repeat Q1 using string concat() method.
var firstName1 = prompt("Enter your first name:");
var lastName1 = prompt("Enter your last name:");
var fullName1 = "".concat(firstName1, " ", lastName1);
alert("Hello, " + fullName1 + "!");
// Question no 07
// Write a program to replace the word “Hello” with “Welcome” in the following string: “Hello World” and display the result in an alert.
var originalString = "Hello World";
var replacedString = originalString.replace("Hello", "Welcome");
alert("The replaced string is: " + replacedString);
// Question no 08
// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacedMessage = message.replace(/and/g, "&");
alert("The replaced message is: " + replacedMessage);
// Question no 09
// Write a program that converts the string “472” to a number and displays the result in an alert.
var stringNumber1 = "472";
console.log(stringNumber1)
var number1 = parseInt(stringNumber1);
console.log(number1);
alert("The number is: " + number1);
// Question no 10
// 10. Write a program that takes user input. Convert and show the input in capital letters.
var userInput = prompt("Enter some text:");
var uppercaseInput = userInput.toUpperCase();
alert("The input in uppercase is: " + uppercaseInput);
// Question no 11
// Write a program that takes user input. Convert and show the input in title case.
var userInput1 = prompt("Enter some text:");
var words = userInput1.split(" ");
var titleCaseInput = "";
for (var i = 0; i < words.length; i++) {
    titleCaseInput += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
titleCaseInput = titleCaseInput.trim();
alert("The input in title case is: " + titleCaseInput);
// Question no 12
// Write a program that converts the variable num to a string.
var num = 35.36;
var numAsString = num.toString();
console.log(numAsString);
// Question no 13 
// Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
var username = prompt("Enter your username:");
var specialChars = "[@ . , !]";
for (var i = 0; i < username.length; i++) {
    if (specialChars.indexOf(username.charAt(i)) != -1) {
        username = prompt("Enter a valid username:");
    }
}
alert("Your username is: " + username);
// Question no 14

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput2 = prompt("Enter an item to search:");
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput2.toLowerCase()) {
        found = true;
        break;
    }
}
if (found) {
    alert(userInput2 + " is available in the list");
} else {
    alert(userInput2 + " is not available in the list");
}

// Question no 15

var password = prompt("Enter a password:");
var isValidPassword = true;
if (password.length < 6) {
    isValidPassword = false;
} else if (isNaN(parseInt(password.charAt(0))) === false) {
    isValidPassword = false;
} else {
    for (var i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i);
        if ((charCode < 48 || charCode > 57) && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
            isValidPassword = false;
            break;
        }
    }
}
if (isValidPassword) {
    alert("Valid password");
} else {
    alert("Invalid password. Please enter a password that meets the requirements.");
}

//  Question no 16
var university = "University of Karachi";
var splitUniversity = university.split("");
var newUniversity = "";
for (var i = 0; i < splitUniversity.length; i++) {
    newUniversity += splitUniversity[i] + "\n";
}
alert(newUniversity);
// Question no 17
var userInput3 = prompt("Enter a character:");
var lastChar = userInput3.charAt(userInput3.length - 1);
alert("The last character is: " + lastChar);
// Question no 18
var string1 = "The quick brown fox jumps over the lazy dog";
var string2 = "edabit is awesome";
var length1 = string1.length;
var length2 = string2.length;
if (length1 > length2) {
    alert("The string 'The quick brown fox jumps over the lazy dog' is longer.");
} else if (length1 < length2) {
    alert("The string 'edabit is awesome' is longer.");
} else {
    alert("Both strings have the same length.");
}
