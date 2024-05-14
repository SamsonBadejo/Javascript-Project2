document.getElementById("reverseOutput").innerText =
  reverseString("Hello World!");
document.getElementById("countOutput").innerText =
  countCharacters("Hello World!");
document.getElementById("capitalizeOutput").innerText =
  capitalizeWords("hello world");

var numbers = [5, 3, 9, 1, 7];
document.getElementById("maxOutput").innerText = findMax(numbers);
document.getElementById("minOutput").innerText = findMin(numbers);
document.getElementById("sumOutput").innerText = sumArray(numbers);

document.getElementById("factorialOutput").innerText = factorial(5);
document.getElementById("primeOutput").innerText = isPrime(7);
document.getElementById("fibonacciOutput").innerText = fibonacci(10).join(", ");

// String Manipulation Functions

// Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Count Characters
function countCharacters(str) {
  return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Array Functions

// Find Maximum Value
function findMax(arr) {
  return Math.max(...arr);
}

// Find Minimum Value
function findMin(arr) {
  return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Filter Array
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// Mathematical Functions

// Factorial
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

// Prime Number Check
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (var i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

// Fibonacci Sequence
function fibonacci(num) {
  var sequence = [0, 1];
  for (var i = 2; i < num; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}
