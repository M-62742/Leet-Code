/**
 * @param {number[]} skill
 * @return {number}
 */
function dividePlayers(skill) {
    const n = skill.length;
    
    // Sort the skill array
    skill.sort((a, b) => a - b);
    
    // Calculate the target skill sum for each team
    const targetSum = skill[0] + skill[n - 1];
    
    let totalChemistry = 0;

    // Check if we can form valid teams
    for (let i = 0; i < n / 2; i++) {
        const teamSkillSum = skill[i] + skill[n - 1 - i];
        
        // If the team skill sum is not equal to target sum, return -1
        if (teamSkillSum !== targetSum) {
            return -1;
        }
        
        // Calculate chemistry for this team
        totalChemistry += skill[i] * skill[n - 1 - i];
    }
    
    return totalChemistry;
}

// Example usage:
console.log(dividePlayers([3, 2, 5, 1, 3, 4])); // Output: 22
console.log(dividePlayers([3, 4])); // Output: 12
console.log(dividePlayers([1, 1, 2, 3])); // Output: -1
