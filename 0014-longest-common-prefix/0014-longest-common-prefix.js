/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  let prefix = strs[0]; // Start with the first string as the initial prefix

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) { 
      // Keep reducing the prefix until it's found at the start of the string
      prefix = prefix.slice(0, prefix.length - 1);
      if (!prefix) return ""; // Return empty string if no common prefix exists
    }
  }

  return prefix;
}

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
