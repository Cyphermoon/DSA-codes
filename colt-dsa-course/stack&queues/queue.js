class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    print_pointers() {
        let str = ""

        let current = this.first

        while (current) {
            current.next === null ? str += `${current.value}` : str += `${current.value} -> `
            current = current.next
        }

        console.log(str)
    }

    enqueue(val) {
        if (this.size === 0) {
            const newNode = new Node(val)
            this.first = newNode
            this.last = newNode

            return ++this.size
        }

        const newNode = new Node(val)
        this.last.next = newNode
        this.last = newNode

        return ++this.size
    }

    dequeue() {
        if (this.size === 0) return null

        const removedNode = this.first
        this.first = removedNode.next
        removedNode.next = null

        if (this.size === 1) {
            this.last = null
        }

        this.size--
        return removedNode
    }
}


// Create a new queue
const queue = new Queue();

// Add some elements
console.log("Enqueuing 1, 2, 3:");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print_pointers(); // Should print: 1 -> 2 -> 3

// Remove an element
console.log("\nDequeuing one element:");
const removed = queue.dequeue();
console.log("Removed:", removed.value);
queue.print_pointers(); // Should print: 2 -> 3

// Add more elements
console.log("\nEnqueuing 4, 5:");
queue.enqueue(4);
queue.enqueue(5);
queue.print_pointers(); // Should print: 2 -> 3 -> 4 -> 5

// Remove until empty
console.log("\nDequeuing all elements:");
while (queue.size > 0) {
    console.log("Removing:", queue.dequeue().value);
}
queue.print_pointers(); // Should print nothing

// Try to remove from empty queue
console.log("\nAttempting to dequeue from empty queue:");
const result = queue.dequeue();
console.log("Result:", result); // Should print: Result: null