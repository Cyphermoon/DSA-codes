class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        if (typeof value !== "number") return undefined

        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode

        }

        this.length++
        return this
    }

    pop() {
        if (!this.head) {
            return undefined
        }

        let current = this.head
        let prev;

        while (current.next) {
            prev = current
            current = current.next
        }

        prev.next = null
        this.tail = prev
        this.length--
        return current
    }

    print() {
        let idxMap = {}
        let current = this.head

        let idx = 0

        while (current) {
            idxMap[idx] = current.val
            current = current.next
            idx++
        }

        console.log(idxMap)
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
        if (!this.head) return null
        if (idx < 0 || idx >= this.length) return null


        let current = this.head
        let idxCounter = 0

        while (current) {
            if (idx === idxCounter) {
                return current
            }

            current = current.next
            idxCounter++
        }

        return null
    }

    set(idx, val) {
        const node = this.get(idx)

        if (!node) return false

        node.val = val
        return true
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false

        // Insert at the beginning
        if (idx === 0) {
            const newNode = new Node(val)
            newNode.next = this.head
            this.head = newNode

            if (this.length === 0) {
                this.tail = this.head
            }

            this.length++
            return true
        }

        // Insert at the end
        if (idx === this.length) {
            return !!this.push(val)
        }

        // Insert in the middle
        const newNode = new Node(val)
        const prevNode = this.get(idx - 1)

        newNode.next = prevNode.next
        prevNode.next = newNode

        this.length++
        return true
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined

        if (idx === 0) {
            const removedNode = this.head
            this.head = removedNode.next

            if (this.length === 1) {
                this.tail = this.head
            }

            removedNode.next = null
            this.length--
            return removedNode
        }

        if (idx === this.length - 1) {
            return this.pop()
        }

        let prevNode = this.get(idx - 1)
        let currentNode = this.get(idx)

        prevNode.next = currentNode.next
        currentNode.next = null

        this.length--
        return currentNode
    }

    reverse() {
        if (this.length <= 1) {
            return this
        }

        let currentNode = this.head
        this.head = this.tail
        this.tail = currentNode

        let prev = null
        let nextNode;

        while (currentNode) {
            nextNode = currentNode.next
            currentNode.next = prev

            prev = currentNode
            currentNode = nextNode
        }

        return this
    }

    reverse_recursion(head = this.head) {
        if (head === null || head.next === null) {
            return head
        }

        let tail = this.reverse_recursion(head.next)
        head.next.next = head
        head.next = null

        if (head === this.head) {
            this.tail = head
            this.head = tail
        }

        return tail
    }

    rotate(range) {
        if (range < 1 || range >= this.length) {
            return this
        }

        const rangeNode = this.get(range - 1)

        if (!rangeNode) return null

        const prevHead = this.head

        this.head = rangeNode.next
        rangeNode.next = null

        this.tail.next = prevHead
    }
}

const linkedList = new SinglyLinkedList()

linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
linkedList.push(4)
linkedList.push(5)
linkedList.insert(5, 6)


console.log("Before rotation:")
linkedList.print_pointers()

linkedList.rotate(6)

console.log("\nAfter rotation:")
linkedList.print_pointers()