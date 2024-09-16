/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    const length = s.length;

    // Iterate over each character in the string
    for (let i = 0; i < length; i++) {
        // Get the value of the current Roman numeral
        const currentValue = romanMap[s[i]];
        
        // Check if there's a next character and get its value
        if (i + 1 < length) {
            const nextValue = romanMap[s[i + 1]];
            // If the current value is less than the next value, subtract it
            if (currentValue < nextValue) {
                total -= currentValue;
            } else {
                // Otherwise, add it
                total += currentValue;
            }
        } else {
            // If it's the last character, just add its value
            total += currentValue;
        }
    }

    return total;
};
