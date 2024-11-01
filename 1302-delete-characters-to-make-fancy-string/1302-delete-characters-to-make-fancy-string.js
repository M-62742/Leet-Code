/**
 * @param {string} s
 * @return {string}
 */
function makeFancyString(s) {
    let result = '';
    let count = 1;

    for (let i = 0; i < s.length; i++) {
        // Add the first character to the result
        if (i === 0) {
            result += s[i];
            continue;
        }

        // Check if the current character is the same as the previous one
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        // Only add the character if it doesn't make three consecutive characters
        if (count < 3) {
            result += s[i];
        }
    }

    return result;
}

// Test cases
console.log(makeFancyString("leeetcode")); // Output: "leetcode"
console.log(makeFancyString("aaabaaaa"));  // Output: "aabaa"
console.log(makeFancyString("aab"));       // Output: "aab"
