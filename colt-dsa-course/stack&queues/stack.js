class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}


class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
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

    push(val) {
        if (this.size === 0) {
            const newNode = new Node(val)
            this.first = newNode
            this.last = newNode

            return ++this.size
        }

        const newNode = new Node(val)
        newNode.next = this.first
        this.first = newNode


        return ++this.size
    }

    pop() {
        if (this.size === 0) return null

        const removedNode = this.first
        this.first = removedNode.next

        removedNode.next = null
        this.size--

        return removedNode
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

stack.pop()
stack.pop()

stack.print_pointers()
