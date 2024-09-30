function myAtoi(s) {
    // Step 1: Ignore leading whitespace
    s = s.trim();
    if (s.length === 0) return 0;
    
    // Step 2: Determine the sign
    let sign = 1;
    let index = 0;
    if (s[index] === '-') {
        sign = -1;
        index++;
    } else if (s[index] === '+') {
        index++;
    }
    
    // Step 3: Read the integer
    let num = 0;
    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
        const digit = s.charCodeAt(index) - '0'.charCodeAt(0);
        num = num * 10 + digit;
        index++;

        // Step 4: Handle overflow
        if (sign === 1 && num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
        if (sign === -1 && num > Math.pow(2, 31)) return -Math.pow(2, 31);
    }
    
    return sign * num;
}

// Example usage:
console.log(myAtoi("42"));          // Output: 42
console.log(myAtoi(" -042"));       // Output: -42
console.log(myAtoi("1337c0d3"));    // Output: 1337
console.log(myAtoi("0-1"));         // Output: 0
console.log(myAtoi("words and 987"));// Output: 0
