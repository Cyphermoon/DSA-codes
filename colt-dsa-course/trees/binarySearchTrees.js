class Node {
    constructor(val) {
        this.left = null
        this.value = val
        this.right = null
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        // create a new node
        // edge cases: check if the root does not exist, if the value is the same as of the the tree nodes
        // if current node is greater than new node, check if the position is empty then create a node there otherwise move on to that position
        // if the current node is less than new node, only move there if the position is not empty otherwise create a new node
        // general spec: return the tree itself

        const newNode = new Node(val)

        if (!this.root) {
            this.root = newNode
            return this
        }

        let current = this.root
        let isNodeInserted = false

        while (!isNodeInserted) {
            if (val === current.value) return null

            if (val < current.value) {
                if (!current.left) {
                    current.left = newNode
                    isNodeInserted = true
                    continue
                }

                current = current.left
            } else if (val > current.value) {
                if (!current.right) {
                    current.right = newNode
                    isNodeInserted = true
                    continue
                }

                current = current.right
            }
        }

        return this
    }

    insert_recursive(val, node = this.root) {
        if (this.root === null) {
            this.root = new Node(val)
            return this
        }

        if (node.value === val) return this

        if (val < node.value) {
            if (!node.left) {
                node.left = new Node(val)
            } else {
                this.insert_recursive(val, node.left)
            }
        } else if (val > node.value) {
            if (!node.right) {
                node.right = new Node(val)
            } else {
                this.insert_recursive(val, node.right)
            }
        }

        return this
    }

    find(val) {
        if (!this.root) return undefined

        let current = this.root

        while (true) {
            if (current.value === val) return current
            if (val < current.value) {
                if (!current.left) return undefined
                current = current.left
            } else if (val > current.value) {
                if (!current.right) return undefined
                current = current.right
            }
        }
    }
}