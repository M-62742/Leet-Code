/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function mergeTwoLists(list1, list2) {
    // Create a dummy node to simplify the merging process
    const dummy = new ListNode(0);
    let current = dummy;

    // While both lists have nodes
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;  // Link to the smaller node
            list1 = list1.next;    // Move to the next node in list1
        } else {
            current.next = list2;  // Link to the smaller node
            list2 = list2.next;    // Move to the next node in list2
        }
        current = current.next;    // Move to the next position in the merged list
    }

    // If one of the lists is not empty, link the remainder
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Return the merged list, starting from the first node (after the dummy)
    return dummy.next;
}

// Example usage:
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergedList = mergeTwoLists(list1, list2);

// Function to print the linked list
function printList(node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result);
}

printList(mergedList); // Output: [1, 1, 2, 3, 4, 4]
