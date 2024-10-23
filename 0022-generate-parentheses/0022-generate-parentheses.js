/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    const result = [];

    function backtrack(current, open, close) {
        // If the current combination is valid, add it to the result
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // If we can add an open parenthesis, do so
        if (open < n) {
            backtrack(current + '(', open + 1, close);
        }

        // If we can add a close parenthesis, do so
        if (close < open) {
            backtrack(current + ')', open, close + 1);
        }
    }

    backtrack('', 0, 0);
    return result;
}

// Example usage:
console.log(generateParenthesis(3)); // Output: ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // Output: ["()"]
