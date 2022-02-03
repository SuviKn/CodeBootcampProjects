// calculate the remaining amount of characters in the "tweet" and removes the
//rest of the text if it is too long

var tweet = prompt("Write your tweet:");

var lettersTotal = tweet.length;
var lettersRemain = 140 - lettersTotal;

alert("You have written " + lettersTotal + " characters, you have " + lettersRemain + " characters left.");

var tweetSliced = tweet.slice(0,140);
alert(tweetSliced);
