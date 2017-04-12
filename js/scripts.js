var userInput = prompt("Enter a sentance!");

var capitalizeInput = function(input) {
  var newString = input.substr(0,1) + input.substr(-1,1);
  return newString.toUpperCase();
};

var capitalizedInput = capitalizeInput(userInput);

var reverseCapitalized = function(input) {
  var newString = input.charAt(1) + input.charAt(0);
  return newString;
};

var reversedInput = reverseCapitalized(capitalizedInput);

var capitalizeAndReverse = function(capitalize, reverse, input) {
  alert(capitalize);
  alert(reverse);
  alert(input + reverse);
  return input + reverse;
};

var capitalizedAndReversed = capitalizeAndReverse(capitalizedInput,reversedInput, userInput);

capitalizedAndReversed;

var countAndConcatenate = function(input, string) {
  var letter = input.length / 2;
  return string.charAt(letter) + string;
};

var countedAndConcatenated = countAndConcatenate(userInput, capitalizedAndReversed);

alert(countedAndConcatenated);
