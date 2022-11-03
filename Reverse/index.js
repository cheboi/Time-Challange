// Given a string S of length N, write a JavaScript function
// that transforms the string by reversing characters in groups
// of four and returns the transformed string.

// e.g., when S = 'Lorem at' the output should be 'eroLta m'

// When S = ' Tempor ip' the output should be 'meT roppi'

function solution(a) {
  var reverse = "";

  for (let i = 0; i < a.length; i++) {
    reverse += a.split("").splice(0, 4).reverse().join("");

    a = a.slice(3);
  }

  console.log(reverse);
  return reverse;
}

var result = solution("Tempor ip");

console.log(result);
