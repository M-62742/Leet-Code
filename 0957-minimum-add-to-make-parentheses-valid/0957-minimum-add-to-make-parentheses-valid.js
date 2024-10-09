/**
 * @param {string} s
 * @return {number}
 */
function minAddToMakeValid(s) {
    let open = 0;
    let close = 0;

    for (const char of s) {
        if (char === '(') {
            open++;
        } else if (char === ')') {
            if (open > 0) {
                open--;
            } else {
                close++;
            }
        }
    }

    return open + close;
}