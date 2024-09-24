function convert(s, numRows) {
    // If numRows is 1 or greater than or equal to s length, return the string itself
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    // Create an array to hold the strings for each row
    const rows = Array.from({ length: Math.min(numRows, s.length) }, () => '');

    let currentRow = 0;
    let goingDown = false;

    // Iterate over each character in the string
    for (const char of s) {
        // Append the character to the current row
        rows[currentRow] += char;

        // Change direction if we are at the top or bottom row
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // Move to the next row
        currentRow += goingDown ? 1 : -1;
    }

    // Join all rows to form the final result
    return rows.join('');
}

// Example usage:
console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
console.log(convert("A", 1));               // Output: "A"
