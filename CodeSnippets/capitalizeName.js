// Capitalizing the input name 

var name = prompt("what is your name?");

var firstChar = name.slice(0,1);
var lastChars = name.slice(1, name.length);

var firstUpper = firstChar.toUpperCase();
var lastLower = lastChars.toLowerCase();

var nameCapitalized = firstUpper + lastLower;

alert("Hello " + nameCapitalized);
