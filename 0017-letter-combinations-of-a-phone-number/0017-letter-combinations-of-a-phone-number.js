function letterCombinations(digits) {
    if (digits.length === 0) return [];

    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result = [];

    function backtrack(combination, nextDigits) {
        // If there are no more digits to process
        if (nextDigits.length === 0) {
            result.push(combination);
        } else {
            // Get the letters that the current digit maps to
            const digit = nextDigits.charAt(0);
            const letters = phoneMap[digit];

            // Loop through the letters and call backtrack recursively
            for (const letter of letters) {
                backtrack(combination + letter, nextDigits.slice(1));
            }
        }
    }

    backtrack('', digits);
    return result;
}

// Example usage:
console.log(letterCombinations("23")); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations(""));   // Output: []
console.log(letterCombinations("2"));  // Output: ["a","b","c"]
