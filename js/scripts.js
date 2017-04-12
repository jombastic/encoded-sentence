var userInput = prompt("Enter a sentance!");

var capitalizeInput = function(input) {
  var newString = input.substr(0,1) + input.substr(-1,1);
  return newString.toUpperCase();
};

var reverseCapitalized = function(input) {
  var newString = input.charAt(1) + input.charAt(0);
  return newString;
};

var capitalizeAndReverse = function(input) {
  alert(capitalizeInput(userInput));
  alert(reverseCapitalized(capitalizeInput(userInput)));
  alert(input + reverseCapitalized(capitalizeInput(userInput)));
  return input + reverseCapitalized(capitalizeInput(userInput));
};

var capitalizedAndReversed = capitalizeAndReverse(userInput);

var countAndConcatenate = function(input, string) {
  var letter = input.length / 2;
  return string.charAt(letter) + string;
};

var countedAndConcatenated = countAndConcatenate(userInput, capitalizedAndReversed);

alert(countedAndConcatenated);
alert(countedAndConcatenated.split("").reverse().join(""));
