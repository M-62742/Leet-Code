/**
 * @param {string} sentence
 * @return {boolean}
 */
function isCircularSentence(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Iterate through the words and check conditions
    for (let i = 0; i < words.length; i++) {
        // Get the current word and the next word (wrap around for the last word)
        const currentWord = words[i];
        const nextWord = words[(i + 1) % words.length]; // Use modulo to wrap around

        // Check if the last character of the current word matches the first character of the next word
        if (currentWord[currentWord.length - 1] !== nextWord[0]) {
            return false;
        }
    }

    // If all checks pass, the sentence is circular
    return true;
}

// Example usage
console.log(isCircularSentence("leetcode exercises sound delightful")); // Output: true
console.log(isCircularSentence("eetcode")); // Output: true
console.log(isCircularSentence("Leetcode is cool")); // Output: false
