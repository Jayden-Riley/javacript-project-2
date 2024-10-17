// 1) string manipulation functions

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 

//  Count Characters
function countCharacters(str) {
    return str.length;
}


console.log(countCharacters("hello")); // Output: 5

// Capitalize Words:
function capitalizeWords(sentence) {
    let words = sentence.split(' ');
    return words.map(function(word) {
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        return capitalizedWord;
    }).join(' ');
}

// Example usage:
console.log(capitalizeWords("hello world")); // Output: "Hello World"




// 2) Array Functions:
// Find Maximum and Minimum

function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([3, 1, 7, 9, 5])); // Output: 9

function findMin(arr) {
    return Math.min(...arr);
}


console.log(findMin([3, 1, 7, 9, 5])); // Output: 1

// Filter Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let greaterThanFive = function(num) {
    return num > 5;
};

console.log(filterArray(numbers, greaterThanFive)); // Output: [6, 7, 8, 9, 10]

// 3) Mathematical Functions
// Factorial
function factorial(n) {
    let result = 1; // Initialize result
    for (let i = 2; i <= n; i++) {
        result *= i; // Multiply result by i
    }
    return result; // Return the final result
}

console.log(factorial(5));  // Output: 120

// Prime Number Check
function isPrime(num) {
    if (num < 2) return false; // 0 and 1 are not prime numbers
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // Exclude all other even numbers

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false; // Check only odd divisors
    }
    return true; // No divisors found, it's prime
}


console.log(isPrime(7));  // Output: true
console.log(isPrime(10)); // Output: false
console.log(isPrime(2));  // Output: true


// Fibonacci Sequence
function fibonacci(n) {
    if (n <= 0) return []; // Return an empty array for non-positive input
    if (n === 1) return [0]; // Return the first Fibonacci number
    if (n === 2) return [0, 1]; // Return the first two Fibonacci numbers

    const fibSequence = [0, 1]; // Initialize the first two numbers
    for (let i = 2; i < n; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2]; // Calculate next Fibonacci number
    }
    return fibSequence; // Return the complete Fibonacci sequence
}

console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

