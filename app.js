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


// Write a program to convert the string “42” to a number and display the result in an alert.
var stringNumber = "42";
var number = parseInt(stringNumber);
alert("The number is: " + number);
// Write a program to check if the string contains the word “Script”. Display the result in an alert.
var searchString = "JavaScript";
var containsScript = searchString.includes("Script");
alert("The string contains 'Script': " + containsScript);
// Question no 09
// Write a program that converts the string “432” to a number and displays the result in an alert.
var stringNumber1 = "432";
var number1 = parseInt(stringNumber1);
alert("The number is: " + number1);
// Question no 10
// Write a program that takes a user input and displays the result in an alert.
var userInput = prompt("Enter something:");
alert("You entered: " + userInput);