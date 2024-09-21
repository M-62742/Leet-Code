function isMatch(s, p) {
    const memo = {};

    function dp(i, j) {
        // Check if the result is already cached
        if (memo[`${i},${j}`] !== undefined) return memo[`${i},${j}`];

        // If we have reached the end of the pattern
        if (j === p.length) return i === s.length;

        // Check if the current characters match
        const firstMatch = (i < s.length && (p[j] === s[i] || p[j] === '.'));

        let result;
        if (j + 1 < p.length && p[j + 1] === '*') {
            // Skip the current pattern character and the '*' (0 matches)
            // or match the current character and continue (1 or more matches)
            result = (dp(i, j + 2) || (firstMatch && dp(i + 1, j)));
        } else {
            // Move to the next character in both string and pattern
            result = firstMatch && dp(i + 1, j + 1);
        }

        // Cache the result
        memo[`${i},${j}`] = result;
        return result;
    }

    return dp(0, 0);
}

// Example usage:
console.log(isMatch("aa", "a"));    // Output: false
console.log(isMatch("aa", "a*"));   // Output: true
console.log(isMatch("ab", ".*"));   // Output: true
