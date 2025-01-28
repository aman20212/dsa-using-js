// piece of data - val
//reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {

    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")


/* ==================================================== */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    pop() {
        if (!this.head) return undefined; // If the list is empty, return undefined

        // If there's only one node in the list
        if (this.head === this.tail) {
            const removedNode = this.head;
            this.head = this.tail = null;
            this.length--;
            return removedNode;
        }

        // Traverse to the second-last node
        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }

        // Now, `current` is the second-last node
        const removedNode = this.tail;
        this.tail = current;
        this.tail.next = null; // Remove the reference to the old last node

        this.length--;
        return removedNode; // Return the removed node
    }

    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        // Check if the index is out of bounds
        if (index < 0 || index >= this.length) {
            return null; // Or throw an error if you prefer
        }

        // Start from the head of the list
        let current = this.head;
        let count = 0;

        // Traverse the list until we reach the desired index
        while (count < index) {
            current = current.next; // Move to the next node
            count++; // Increment count
        }

        // Return the value at the specified index
        return current.val;
    }

    set(index, value) {
        // Check if the index is out of bounds
        if (index < 0 || index >= this.length) {
            return false; // Or throw an error if you prefer
        }

        // Start from the head of the list
        let current = this.head;
        let count = 0;

        // Traverse the list until we reach the desired index
        while (count < index) {
            current = current.next; // Move to the next node
            count++; // Increment count
        }

        // Update the value at the specified index
        current.val = value;

        return true; // Indicate that the value was successfully updated
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    insert(index, value) {
        // Check if the index is out of bounds
        if (index < 0 || index > this.length) {
            return false; // Or throw an error if preferred
        }

        // Create the new node
        const newNode = new Node(value);

        // Special case: insert at the head (index 0)
        if (index === 0) {
            newNode.next = this.head; // Make the new node point to the old head
            this.head = newNode;      // Make the new node the head
        } else {
            let current = this.head;
            let count = 0;

            // Traverse to the node just before the desired index
            while (count < index - 1) {
                current = current.next;
                count++;
            }

            // Insert the new node
            newNode.next = current.next; // Point the new node to the next node
            current.next = newNode;      // Make the current node point to the new node
        }

        // If we inserted at the end, update the tail
        if (index === this.length) {
            this.tail = newNode;
        }

        this.length++; // Increment the length of the list
        return true;    // Indicate success
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    reverse() {
        let prev = null;     // Initially, no node has been reversed
        let current = this.head;  // Start with the head of the list
        let next = null;     // To store the next node temporarily

        while (current !== null) {
            next = current.next; // Save the next node
            current.next = prev; // Reverse the 'next' pointer of the current node
            prev = current;      // Move prev to the current node
            current = next;      // Move to the next node
        }

        // After the loop, prev will be pointing to the new head
        this.tail = this.head;   // The original head is now the tail
        this.head = prev;        // Update the head to the new head (prev)

        return this;  // Optionally return the list to allow method chaining
    }
    print() {
        var arr = [];
        var current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}

var list = new SinglyLinkedList()
list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)
// list.push("HELLO")
// list.push("GOODBYE")