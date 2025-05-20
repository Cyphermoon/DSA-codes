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

    breadthFirstSearch() {
        //* Thought process
        // we have a visited array that stores the visited node
        // we should also have another "queue" array we can use to process nodes
        // start the "queue" with the root node
        // in the main execution, we can get the dequeued node, add that to the visited
        // if visited node has either left or right, add it to the queue for processing
        // return the visited list at the end

        const visited = []
        const queue = []

        let currentNode;
        queue.push(this.root)

        while (queue.length) {
            currentNode = queue.shift()
            visited.push(currentNode.value)
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }

        return visited
    }

    breadFirstSearchRecursive() {
        //* Thought process
        // we can make this function a wrapper function that calls the recursive function
        // let's start be defining the required variables e.g visited and queue and pass it to the recursive function 
        //------------------------//
        //    recursive function - thought process
        //      return visited if the queue is empty
        //      unit of work in recursion if to process an item in a queue and update the queue with it's children

        const visited = []
        const queue = []
        let currentNode;

        queue.push(this.root)

        const processQueue = (queue, visited) => {
            if (!queue.length) return visited

            currentNode = queue.shift()
            visited.push(currentNode.value)
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)

            return processQueue(queue, visited)
        }

        const res = processQueue(queue, visited)
        return res

    }

    depthFirstSearchPreOrder() {
        //* Thought process
        // have a visited array
        // a recursive function that traverse the tree


        const visited = []
        const currentNode = this.root

        const processNode = (currentNode) => {
            if (!currentNode) return null

            visited.push(currentNode.value)

            if (currentNode.left) processNode(currentNode.left)
            if (currentNode.right) processNode(currentNode.right)
        }

        processNode(currentNode)

        return visited
    }

    depthFirstSearchInOrder() {
        //* Thought Process
        // I've got this

        const visited = []
        const currentNode = this.root

        const processNode = (currentNode) => {
            if (!currentNode) return null

            if (currentNode.left) processNode(currentNode.left)
            visited.push(currentNode.value)
            if (currentNode.right) processNode(currentNode.right)
        }

        processNode(currentNode)

        return visited
    }

    depthFirstSearchPostOrder() {
        //* Thought process
        // Practicing typing speed

        const visited = []
        const currentNode = this.root

        const processNode = (currentNode) => {
            if (!currentNode) return null

            if (currentNode.left) processNode(currentNode.left)
            if (currentNode.right) processNode(currentNode.right)
            visited.push(currentNode.value)
        }

        processNode(currentNode)
        return visited
    }
}


// Create a new binary search tree
const tree = new BinarySearchTree();

// Insert values to populate the tree
tree.insert(10);      // Root
tree.insert(6);       // Left of 10
tree.insert(15);      // Right of 10
tree.insert(3);       // Left of 6
tree.insert(8);       // Right of 6
tree.insert(20);      // Right of 15

// This creates a tree that looks like:
//       10
//      /  \
//     6    15
//    / \     \
//   3   8    20

// You can verify the structure
console.log(tree);

console.log("Breadth First Search Recursive:", tree.breadFirstSearchRecursive())
console.log("Depth First Search (PreOrder):", tree.depthFirstSearchPreOrder())
console.log("Depth First Search (In Order):", tree.depthFirstSearchInOrder())
console.log("Depth First Search (Post Order):", tree.depthFirstSearchPostOrder())

