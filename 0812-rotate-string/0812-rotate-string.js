/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
function rotateString(s, goal) {
    // Check if s and goal have the same length
    if (s.length !== goal.length) {
        return false;
    }
    
    // Concatenate s with itself
    let combined = s + s;
    
    // Check if goal is a substring of combined
    return combined.includes(goal);
}

// Example test cases
console.log(rotateString("abcde", "cdeab")); // Output: true
console.log(rotateString("abcde", "abced")); // Output: false
