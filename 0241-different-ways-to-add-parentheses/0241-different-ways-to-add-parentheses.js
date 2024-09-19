function diffWaysToCompute(expression) {
    // Base case: if the expression is just a number, return it as an array
    if (!isNaN(expression)) {
        return [parseInt(expression)];
    }
    
    const results = [];
    
    // Loop through the expression to find operators
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (char === '+' || char === '-' || char === '*') {
            // Split the expression into left and right parts
            const leftExpr = expression.slice(0, i);
            const rightExpr = expression.slice(i + 1);
            
            // Recursively compute all results from left and right parts
            const leftResults = diffWaysToCompute(leftExpr);
            const rightResults = diffWaysToCompute(rightExpr);
            
            // Combine results based on the operator
            for (const left of leftResults) {
                for (const right of rightResults) {
                    if (char === '+') {
                        results.push(left + right);
                    } else if (char === '-') {
                        results.push(left - right);
                    } else if (char === '*') {
                        results.push(left * right);
                    }
                }
            }
        }
    }
    
    return results;
}

// Example usage:
console.log(diffWaysToCompute("2-1-1")); // Output: [0, 2]
console.log(diffWaysToCompute("2*3-4*5")); // Output: [-34, -14, -10, -10, 10]
