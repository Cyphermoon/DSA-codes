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

    get(idx) {
        if (idx < 0 || idx >= this.length) return null


        let mid = Math.floor(this.length / 2)
        const isLeftPart = idx < mid

        if (isLeftPart) {
            let idxCounter = 0
            let current = this.head

            while (current) {
                if (idx === idxCounter) {
                    return current
                }

                current = current.next
                idxCounter++
            }
        } else {
            let idxCounter = this.length - 1
            let current = this.tail

            while (current) {
                if (idx === idxCounter) {
                    return current
                }

                current = current.prev
                idxCounter--
            }
        }

        return null
    }
}


const dll = new DoublyLinkedList()

dll.push(10)
dll.push(20)
dll.push(30)

console.log("Get Method:", dll.get(0).val)