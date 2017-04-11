var userInput = prompt("Enter a sentance!");

var capitalize = function(input) {
  return input.toLowerCase().replace(/\b\w|\w\b/g, function(match) {
    return match.toUpperCase();
  });
};
alert(capitalize(userInput));
