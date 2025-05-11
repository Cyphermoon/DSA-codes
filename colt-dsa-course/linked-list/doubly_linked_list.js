class Node {
    constructor(val) {
        this.prev = null
        this.val = val
        this.next = null
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
            this.length++
            return this
        }

        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++

        return this
    }

    pop() {
        if (this.length === 0) return undefined
        if (this.length === 1) {
            const removedNode = this.tail

            this.head = null
            this.tail = null
            this.length--

            return removedNode
        }

        const removedNode = this.tail
        this.tail = removedNode.prev
        removedNode.prev = null
        this.tail.next = null
        this.length--
        return removedNode
    }

    shift() {
        if (this.length === 0) return undefined
        const removedNode = this.head

        if (this.length === 1) {

            this.head = null
            this.tail = null

            this.length--
            return removedNode
        }

        this.head = removedNode.next
        removedNode.next = null
        this.head.prev = null
        this.length--
        return removedNode
    }

    unshift(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
            this.length++

            return this
        }

        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode

        this.length++
        return this
    }

    print_pointers() {
        let str = ""

        let current = this.head

        while (current) {
            current.next === null ? str += `${current.val}` : str += `${current.val} -> `
            current = current.next
        }

        console.log(str)
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return null

        let mid = Math.floor(this.length / 2)
        const isLeftPart = idx < mid
        let current = null

        if (isLeftPart) {
            current = this.head
            for (let i = 0; i < idx; i++) {
                current = current.next
            }
        } else {
            current = this.tail
            for (let i = this.length - 1; i > idx; i--) {
                current = current.prev
            }
        }

        return current
    }

    set(idx, val) {
        const node = this.get(idx)
        if (!node) return false

        node.val = val
        return true
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false
        if (idx === 0) return !!this.unshift(val)
        if (idx === this.length) return !!this.push(val)

        const newNode = new Node(val)
        const prev = this.get(idx - 1)

        newNode.next = prev.next
        prev.next.prev = newNode
        prev.next = newNode
        newNode.prev = prev
        this.length++

        return true
    }

    remove(idx) {
        if (this.length <= 0) return undefined
        if (idx < 0 || idx >= this.length) return undefined

        if (idx === 0) return this.shift()
        if (idx === this.length - 1) return this.pop()

        const removedNode = this.get(idx)
        const prev = removedNode.prev

        prev.next = removedNode.next
        removedNode.next.prev = removedNode.prev
        removedNode.next = null
        removedNode.prev = null

        this.length--
        return removedNode
    }

    reverse_backward_traverse() {
        // Handle edge cases with consistent return values
        if (this.length <= 1) return this;

        // Start from the tail
        let current = this.tail;
        let nextNodeToProcess = null;

        // Swap head and tail reference
        this.tail = this.head;
        this.head = current;

        // Process each node, working backward
        while (current !== null) {
            // Save reference to the previous node before we change pointers
            nextNodeToProcess = current.prev;

            // Reverse the pointers
            current.prev = current.next;
            current.next = nextNodeToProcess;

            // Move to the next node to process (original previous)
            current = nextNodeToProcess;
        }

        return this;
    }

    reverse() {
        if (this.length === 0) return undefined
        if (this.length === 1) return this

        let current = this.head
        let temp;

        this.head = this.tail
        this.tail = current

        for (let i = 0; i < this.length; i++) {
            temp = current.next
            current.next = current.prev
            current.prev = temp

            current = temp
        }

        return this
    }
}



const dll = new DoublyLinkedList()


dll.push(10)
dll.push(20)
dll.push(30)
dll.push(40)
dll.push(50)

// console.log("Set Method:", dll.set(1, 22))
// console.log("Insert Method: ", dll.insert(2, 25))
// console.log("Remove Method: ", dll.remove(2))

dll.print_pointers()
dll.reverse_backward_traverse()
dll.print_pointers()
