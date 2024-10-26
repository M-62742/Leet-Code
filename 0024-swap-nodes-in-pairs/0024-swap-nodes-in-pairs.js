/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function swapPairs(head) {
    // Create a dummy node that points to the head
    const dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy; // This will track the node before the pair being swapped

    while (prev.next && prev.next.next) {
        // Identify the two nodes to swap
        const first = prev.next;
        const second = prev.next.next;

        // Perform the swapping
        first.next = second.next; // Link first node to the node after the second
        second.next = first;       // Link second node to the first
        prev.next = second;        // Link the previous node to the second

        // Move prev two nodes ahead
        prev = first; // Now prev is the first node, which is in the second position
    }

    return dummy.next; // Return the new head (which is dummy.next)
}

// Example usage
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const swappedHead = swapPairs(head);

// Function to print the list for verification
function printList(node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result);
}

printList(swappedHead); // Output: [2, 1, 4, 3]
