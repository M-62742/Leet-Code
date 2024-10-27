/**
 * @param {number[][]} matrix
 * @return {number}
 */
function countSquares(matrix) {
    if (!matrix || matrix.length === 0) return 0;

    const m = matrix.length;
    const n = matrix[0].length;
    let count = 0;
    const dp = Array.from({ length: m }, () => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1) {
                // If we're in the first row or first column, the largest square is 1
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    // Find the minimum square size of the neighboring squares
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }
                // Accumulate the count of squares
                count += dp[i][j];
            }
        }
    }

    return count;
}

// Example usage:
const matrix1 = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1]
];
console.log(countSquares(matrix1)); // Output: 15

const matrix2 = [
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0]
];
console.log(countSquares(matrix2)); // Output: 7
