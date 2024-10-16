/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    // Create a stack to keep track of opening brackets
    const stack = [];
    // Create a map for matching closing brackets with opening ones
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    // Loop through each character in the string
    for (let char of s) {
        // If the character is an opening bracket, push it to the stack
        if (bracketMap[char]) {
            stack.push(char);
        } else {
            // If the character is a closing bracket, check if it matches the last opened bracket
            const lastOpened = stack.pop();
            if (bracketMap[lastOpened] !== char) {
                return false; // Invalid if the brackets don't match
            }
        }
    }

    // If the stack is empty, all opening brackets have been closed correctly
    return stack.length === 0;
}


