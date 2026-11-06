"use strict";

function checkPrime(num) {
  if (num <= 1n) return false
  if (num <= 3n) return true;
  if (num % 2n === 0n || num % 3n === 0n) return false;

  let i = 5n

  while (i * i < num) {
    if (num % i == 0n) {
      return false
    }

    i += 6n
  }

  return true
}

let test_num = prompt("Give an int to test if it is prime")
test_num = BigInt(test_num)
let print_prime = ""


const startTime = Date.now();
let isPrime = checkPrime(test_num)
const endTime = Date.now();
const timeTaken = endTime - startTime;


if (isPrime) {
  print_prime = " is prime"
} else {
  print_prime = " is composite"
}


document.querySelector("#print_num").innerHTML = 'The number ' + test_num + print_prime
document.querySelector("#exec_time").innerHTML = 'took time: ' + timeTaken + ' ms'
