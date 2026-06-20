# LinkedList Problems

---

## 1. Merge Two Sorted Lists (Recursion)

**Definition:** Merging two sorted linked lists into one sorted linked list by comparing elements recursively.

**Use Case:** Combining sorted data from different sources such as merging user timelines, logs, or queues efficiently.

```js
function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
```

**Interview Q&A:**

- **Q: How does the recursive merging work internally?**
- A: It compares the current nodes of both lists and recursively merges the rest, always choosing the smaller node as the next part of the merged list.

- **Q: What is the time complexity?**
- A: O(n + m), where n and m are the lengths of the two lists.

---

## 2. Reverse a Linked List (Iterative)

**Definition:** Reversing the order of nodes in a singly linked list using a loop.

**Use Case:** Used in undo functionality, stack implementation, or solving problems that require processing in reverse.

```js
function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
```

**Interview Q&A:**

- **Q: What's the key idea behind iterative reversal?**
- A: Rewire the next pointers of each node to point to the previous node.

- **Q: Time and space complexity?**
- A: Time: O(n), Space: O(1)

---

## 3. Reverse a Linked List (Recursive)

**Definition:** Reverses a linked list using recursive function calls and backtracking.

**Use Case:** Elegant for problems where recursive backtracking naturally fits the logic like tree post-order traversal or stack unrolling.

```js
function reverseList(head) {
    if (!head || !head.next) return head;

    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
}
```

**Interview Q&A:**

- **Q: What is the base case in recursion?**
- A: When the node is null or there's only one node (`!head.next`), return that node.

- **Q: Any limitation of recursive approach?**
- A: Stack overflow risk on very large lists due to call stack depth.

---

## 4. Detect Cycle in Linked List (Floyd's Algorithm)

**Definition:** Detects if a linked list contains a cycle using two pointers moving at different speeds.

**Use Case:** Crucial in identifying infinite loops in linked list operations or problems involving circular references.

```js
function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true;
    }
    return false;
}
```

**Interview Q&A:**

- **Q: Why does the fast pointer eventually meet the slow one in a cycle?**
- A: Because fast moves 2 steps and slow 1 step — like a runner lapping another on a circular track.

- **Q: Time and space complexity?**
- A: Time: O(n), Space: O(1)

---

## 5. Remove Duplicates from Sorted Linked List

**Definition:** Removes consecutive duplicate nodes from a sorted linked list.

**Use Case:** Used in data cleanup tasks where duplicate records are not needed (e.g., de-duplicating user input, removing redundancy in logs).

```js
function deleteDuplicates(head) {
    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}
```

**Interview Q&A:**

- **Q: Why does this work only for sorted lists?**
- A: Because duplicates in unsorted lists may not be consecutive — this method relies on adjacent nodes being equal.

- **Q: Can this be done recursively?**
- A: Yes, by checking the current node and calling recursively for `head.next`.

---

## 6. Reverse Nodes in K-Group

### Problem 6 - Definition

Reverse nodes in a linked list in groups of k. If remaining nodes < k, leave them as-is.

### Problem 6 - Code

```js
function reverseKGroup(head, k) {
    let count = 0;
    let temp = head;
    while (temp && count < k) {
        temp = temp.next;
        count++;
    }

    if (count < k) return head;

    // Reverse k nodes
    function reverseList(head, k) {
        let prev = null;
        let curr = head;
        while (k > 0) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            k--;
        }
        return prev;
    }
}
```

### Problem 6 - Use Case

Processing data packets/chunks in groups where order needs to be reversed — scheduling systems, memory batch updates, distributed processing.

### Problem 6 - Interview Q&A

**Q: Base condition for recursion?**  
A: If remaining nodes < k, return head as-is.

**Q: Why a separate reverse function?**  
A: Cleaner code, reusable reverse logic for k nodes.

**Q: Time complexity?**  
A: O(N)

**Q: Space complexity?**  
A: O(N/k) — due to recursive calls.

---

## 7. Add Two Numbers (Linked List)

### Problem 7 - Definition

Two linked lists represent non-negative integers in **reverse order** (ones digit first). Add them and return the sum as a linked list.

### Problem 7 - Code

```js
function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let temp = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let val1 = (l1 !== null) ? l1.val : 0;
        let val2 = (l2 !== null) ? l2.val : 0;

        let data = val1 + val2 + carry;
        carry = Math.floor(data / 10);

        temp.next = new ListNode(data % 10);
        temp = temp.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        temp.next = new ListNode(carry);
    }

    return dummy.next;
}
```

### Problem 7 - Use Case

Removes consecutive duplicate nodes from a sorted linked list. *(Also: any big-number arithmetic where numbers exceed integer limits.)*

### Problem 7 - Interview Q&A

**Q: Why use a dummy node?**  
A: Simplifies head handling, avoids null checks during iteration.

**Q: Sum of digits exceeds 9?**  
A: Compute carry = `Math.floor(data / 10)`, add to next iteration.

**Q: Lists of different lengths?**  
A: Treat missing nodes as 0: `(l1 !== null) ? l1.val : 0`

**Q: Leftover carry after loop ends?**  
A: Append a new node with the carry value.
