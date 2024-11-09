/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Step 1: Trim any trailing spaces
    let trimmedStr = s.trim();
    
    // Step 2: Split by spaces to get an array of words
    let words = trimmedStr.split(" ");
    
    // Step 3: Filter out empty strings in case of extra spaces
    words = words.filter(word => word.length > 0);
    
    // Step 4: Get the last word
    let lastWord = words[words.length - 1];
    
    // Step 5: Return the length of the last word
    return lastWord.length;
};

// Test cases
console.log(lengthOfLastWord("Hello World"));  // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  "));  // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy"));  // Output: 6
