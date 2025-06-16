class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}


class priorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        /*
        Thought Process: 
            1. Add the input element to then end of the array first,
            2. figure out the parent element: (n - 1) / 2.
            3. iteratively or recursively compare compare with the parent element until it's at the top. Note: update the calculated parentIdx after each positive comparison
         */

        const newNode = new Node(val, priority)
        this.values.push(newNode)

        if (this.values.length <= 1) return null

        let elementIdx = this.values.length - 1
        let parentIdx = undefined

        while (elementIdx > 0) {
            parentIdx = Math.floor((elementIdx - 1) / 2)
            if (this.values[elementIdx].priority < this.values[parentIdx].priority) {
                this.swap(elementIdx, parentIdx)
                elementIdx = parentIdx
            }

            else break
        }

        return elementIdx
    }

    dequeue() {
        //Thought process (hopefully i gain more consistency this from now. it's been a while)
        // Remove the maximum element from the tree
        // take the last element and put it in the max element place
        // the sink down until you get to the right spot and the heap is in the correct order

        const removedElem = this.values[0]
        const end = this.values.pop()

        if (this.values.length <= 0) return end
        this.values[0] = end

        let parentIdx = 0
        let parentElem = this.values[parentIdx]

        while (true) {
            let leftChildIdx = (parentIdx * 2) + 1
            let leftChildElem = leftChildIdx < this.values.length ? this.values[leftChildIdx] : new Node(null, Infinity)

            let rightChildIdx = (parentIdx * 2) + 2
            let rightChildElem = rightChildIdx < this.values.length ? this.values[rightChildIdx] : new Node(null, Infinity)

            if (leftChildElem.priority === Infinity && rightChildElem.priority === Infinity) break;

            let minChild = Math.min(leftChildElem.priority, rightChildElem.priority)

            let minChildIdx;
            if (minChild === rightChildElem.priority) minChildIdx = rightChildIdx
            if (minChild === leftChildElem.priority) minChildIdx = leftChildIdx

            if (parentElem.priority < minChild.priority) break

            this.swap(parentIdx, minChildIdx)
            parentIdx = minChildIdx
        }

        return removedElem
    }

    swap(idx1, idx2) {
        [this.values[idx2], this.values[idx1]] = [this.values[idx1], this.values[idx2]]
    }
}

// ...existing code...

// Test Examples
console.log("========== Priority Queue Tests ==========");

// Create a new priority queue (lower number = higher priority)
const emergencyRoom = new priorityQueue();

// Test enqueueing elements
console.log("Adding patients to emergency room queue:");
emergencyRoom.enqueue("gunshot wound", 1);
emergencyRoom.enqueue("broken arm", 3);
emergencyRoom.enqueue("high fever", 4);
emergencyRoom.enqueue("heart attack", 2);

// Display queue state
console.log("Current queue state:");
console.log(emergencyRoom.values);

// Test dequeuing elements
console.log("\nServing patients in priority order:");
console.log("First patient:", emergencyRoom.dequeue()); // Should be gunshot wound
console.log("Second patient:", emergencyRoom.dequeue()); // Should be heart attack
console.log("Third patient:", emergencyRoom.dequeue()); // Should be broken arm or concussion

// Display queue state after serving some patients
console.log("\nRemaining queue:");
console.log(emergencyRoom.values);

// Add more patients
console.log("\nAdding more patients:");
emergencyRoom.enqueue("severe allergic reaction", 2);
emergencyRoom.enqueue("minor cut", 5);

// Display final queue state
console.log("\nFinal queue state:");
console.log(emergencyRoom.values);

// Empty the queue
console.log("\nServing all remaining patients:");
while (emergencyRoom.values.length > 0) {
    console.log("Serving:", emergencyRoom.dequeue());
}

// Test edge case - empty queue
console.log("\nTrying to serve from empty queue:");
console.log(emergencyRoom.dequeue());