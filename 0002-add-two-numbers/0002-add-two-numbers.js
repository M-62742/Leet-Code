class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    const dummyHead = new ListNode(0); // Dummy head for the result list
    let current = dummyHead; // Pointer to the current node in the result list
    let carry = 0; // Variable to hold carry over

    while (l1 !== null || l2 !== null || carry !== 0) {
        const val1 = l1 ? l1.val : 0; // Get value from l1 or 0 if l1 is null
        const val2 = l2 ? l2.val : 0; // Get value from l2 or 0 if l2 is null

        // Calculate the sum
        const total = val1 + val2 + carry;
        carry = Math.floor(total / 10); // Update carry for next iteration
        current.next = new ListNode(total % 10); // Create a new node for the result
        current = current.next; // Move to the new node

        // Move to the next nodes in l1 and l2
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next; // Return the next node of dummy head, which is the start of the result list
}
