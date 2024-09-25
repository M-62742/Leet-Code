class TrieNode {
    constructor() {
        this.children = {};
        this.count = 0; // Count of words passing through this node
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.count++;
        }
    }
}

function sumPrefixScores(words) {
    const trie = new Trie();
    
    // Insert all words into the Trie
    words.forEach(word => trie.insert(word));

    // Calculate scores
    return words.map(word => {
        let score = 0;
        let node = trie.root;
        for (const char of word) {
            node = node.children[char];
            score += node.count; // Add the count of words that share this prefix
        }
        return score;
    });
}

// Example usage:
console.log(sumPrefixScores(["abc", "ab", "bc", "b"])); // Output: [5, 4, 3, 2]
console.log(sumPrefixScores(["abcd"])); // Output: [4]
