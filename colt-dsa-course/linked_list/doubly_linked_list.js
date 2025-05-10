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
}


const dll = new DoublyLinkedList()

dll.push(10)
dll.push(20)
dll.push(30)