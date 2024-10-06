/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
function areSentencesSimilar(sentence1, sentence2) {
    const words1 = sentence1.split(' ');
    const words2 = sentence2.split(' ');

    // Check if one sentence is a prefix of the other
    let i = 0;
    while (i < words1.length && i < words2.length && words1[i] === words2[i]) {
        i++;
    }

    // Check if one sentence is a suffix of the other
    let j = 0;
    while (j < words1.length - i && j < words2.length - i && words1[words1.length - 1 - j] === words2[words2.length - 1 - j]) {
        j++;
    }

    // If the total number of words matched equals the total number of words in the shorter sentence
    return i + j >= Math.min(words1.length, words2.length);
}

// Example test cases
console.log(areSentencesSimilar("My name is Haley", "My Haley")); // true
console.log(areSentencesSimilar("of", "A lot of words")); // false
console.log(areSentencesSimilar("Eating right now", "Eating")); // true
