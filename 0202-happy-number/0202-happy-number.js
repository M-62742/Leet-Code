/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  const seenNumbers = new Set();

  while (n !== 1) {
    if (seenNumbers.has(n)) {
      return false; // Cycle detected, so n is not a happy number
    }
    
    seenNumbers.add(n);
    n = sumOfSquares(n);
  }

  return true; // If we reach 1, it's a happy number
}

function sumOfSquares(num) {
  let sum = 0;
  while (num > 0) {
    const digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

// Example usage:
console.log(isHappy(19)); // Output: true
console.log(isHappy(2));  // Output: false




