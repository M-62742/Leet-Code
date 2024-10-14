/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function uncommonWords(s1, s2) {
    const wordCount = new Map();

    function countWords(sentence) {
        const words = sentence.split(' ');
        for (const word of words) {
            wordCount.set(word, (wordCount.get(word) || 0) + 1);
        }
    }

    countWords(s1);
    countWords(s2);

    const uncommon = [];
    for (const [word, count] of wordCount) {
        if (count === 1) {
            if (s1.includes(word) || s2.includes(word)) {
                uncommon.push(word);
            }
        }
    }

    return uncommon;
}

