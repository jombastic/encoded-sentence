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

var capitalizeAndReverse = function(capitalize, reverse) {
  alert(capitalize);
  alert(reverse);
};

capitalizeAndReverse(capitalizedInput,reversedInput);
